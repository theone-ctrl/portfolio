import os
from rag.embedder import load_and_embed_all

FLAG_FILE = ".index_built"

if __name__ == "__main__":
    if os.path.exists(FLAG_FILE):
        print("✅ Index already built. Skipping...")
    else:
        load_and_embed_all()
        with open(FLAG_FILE, "w") as f:
            f.write("done")
