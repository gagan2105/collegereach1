import { useState } from "react";
import FloatingChatButton from "./FloatingChatButton";
import ChatDrawer from "./ChatDrawer";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingChatButton onClick={() => setIsOpen((prev) => !prev)} />
      <ChatDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
