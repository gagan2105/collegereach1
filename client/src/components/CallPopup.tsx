import { useState } from "react";
import { X, Phone, Loader2, CheckCircle2 } from "lucide-react";
import axios from "axios";

interface CallPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function CallPopup({ open, onClose }: CallPopupProps) {
  const [callStatus, setCallStatus] = useState<"idle" | "connecting" | "success" | "error">("idle");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOutboundCall = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setErrorMessage("Please enter a valid phone number with country code (e.g., +1234567890)");
      setCallStatus("error");
      return;
    }

    setCallStatus("connecting");
    setErrorMessage("");

    try {
      // Send request to our backend
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/vapi/call`, {
        phoneNumber: phoneNumber
      });

      if (response.data.success) {
        setCallStatus("success");
      } else {
        setCallStatus("error");
        setErrorMessage(response.data.message || "Could not initiate call.");
      }
    } catch (error: any) {
      console.error("Call trigger failed:", error);
      setCallStatus("error");
      setErrorMessage(error.response?.data?.message || "Failed to reach the server. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-fade-in-up relative">
        <div className="bg-maroon p-6 text-center relative">
          <button 
            onClick={() => {
              setCallStatus("idle");
              setPhoneNumber("");
              onClose();
            }}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 border-2 border-white/20 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-cream">
                <img src="https://i.pravatar.cc/150?img=47" alt="Ava" className="w-full h-full object-cover" />
            </div>
          </div>
          <h3 className="text-white font-bold font-heading text-xl">Call with Ava</h3>
          <p className="text-white/80 text-sm">AI Admissions Counselor</p>
        </div>
        
        <div className="p-8 text-center bg-cream flex flex-col items-center">
          
          {callStatus === "idle" || callStatus === "error" ? (
            <>
              <p className="text-sm text-gray-600 mb-4 text-left w-full">
                Enter your phone number (including country code) and Ava will call you immediately.
              </p>
              
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-maroon"
              />

              {callStatus === "error" && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}

              <button
                onClick={handleOutboundCall}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-bold shadow-lg transition-all mb-4 bg-maroon hover:bg-red-900"
              >
                <Phone className="w-6 h-6" />
                <span>Receive Call</span>
              </button>
            </>
          ) : callStatus === "connecting" ? (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-12 h-12 text-maroon animate-spin mb-4" />
              <h4 className="font-bold text-gray-900">Connecting to Vapi...</h4>
              <p className="text-sm text-gray-500">Sending call request</p>
            </div>
          ) : (
             <div className="flex flex-col items-center py-8">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="font-bold text-gray-900">Call Initiated!</h4>
              <p className="text-sm text-gray-500">Your phone should ring in a few seconds.</p>
              <button
                onClick={() => {
                  setCallStatus("idle");
                  setPhoneNumber("");
                  onClose();
                }}
                className="mt-6 px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors"
                >
                  Close
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
