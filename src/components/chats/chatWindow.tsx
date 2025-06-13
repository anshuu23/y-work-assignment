'use client';
import { useState, useEffect , useRef } from "react";
import { SendBtnSvg } from "../svg/sendBtnSvg";
import { useChat } from "@/context/ChatContext";
import { dummyChatData, randomMessages } from "@/app/lib/chatData";
import { v4 as uuidv4 } from 'uuid';

export default function ChatWindow() {

const messagesEndRef = useRef<HTMLDivElement>(null);


    const { setContacts, contacts, setSelectedContactId, selectedContactId, isChatOpen, setIsChatOpen } = useChat();
    const [value, setValue] = useState("")
    const [res, setRes] = useState("hii")
    //selectedContact?.messages.push({ id: 'm1', text: 'k99999Hey!', time: '10:00 AM', type: 'received' },)
    const selectedContact = contacts.find(c => c.id === selectedContactId);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreen(); // Run on mount
        window.addEventListener("resize", checkScreen); // Listen for changes
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    
useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [selectedContact?.messages]);

    // If mobile and chat is open, don't render sidebar
    if (isMobile && !isChatOpen) return null;


    function msgSendBtnClicked(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!value || !selectedContact) return;

        const newMessage = {
            id: uuidv4(),
            text: value,
            time: getCurrentTime(),
            type: "sent",
        };

        const updatedContact = {
            ...selectedContact,
            messages: [...selectedContact.messages, newMessage],
        };

        const updatedContacts = [
            updatedContact,
            ...contacts.filter(contact => contact.id !== selectedContact.id),
        ];

        setContacts(updatedContacts);
        setSelectedContactId(updatedContact.id);
        setValue("");

        // ⏱️ Add delay for received message
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * randomMessages.length);
            const receivedMessage = {
                id: uuidv4(),
                text: randomMessages[randomIndex],
                time: getCurrentTime(),
                type: "received",
            };

            // ✅ Use callback to get the latest contacts state
            setContacts((prevContacts: any[]) => {
                const contactAfterReply = prevContacts.find(c => c.id === updatedContact.id);
                if (!contactAfterReply) return prevContacts;

                const updatedAfterReply = {
                    ...contactAfterReply,
                    messages: [...contactAfterReply.messages, receivedMessage],
                };

                const reordered = [
                    updatedAfterReply,
                    ...prevContacts.filter(c => c.id !== updatedAfterReply.id),
                ];

                // Also keep selected contact updated
                setSelectedContactId(updatedAfterReply.id);
                return reordered;
            });
        }, 1200);

    }
    return (
        <div className="w-full  md:w-[calc(100vw-400px)] h-[calc(100vh-60px)] grid grid-rows-[60px_auto_90px]">

            <div className=" flex p-4 pr-0 items-center  gap-2.5 border-b-2 border-[#d5d5d5] w-full">

                <div className="relative h-[45px] w-[45px]">
                    <div className="rounded-4xl h-[45px] w-[45px] flex justify-center items-center bg-[#d7e6fa] text-[#4e75ec] text-[18px]">
                        {selectedContact?.avatar}
                    </div>

                    <div className="absolute bottom-0 right-0 h-[12px] w-[12px] bg-green-500 rounded-full border-2 border-white"></div>
                </div>


                <div className="flex  justify-between w-full" >
                    <div className="flex flex-col justify-center">
                        <div className="font-semibold text-[18px]">
                            {selectedContact?.name}
                        </div>
                        <div className="text-green-500 text-[14px]">
                            Online
                        </div>
                    </div>
                    {isMobile && (
                        <button
                            onClick={() => {
                                setIsChatOpen(false); // deselect
                            }}
                            className="text-[#4b46e1] font-semibold text-[16px] px-4"
                        >
                            ← Back
                        </button>
                    )}

                </div>
            </div>


            <div className=" p-4  border-b-2 border-[#d5d5d5] overflow-y-scroll " id="chat-scroll-box">

                {
                    selectedContact?.messages.map((message) => {
                        return (
                            <div className={message.type == "sent" ? "right" : "left"}>
                                <div className={message.type == "sent" ? "right-msg" : "left-msg"}>
                                    {message.text}
                                </div>
                                <p className="!text-[15px] mb-4">{message.time}</p>
                            </div>
                        )
                    })
                }
                <div ref={messagesEndRef}></div>
            </div>
            <div>
                <form action="" className="flex justify-center items-center h-full gap-4 md:p-4 p-2" onSubmit={msgSendBtnClicked}>

                    <input type="text" className="h-[60px] border-2 border-[#d5d5d5] w-[100%] rounded-[10px] text-[20px] pl-4" onChange={(e) => setValue(e.target.value)} value={value} />

                    <button className="h-[60px]  bg-[#4b46e1] w-[60px] rounded-[10px] flex justify-center items-center ">
                        <SendBtnSvg />
                    </button>
                </form>
            </div>
        </div>
    );
}
function getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}