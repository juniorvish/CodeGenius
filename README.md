# CodeGenius

CodeGenius is an online AI developer bot that helps students write code. It features a simple chat interface where users can post their queries, and the bot generates code based on their input.

## How to build

### Frontend

The frontend is built using HTML, Tailwind CSS, and JavaScript. It consists of a chat interface with an input box for user queries and a display text box for the generated code. The input box supports markdown, and the display text box allows markdown style text. The code inside the display text box has a button for copying it and color formatting for better readability.

### Backend

The backend is built using Python and the OpenAI API to generate code based on user queries. It uses the following code snippet to interact with the OpenAI API:

```python
prompt = f"User: {user_message}\nAI Developer:"
message = []
message.append({"role": "system", "content": "You are a friendly AI Developer"})
message.append({"role": "user", "content": prompt})

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=message,
    temperature=0.2,
    max_tokens=4000,
    frequency_penalty=0.9,
)
gpt_message = response.choices[0].message.content
```

## How to run

1. Clone the repository:

```
git clone https://github.com/juniorvish/CodeGenius.git
```

2. Install the required dependencies:

```
pip install -r requirements.txt
```

3. Run the backend server:

```
python backend/main.py
```

4. Open the `frontend/index.html` file in your browser to start using the application.

## File structure

- `frontend/index.html`: The main HTML file for the frontend.
- `frontend/css/tailwind.css`: The Tailwind CSS file for styling the frontend.
- `frontend/js/chat.js`: The JavaScript file for handling user input and displaying the generated code.
- `backend/main.py`: The main Python file for running the backend server.
- `backend/openai_api.py`: The Python file for interacting with the OpenAI API.