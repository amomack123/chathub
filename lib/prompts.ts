import { PromptType, RoleType } from "@/hooks/use-chat-session"
import { Assistant } from "next/font/google"


export const getRole = (type: RoleType) => {
    switch (type) {
        case RoleType.assistant:
            return "assistant"
        case RoleType.writing_expert:
            return "expert in writing and coding"
        case RoleType.social_media_expert:
            return "expert in twitter (x), social media in general"
    }
};

export const getInstruction = (type: PromptType) => {
    switch(type) {
        case PromptType.ask:
            return "based on {userQuery}"
        case PromptType.answer:
            return "Answer this question"
        case PromptType.explain:
            return "Explain this"
        case PromptType.summarize:
            return "Summarize this"
        case PromptType.improve:
            return "Improve this"
        case PromptType.fix_grammar:
            return "Fix the grammar and types"
        case PromptType.reply:
            return "reply to this tweet. social media post or comment with a helpful repsonse, must not use offensive languange, use simple languange like answering a friend"
        case PromptType.short_reply:
            return "Reply to this tweet, social media comment or post in 3-4 words max"
        
    }
}