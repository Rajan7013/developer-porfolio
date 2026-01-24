import { useState, useEffect } from 'react';

export default function useTypewriter(words: string[], speed = 150, pause = 1500, loop = true) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    // Typing effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            if (!loop && index === words.length - 1) return;
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? pause : speed, parseInt(String(Math.random() * 350))));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, speed, pause, loop]);

    const isDone = !loop && index === words.length - 1 && subIndex >= words[index].length;
    return `${words[index].substring(0, subIndex)}${isDone ? "" : (blink ? "|" : " ")}`;
}
