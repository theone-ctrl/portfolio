# Use a lightweight Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy backend files into the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Prevent stale .index_built file in base image
RUN rm -f .index_built

# Expose app port
EXPOSE 7860

# Command to run on container startup:
# Step 1: Run build_index.py only if .index_built doesn't exist
# Step 2: Launch the FastAPI app
CMD ["/bin/sh", "-c", "python build_index.py && uvicorn app:app --host 0.0.0.0 --port 7860"]
