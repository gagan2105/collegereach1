import express from "express";
import { createOutboundCall, vapiWebhookHandle } from "../controllers/vapi.controller.ts";

const router = express.Router();

router.post("/call", createOutboundCall);
router.post("/webhook", vapiWebhookHandle);

export default router;
