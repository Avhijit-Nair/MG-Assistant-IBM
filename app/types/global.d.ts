interface WatsonAssistantChatOptions {
    integrationID: string;
    region: string;
    serviceInstanceID: string;
    onLoad: (instance: any) => Promise<void>;
    clientVersion?: string;
  }
  
  declare global {
    interface Window {
      watsonAssistantChatOptions?: WatsonAssistantChatOptions;
    }
  }
  
  export {};