'use client';
import { ContactItem } from "../chats/contactItem";
import { useChat } from "@/context/ChatContext";
import { useEffect, useState } from "react";

export function SideBar() {
  const { contacts, setSelectedContactId, isChatOpen } = useChat();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen(); // Run on mount
    window.addEventListener("resize", checkScreen); // Listen for changes
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // If mobile and chat is open, don't render sidebar
  if (isMobile && isChatOpen) return null;

  return (
    <div className="w-full h-[calc(100vh-60px)] md:w-[400px] border-r-2 border-[#d5d5d5]">
      <div className="h-[60px] flex items-center border-b-2 border-[#d5d5d5] px-4">
        <p className="text-[20px] font-semibold">Chats</p>
      </div>
      <div className="overflow-y-scroll h-[calc(100vh-120px)]">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            lastMessage={contact.messages[contact.messages.length - 1]?.text || ""}
            timestamp={contact.messages[contact.messages.length - 1]?.time || ""}
            initials={contact.avatar}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  );
}
