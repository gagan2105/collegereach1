import axios from "axios";

/**
 * Service to interact with Vapi's REST API from the backend
 */
export const makeOutboundCall = async (phoneNumber: string) => {
    try {
        const response = await axios.post(
            "https://api.vapi.ai/call/phone",
            {
                phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID, // You need a Vapi Phone Number ID
                assistantId: process.env.VAPI_ASSISTANT_ID,
                customer: {
                    number: phoneNumber,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.VAPI_PRIVATE_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        
        return {
            success: true,
            message: "Call initiated successfully",
            callId: response.data.id
        };
    } catch (error: any) {
        console.error("Vapi Outbound Call Error:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Failed to initiate outbound call.",
            error: error.response?.data
        };
    }
};
