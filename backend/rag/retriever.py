from sentence_transformers import SentenceTransformer
from chromadb import PersistentClient

model = SentenceTransformer("all-MiniLM-L6-v2")
client = PersistentClient(path=".chromadb")
collection = client.get_or_create_collection("personal-docs")

def get_top_chunks(query, k=3):
    print("🔎 Running query:", query)
    print("📦 Collection:", collection.name , collection.count())
    results = collection.query(query_texts=[query], n_results=k)
    print("📦 Query results:", results)
    
    if not results or not results['documents']:
        return ""

    docs = [doc for doc in results['documents'][0]]
    context = "\n\n".join(docs)
    print("📚 Top context:\n", context[:500])
    return context