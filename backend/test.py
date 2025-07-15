from rag.retriever import get_top_chunks
from rag.model import get_response

query = "What AI projects has Nithyanandam worked on?"
context = get_top_chunks(query)

print("🔍 Context:", context)
print("💬 Response:", get_response(query, context))