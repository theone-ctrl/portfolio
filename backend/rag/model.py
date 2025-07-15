from llama_cpp import Llama

llm = Llama(
    model_path="models/mistral-7b-instruct-v0.1.Q4_K_M.gguf",
    n_ctx=2048,
    n_threads=6,
    n_gpu_layers=32,
    use_mlock=True,        # Prevents paging
    use_mmap=True          # Optimized model loading
)

def get_response(query, context):
    prompt_template = """You are an AI assistant that only answers using the given context below.
Do not hallucinate or invent answers.
If the answer is not found, reply: 'I’m not sure based on the provided documents.'

### CONTEXT:
{context}

### QUESTION:
{question}

### ANSWER:"""

    prompt = prompt_template.format(context=context, question=query)

    response = llm(
        prompt,
        max_tokens=300,
        stop=["User:", "Question:"],
        temperature=0.5
    )

    return response["choices"][0]["text"].strip()
