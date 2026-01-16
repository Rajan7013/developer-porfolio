'use client';

import { useEffect, useState } from 'react';

const words = ["Web Designer", "Web Developer", "Graphic Designer", "Video Editor"];

export default function TypingAnimation() {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 100 : 200;

        const timer = setTimeout(() => {
            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500);
                return;
            }

            if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
                return;
            }

            setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1));
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    return (
        <span className="text-skin font-bold ml-2">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
}
