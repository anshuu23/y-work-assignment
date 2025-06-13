'use client';
import React, { createContext, useContext, useState } from 'react';
import { dummyChatData, Contact } from '../app/lib/chatData';

type ChatContextType = {
  contacts: Contact[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>> | any;
  selectedContactId: string | null;
  setSelectedContactId: React.Dispatch<React.SetStateAction<string | null>>;
   isChatOpen: boolean; 
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contacts, setContacts] = useState<Contact[] | any>(dummyChatData);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    dummyChatData[dummyChatData.length - 1].id
  );
const [isChatOpen, setIsChatOpen] = useState<boolean>(false); 
  return (
    <ChatContext.Provider
      value={{ contacts, setContacts, selectedContactId, setSelectedContactId ,  isChatOpen, setIsChatOpen}}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
};
