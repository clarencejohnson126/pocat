import openai
import os
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# Initialize OpenAI Client
openai.api_key = api_key

# Call the OpenAI Response API
response = openai.ChatCompletion.create(
    model="gpt-4-turbo",  # Use the latest model
    messages=[{"role": "system", "content": "You are a helpful assistant."},
              {"role": "user", "content": "What is the OpenAI Response API?"}]
)

# Print the response
print(response["choices"][0]["message"]["content"])
