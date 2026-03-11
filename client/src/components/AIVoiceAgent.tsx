import { useState, useEffect } from "react";
import { Mic, PhoneOff, Loader2 } from "lucide-react";
import { vapi, startAssistant, stopAssistant } from "../services/vapi.service";

export default function AIVoiceAgent() {
  const [callStatus, setCallStatus] = useState<"idle" | "connecting" | "active">("idle");

  useEffect(() => {
    // Vapi Event Listeners
    vapi.on("call-start", () => setCallStatus("active"));
    vapi.on("call-end", () => setCallStatus("idle"));
    vapi.on("error", (e) => {
      console.error("Vapi Error:", e);
      setCallStatus("idle");
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (callStatus === "idle") {
      setCallStatus("connecting");
        const success = await startAssistant();
        if (!success) setCallStatus("idle");
    } else {
      stopAssistant();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleCall}
        className={`flex items-center gap-2 px-4 py-3 rounded-full text-white font-medium shadow-lg transition-all
          ${
            callStatus === "idle"
              ? "bg-purple-600 hover:bg-purple-700"
              : callStatus === "connecting"
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 animate-pulse"
          }`}
        disabled={callStatus === "connecting"}
      >
        {callStatus === "idle" && (
          <>
            <Mic className="w-5 h-5" />
            <span>Voice Assistant</span>
          </>
        )}
        {callStatus === "connecting" && (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Connecting...</span>
          </>
        )}
        {callStatus === "active" && (
          <>
            <PhoneOff className="w-5 h-5" />
            <span>End Call</span>
          </>
        )}
      </button>
    </div>
  );
}
