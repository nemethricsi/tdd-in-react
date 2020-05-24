import React, { useState } from "react";

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default NewMessageForm;
