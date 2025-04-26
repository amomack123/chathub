import { useChatContext } from "@/context/chat/context";
import { TChatSession, useChatSession } from "@/hooks/use-chat-session";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";


export const ChatMessages = () => {
    const sessionId = useParams()
    const {lastStream} = useChatContext()
    const [currentSession, setCurrentSession] = useState<TChatSession | null>(null)
    const {getSessionById} = useChatSession()

    const fetchSession = async () => {
        getSessionById(sessionId!.toString()).then((session) => {
            setCurrentSession(session ?? null);
    });
    }
    useEffect(() => {
        if(!sessionId) {
            return
        }
        fetchSession()
    }, [sessionId])

    useEffect(() => { 
        if(!lastStream) {
            fetchSession()
        }
    }, [lastStream])

    const isLastStreamBelongToCurrentSession = lastStream?.sessionId === sessionId?.toString();

};