import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const autoLines = [
  { text: "indyson --init project", color: "white" },
  { text: "> Loading core modules...", color: "gray" },
  { text: "> Initializing AI automation protocol...", color: "gray" },
  { text: "> Generating custom Discord integration...", color: "gray" },
  { text: "> Applying glassmorphism UI tokens...", color: "gray" },
  { text: "✔ Build completed in 0.4s", color: "#00f0ff" },
  { text: "System ready. Execution without limits.", color: "#8a2be2" },
];

export const AnimatedTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [userCommands, setUserCommands] = useState<{text: string, color: string}[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const revealLine = (index: number) => {
      if (index < autoLines.length) {
        setVisibleLines(index + 1);
        const delay = index === 0 ? 800 : index === autoLines.length - 2 ? 1200 : Math.random() * 300 + 200;
        timeout = setTimeout(() => revealLine(index + 1), delay);
      }
    };

    timeout = setTimeout(() => revealLine(0), 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleTerminalClick = () => {
    if (visibleLines >= autoLines.length && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      const newCmds = [...userCommands, { text: `$ ${currentInput}`, color: "white" }];
      
      // Add fake response
      if (currentInput.toLowerCase().includes('help')) {
        newCmds.push({ text: "> Available commands: deploy, status, hack", color: "gray" });
      } else {
        newCmds.push({ text: `> Command executed: ${currentInput}`, color: "gray" });
      }
      
      setUserCommands(newCmds);
      setCurrentInput("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0, 240, 255, 0.2)" }}
      transition={{ duration: 0.5 }}
      onClick={handleTerminalClick}
      style={{
        width: "100%",
        maxWidth: "500px",
        background: "#0a0a0a",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.1)",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0, 240, 255, 0.1)",
        fontFamily: "'Courier New', Courier, monospace",
        cursor: visibleLines >= autoLines.length ? "text" : "default"
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          background: "#111",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
        <span style={{ marginLeft: "10px", fontSize: "0.8rem", color: "gray" }}>indyson-cli</span>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: "20px", minHeight: "280px", fontSize: "0.9rem", lineHeight: "1.6" }}>
        {autoLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ color: line.color, marginBottom: "8px" }}
          >
            {line.text}
          </motion.div>
        ))}
        
        {/* User typed past commands */}
        {userCommands.map((cmd, i) => (
          <div key={`cmd-${i}`} style={{ color: cmd.color, marginBottom: "8px" }}>
            {cmd.text}
          </div>
        ))}

        {/* Interactive Input Row */}
        {visibleLines >= autoLines.length && (
          <div style={{ display: "flex", alignItems: "center", color: "white" }}>
            <span style={{ marginRight: "8px", color: "#00f0ff" }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                fontFamily: "inherit",
                fontSize: "inherit",
                width: "100%",
                padding: 0
              }}
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        )}
        
        {/* Blinking Cursor during typing phase */}
        {visibleLines < autoLines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{ display: "inline-block", width: "8px", height: "15px", background: "white", marginLeft: "4px", verticalAlign: "middle" }}
          />
        )}
      </div>
    </motion.div>
  );
};
