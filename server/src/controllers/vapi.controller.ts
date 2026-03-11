import type { Request, Response } from "express";
import { makeOutboundCall } from "../services/vapi.service.ts";

export const createOutboundCall = async (req: Request, res: Response) => {
    try {
        const { phoneNumber } = req.body;
        
        if (!phoneNumber) {
            res.status(400).json({ success: false, message: "Phone number is required." });
            return;
        }

        const result = await makeOutboundCall(phoneNumber);
        
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error("Vapi Controller Error:", error);
        res.status(500).json({ success: false, message: "Failed to create outbound call" });
    }
};

/**
 * Webhook that Vapi can call during status updates (e.g., call-started, call-ended).
 */
export const vapiWebhookHandle = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        console.log("Vapi Webhook Received:", payload);
        res.status(200).json({ success: true, message: "Webhook received" });
    } catch (error) {
        console.error("Vapi Webhook Error:", error);
        res.status(500).json({ success: false, message: "Webhook error" });
    }
};
