import os
import sys
import openai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    print("Error: OPENAI_API_KEY not found in environment variables.")
    sys.exit(1)

# Set up the OpenAI client
client = openai.OpenAI(api_key=api_key)

def generate_response(prompt, model="gpt-4o", max_tokens=1000):
    """
    Generate a response using OpenAI's API.
    
    Args:
        prompt (str): The input prompt for the model
        model (str): The model to use (default: gpt-4o)
        max_tokens (int): Maximum number of tokens in the response
        
    Returns:
        str: The generated response
    """
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=max_tokens
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error generating response: {str(e)}"

if __name__ == "__main__":
    # Check if a prompt was provided as a command-line argument
    if len(sys.argv) > 1:
        user_prompt = " ".join(sys.argv[1:])
    else:
        # If no command-line argument, ask for input
        user_prompt = input("Enter your prompt: ")
    
    # Generate and print the response
    response = generate_response(user_prompt)
    print("\nResponse:")
    print(response) 