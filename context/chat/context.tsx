"use client";

import { PromptProps, TChatSession } from "@/hooks/use-chat-session"
import { createContext, useContext } from "react"
import { TStreamProps } from "@/hooks/use-llm";

export type TChatContext = {
    sessions: TChatSession[]; // Updated property name
    refetchSessions: () => void;
    isSessionLoading: boolean;
    createSession: () => void;
    lastStream?: TStreamProps;
    runModel: (props: PromptProps, sessionId: string) => Promise<void>;
};


export const ChatContext = createContext<TChatContext | undefined>(undefined)

export const useChatContext = () => {
    const context = useContext(ChatContext)  
    if(!context) {
        throw new Error("use chatContext must be used within ChatProvider")
    }
    return context;
}