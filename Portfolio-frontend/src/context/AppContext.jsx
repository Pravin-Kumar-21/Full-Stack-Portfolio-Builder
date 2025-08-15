import { useEffect } from "react";

export default function WebSocketHandler({ onDataChanged }) {
  useEffect(() => {
    const socket = new WebSocket(
      `${window.location.protocol === "https:" ? "wss" : "ws"}://127.0.0.1:8000/ws/updates/`
    );

    socket.onopen = () => console.log("✅ WebSocket connected");
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "refresh") {
        console.log("Backend changed, re-fetching...");
        onDataChanged();
      }
    };
    // socket.onerror = (err) => console.error("❌ WebSocket error", err);
    // socket.onclose = () => console.warn("⚠️ WebSocket closed");
    return () => socket.close();

  }, [onDataChanged]);

  return null;
}
