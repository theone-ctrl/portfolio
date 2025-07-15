# AI Portfolio Project

This repository contains a full-stack AI-powered portfolio application. The backend is built with FastAPI and leverages retrieval-augmented generation (RAG) using local PDF documents and a local LLM (Mistral 7B). The frontend is a React app created with Create React App.

---

## Features

- **Frontend:** Modern React app for user interaction.
- **Backend:** FastAPI server with endpoints for question answering.
- **RAG Pipeline:** 
  - PDF ingestion and chunking
  - Embedding with Sentence Transformers
  - Vector search with ChromaDB
  - LLM-powered answer generation using `llama-cpp-python` and Mistral 7B
- **Docker Support:** Easily containerize the backend for deployment.

---

## Project Structure

```
.
├── backend/
│   ├── app.py                # FastAPI main app
│   ├── build_index.py        # Script to build vector index from PDFs
│   ├── rag/
│   │   ├── embedder.py       # PDF loading, chunking, embedding
│   │   ├── retriever.py      # Vector search
│   │   └── model.py          # LLM interface
│   ├── data/                 # Place your PDF files here
│   ├── models/               # Place your .gguf model files here
│   └── .chromadb/            # ChromaDB persistent storage
├── frontend/
│   ├── src/                  # React source code
│   └── ...                   # Usual React app structure
├── .gitignore
├── README.md
└── requirements.txt
```

---

## Getting Started

### 1. Backend Setup

#### Prerequisites
- Python 3.10+
- [C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) (for `llama-cpp-python`)
- Download a `.gguf` LLM model (e.g., Mistral 7B) and place it in `backend/models/`

#### Install dependencies

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```

#### Build the vector index

Place your PDF files in `backend/data/` and run:
```bash
python build_index.py
```

#### Start the backend server

```bash
uvicorn app:app --reload --port 7860
```

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## Docker (Backend)

To build and run the backend in Docker:

```bash
cd backend
docker build -t ai-portfolio-backend .
docker run -p 7860:7860 -v %cd%/models:/app/models -v %cd%/data:/app/data ai-portfolio-backend
```

---

## Usage

- Ask questions about the content of your uploaded PDFs via the frontend.
- The backend retrieves relevant chunks and generates answers using the local LLM.

---

## Notes

- Make sure your `.gguf` model file path in `model.py` matches the actual location.
- If you add or update PDFs, re-run `build_index.py` to update the vector database.
- For best results, use high-quality, well-structured PDFs.

---

## License

This project is for educational and personal use. Please ensure you have the rights to any models and data you use.

---

## Credits

- [FastAPI](https://fastapi.tiangolo.com/)
- [ChromaDB](https://www.trychroma.com/)
- [llama-cpp-python](https://github.com/abetlen/llama-cpp-python)
