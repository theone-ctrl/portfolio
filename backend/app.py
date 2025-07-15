from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from rag.retriever import get_top_chunks
from rag.model import get_response
from rag.embedder import load_and_embed_all

load_and_embed_all()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/ask")
async def ask_question(request: Request):
    data = await request.json()
    query = data.get("question")

    print("🔍 Received query:", query)

    context = get_top_chunks(query)
    answer = get_response(query, context)

    return {"answer": answer}
