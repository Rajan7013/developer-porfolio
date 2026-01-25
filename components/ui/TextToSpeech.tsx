'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, StopCircle } from 'lucide-react';

export default function TextToSpeech() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [speech] = useState<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        // Cancel speech when component unmounts or page changes
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const text = document.body.innerText;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.pitch = 1;

            utterance.onend = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    return (
        <button
            onClick={toggleSpeech}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-skin text-white shadow-lg shadow-skin/30 hover:scale-110 transition-transform flex items-center gap-2"
            aria-label={isSpeaking ? "Stop Reading" : "Read Aloud"}
        >
            {isSpeaking ? <StopCircle size={24} /> : <Volume2 size={24} />}
            <span className="font-bold hidden md:inline">{isSpeaking ? "Stop" : "Listen"}</span>
        </button>
    );
}
