"use client";

import { ChatInput } from "@/components/chat-input";
import { useParams } from "next/navigation";

const ChatSessionPage = () => {

    const {sessionId} = useParams()

    return (
        <div className="w-full h-screen flex flex-row">
            <ChatInput/>
        </div>
    )
    
};

export default ChatSessionPage;