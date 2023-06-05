const inputBox = document.getElementById("inputBox");
const displayTextBox = document.getElementById("displayTextBox");
const sendButton = document.getElementById("sendButton");
const copyButton = document.getElementById("copyButton");

sendButton.addEventListener("click", callBackendAPI);
copyButton.addEventListener("click", copyCode);

async function callBackendAPI() {
  const userMessage = inputBox.value;
  const response = await fetch("/generate_code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userMessage }),
  });

  if (response.ok) {
    const { gptMessage } = await response.json();
    displayResponse(gptMessage);
  } else {
    console.error("Error calling backend API");
  }
}

function displayResponse(gptMessage) {
  displayTextBox.innerHTML = gptMessage;
}

function copyCode() {
  const range = document.createRange();
  range.selectNode(displayTextBox);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}