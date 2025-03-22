import React, { useState, useEffect } from "react";
import "./About.css";

const TypeEffect = () => {
  const words = ["SEEPANA PAVAN KUMAR"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && text === word) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timer = setTimeout(() => {
      setText(word.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);

  return (
    <div>
      <h1 className="text-blue-600 text-2xl">
        {text}
        <span className="animate-blink font-mono">|</span>
      </h1>
    </div>
  );
};

export default TypeEffect;
