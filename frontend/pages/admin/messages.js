import { useEffect, useState } from "react";

export default function ViewMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <h2>Contact Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
}
