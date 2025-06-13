interface ContactItemProps {
  name: string;
  lastMessage: string;
  timestamp: string;
  initials?: string;
  id: string;
}

const colorPairs = [
  { bg: "bg-[#d7e6fa]", text: "text-[#4e75ec]" },
  { bg: "bg-[#fbe8e8]", text: "text-[#e74c3c]" },
  { bg: "bg-[#e6f7e6]", text: "text-[#27ae60]" },
  { bg: "bg-[#fff7e6]", text: "text-[#f39c12]" },
  { bg: "bg-[#e8eaf6]", text: "text-[#3f51b5]" },
  { bg: "bg-[#fce4ec]", text: "text-[#d81b60]" },
  { bg: "bg-[#e0f2f1]", text: "text-[#009688]" },
  { bg: "bg-[#f3e5f5]", text: "text-[#9c27b0]" },
  { bg: "bg-[#ede7f6]", text: "text-[#673ab7]" },
];

function getColorById(id: string) {
  let sum = 0;
  for (let i = 0; i < id.length; i++) {
    sum += id.charCodeAt(i);
  }
  return colorPairs[sum % colorPairs.length];
}

import { useChat  } from "@/context/ChatContext";

export function ContactItem({ name, lastMessage, timestamp, initials, id }: ContactItemProps) {
  const { setSelectedContactId ,setIsChatOpen } = useChat();

  const { bg, text } = getColorById(id);

  return (
    <div>
      <div
        className="p-3 flex gap-2.5 cursor-pointer hover:bg-zinc-100"
        onClick={() => {setSelectedContactId(id) ; setIsChatOpen(true)}}
      >
        <div className={`${bg} ${text} rounded-4xl h-[50px] w-[60px] flex justify-center items-center `}>
          {initials}
        </div>

        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between w-full">
            <p className="font-semibold text-[18px]">{name}</p>
            <p className="font-semibold text-[#5d5d5d]">{timestamp}</p>
          </div>
          <p className="font-semibold text-[#5d5d5d] truncate">{lastMessage}</p>
        </div>
      </div>
    </div>
  );
}
