import { PromptProps, useChatSession } from "./use-chat-session"

export const useLLM = () => {
    const {getSessionById, addMessageToSession} = useChatSession();


    const runModel = async (props: PromptProps, sessionId: string) => {
        const currentSession = await getSessionById(sessionId)

        if(!props?.query) {
            return; 
        }
         
        const apiKey = "";
        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            openAIApiKey: apiKey
        })

        
    }
}