"use client";

import { useChatContext } from "@/context/chat/context";
import { Button } from "./ui/button";


export const Sidebar = () => {
     const {sessions, createSession} = useChatContext()
     return (
        <div>
            <Button onClick = {() =>  createSession()}> 
                New Session
            </Button>
            {sessions?.map((session) =>  (
                <div key={session.id}>
                    {session?.title}
                </div>
            ))}
        </div>
     )
}

