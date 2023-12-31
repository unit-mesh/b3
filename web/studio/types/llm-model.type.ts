export enum OPENAI_MODEL {
	CHATGPT_35_TURBO = 'chatgpt-3.5-turbo',
	CHATGPT_35 = 'chatgpt-3.5',
	CHATGPT_4 = 'chatgpt-4',
}

// aka Yiyan
export enum ERNIEBOT {
	ERNIEBOT = 'ernie-bot',
}

export const LlmModelType  = {
	OPENAI: OPENAI_MODEL,
	ERNIEBOT: ERNIEBOT,
}
