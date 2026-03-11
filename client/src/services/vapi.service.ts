import Vapi from "@vapi-ai/web";

/**
 * Initializes and manages the Vapi AI Voice Agent instance.
 * Remember to add VITE_VAPI_PUBLIC_KEY to your frontend .env file!
 */

const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
console.log("VAPI Service Initialize - Public Key Exists:", !!publicKey, "Length:", publicKey?.length);

export const vapi = new Vapi(publicKey || "YOUR_PUBLIC_KEY_HERE");

export const startAssistant = async (assistantId?: string) => {
    try {
        const targetAssistant = assistantId || import.meta.env.VITE_VAPI_ASSISTANT_ID;
        console.log("VAPI Service - Starting Assistant:", targetAssistant);
        
        await vapi.start(targetAssistant || "YOUR_ASSISTANT_ID_HERE");
        return true;
    } catch (error) {
        console.error("Failed to start Vapi assistant:", error);
        return false;
    }
};

export const stopAssistant = () => {
    console.log("VAPI Service - Stopping Assistant");
    vapi.stop();
};
