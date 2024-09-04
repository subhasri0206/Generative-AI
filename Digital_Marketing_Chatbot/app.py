from flask import Flask, request, jsonify, render_template
import openai
import os
import transformers
import torch
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/create-account')
def create_account():
    return render_template('create-account.html')

@app.route('/http://localhost:5000/chat', methods=['POST'])
def chat():
    model_id = "meta-llama/Meta-Llama-3.1-8B-Instruct"
    
    # Ensure the model is loaded correctly
    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device_map="auto"
    )

    user_input = request.form['user_input']
    messages = f"You are a pirate chatbot who always responds in pirate speak! User: {user_input}"

    outputs = pipeline(
        messages,
        max_new_tokens=256,
    )

    response = outputs[0]["generated_text"]  # Correct response extraction
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run(debug=True)
