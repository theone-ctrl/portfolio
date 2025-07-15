import os
from sentence_transformers import SentenceTransformer
from chromadb import PersistentClient
from chromadb.config import Settings
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter

model = SentenceTransformer("all-MiniLM-L6-v2")
client = PersistentClient(path=".chromadb")
collection = client.get_or_create_collection("personal-docs")

def embed_chunks(chunks):
    return model.encode(chunks)

def build_vector_db(chunks, embeddings):
    for i, (chunk, emb) in enumerate(zip(chunks, embeddings)):
        collection.add(documents=[chunk], ids=[f"doc{i}"], embeddings=[emb.tolist()])

def load_pdf_text(pdf_path):
    reader = PdfReader(pdf_path)
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"
    return full_text

def load_and_embed_all():
    data_folder = "data"
    files = [f for f in os.listdir(data_folder) if f.endswith(".pdf")]
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)

    doc_count = 0
    for file in files:
        file_path = os.path.join(data_folder, file)
        text = load_pdf_text(file_path)
        print(text[:1000])  # Print first 1000 characters only
        chunks = splitter.split_text(text)
        embeddings = model.encode(chunks)

        for i, (chunk, emb) in enumerate(zip(chunks, embeddings)):
            collection.add(
                documents=[chunk],
                ids=[f"{file}_chunk{i}"],
                embeddings=[emb.tolist()],
                metadatas=[{"source": file}]
            )
            doc_count += 1

    print(f"✅ Embedded {doc_count} chunks from {len(files)} PDF(s).")