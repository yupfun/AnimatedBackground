import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GiDragonSpiral, GiTreasureMap, GiSwapBag } from 'react-icons/gi';
import { FaEthereum, FaBitcoin, FaDog, FaGhost, FaRobot, FaRocket, FaFire } from 'react-icons/fa';
import { SiSolana, SiDogecoin, SiCardano, SiPolkadot } from 'react-icons/si';
import { BsCoin, BsCashCoin, BsGem } from 'react-icons/bs';

const DragonFireBackground = ({ showOnAllPages = true }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [secretMessage, setSecretMessage] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [dragonPosition, setDragonPosition] = useState({
    x: 10,
    y: 10
  });

  // Full emoji collection with all requested emojis
  const allEmojis = useMemo(() => [
    // Crypto Icons
    { icon: <FaEthereum />, size: 40, color: '#3A56C8' },
    { icon: <SiSolana />, size: 38, color: '#00CC88' },
    { icon: <FaBitcoin />, size: 36, color: '#D67A0A' },
    { icon: <SiDogecoin />, size: 34, color: '#B89F3A' },
    { icon: <SiCardano />, size: 32, color: '#002A8A' },
    { icon: <SiPolkadot />, size: 30, color: '#CC0077' },
    { icon: <BsCoin />, size: 28, color: '#D4B000' },
    { icon: <BsCashCoin />, size: 26, color: '#22AA22' },
    { icon: <BsGem />, size: 24, color: '#CC00CC' },
    
    // Dragon-themed
    { icon: '🐉', size: 50, color: '#E04A4A' },
    { icon: '💰', size: 42, color: '#D4B000' },
    { icon: '🔥', size: 45, color: '#E07C00' },
    { icon: '🚀', size: 40, color: '#5C9EFF' },
    { icon: <GiDragonSpiral />, size: 48, color: '#CC00CC' },
    { icon: <GiTreasureMap />, size: 44, color: '#D4B000' },
    { icon: <GiSwapBag />, size: 42, color: '#5C9EFF' },
    { icon: <FaFire />, size: 38, color: '#E04A00' },
    
    // Funny emojis
    { icon: '🤪', size: 36, color: '#D64B9E' },
    { icon: '🤑', size: 34, color: '#D4B000' },
    { icon: '👻', size: 32, color: '#E6E6FA' },
    { icon: <FaGhost />, size: 30, color: '#C6C6D0' },
    { icon: '🤖', size: 28, color: '#898989' },
    { icon: <FaRobot />, size: 26, color: '#3A6EA5' },
    { icon: '👾', size: 24, color: '#7A5CD6' },
    { icon: '🦄', size: 22, color: '#CC00CC' },
    { icon: '🌈', size: 20, color: '#E04A00' },
    { icon: '🍕', size: 18, color: '#E07C00' },
    { icon: '🍔', size: 16, color: '#E04A4A' },
    { icon: '🍦', size: 14, color: '#8CC6FF' },
    { icon: '🍩', size: 12, color: '#8B4513' },
    { icon: '🎮', size: 10, color: '#7A5CD6' },
    { icon: '🎲', size: 8, color: '#E6E6FA' },
    
    // Animal emojis
    { icon: '🐶', size: 36, color: '#A0522D' },
    { icon: <FaDog />, size: 34, color: '#8B4513' },
    { icon: '🐱', size: 32, color: '#D67A0A' },
    { icon: '🐭', size: 30, color: '#808080' },
    { icon: '🐹', size: 28, color: '#FFC0CB' },
    { icon: '🐰', size: 26, color: '#E6E6FA' },
    { icon: '🦊', size: 24, color: '#E07C00' },
    { icon: '🐻', size: 22, color: '#8B4513' },
    { icon: '🐼', size: 20, color: '#000000' },
    { icon: '🦁', size: 18, color: '#D4B000' },
    { icon: '🐮', size: 16, color: '#E6E6FA' },
    { icon: '🐷', size: 14, color: '#FFC0CB' },
    
    // Space emojis
    { icon: '👽', size: 36, color: '#22AA22' },
    { icon: '🛸', size: 34, color: '#3A6EA5' },
    { icon: <FaRocket />, size: 32, color: '#898989' },
    { icon: '🌠', size: 30, color: '#E6E6FA' },
    { icon: '🌌', size: 28, color: '#3A3A8A' },
    { icon: '🪐', size: 26, color: '#D67A0A' },
    
    // More crypto symbols
    { icon: '₿', size: 36, color: '#D67A0A' },
    { icon: 'Ξ', size: 34, color: '#3A56C8' },
    { icon: '◎', size: 32, color: '#00CC88' },
    { icon: '◈', size: 30, color: '#CC0077' },
    { icon: '✧', size: 28, color: '#D4B000' },
  ], []);

  // Randomly select 15 emojis to display
  const emojis = useMemo(() => {
    return [...allEmojis]
      .sort(() => 0.5 - Math.random())
      .slice(0, 15);
  }, [allEmojis]);

  // Easter egg messages
  const easterEggMessages = [
    "YUPFUN detected! +1000 XP 🎮",
    "Dragon loot: 500 YUPFUN tokens! 💰",
    "Secret swap route unlocked! 🌉",
    "Slippage monster defeated! 🐲",
    "You found the dragon's treasure! 🏆",
    "To the moon! 🚀",
    "WAGMI! 💎🙌",
    "GM! ☀️",
    "NGMI! 😅",
    "LFG! 🏃‍♂️",
    "Ape in! 🦍",
    "Based! 😎",
    "Fren detected! 👋",
    "Wen lambo? 🚗",
    "Wen moon? 🌕",
    "Diamond hands! 💎",
    "Paper hands! 📄",
    "This is the way! 🛣️",
    "Not financial advice! 📢",
    "DYOR! 🔍"
  ];

  // Initialize canvas
  useEffect(() => {
    if (!showOnAllPages) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    
    const handleResize = () => {
      resizeCanvas();
      // Reduce particles on smaller screens
      particles.current = particles.current.slice(0, Math.floor(window.innerWidth / 50));
    };
    
    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize with fewer particles
    particles.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.4 + 0.1,
      color: `hsl(${Math.random() * 60 + 20}, 100%, 40%)`,
      angle: Math.random() * Math.PI * 2,
      isYUPFUN: Math.random() > 0.9
    }));

    let animationFrameId;
    let lastTime = 0;
    const fpsInterval = 1000 / 30; // Target 30fps

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Optimized connection drawing
        ctx.strokeStyle = 'rgba(126, 186, 255, 0.1)';
        for (let i = 0; i < particles.current.length; i += 3) {
          const p1 = particles.current[i];
          for (let j = i + 1; j < particles.current.length; j += 3) {
            const p2 = particles.current[j];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            if (dx * dx + dy * dy < 22500) { // 150^2
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Update particles
        particles.current.forEach(p => {
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;
          
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.isYUPFUN ? '#D4B000' : p.color;
          ctx.fill();
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [showOnAllPages]);

  // Handle interactions with throttling
  const handleMouseMove = React.useCallback((e) => {
    if (!showOnAllPages) return;

    // Only add particles 50% of the time
    if (Math.random() > 0.5) {
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 2,
        speed: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 60 + 20}, 100%, 50%)`,
        angle: Math.random() * Math.PI * 2,
        life: 100
      });
      
      // Limit particles array size
      if (particles.current.length > 50) {
        particles.current = particles.current.slice(-50);
      }
    }

    if (Math.random() > 0.97 && !showEasterEgg) {
      triggerEasterEgg();
    }
  }, [showOnAllPages, showEasterEgg]);

  const triggerEasterEgg = React.useCallback(() => {
    setSecretMessage(easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)]);
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  }, []);

  const handleDragonClick = React.useCallback(() => {
    setClickCount(prev => prev + 1);
    setSecretMessage(`+${clickCount + 1} YUPFUN tokens! Keep going! 🐉`);
    setShowEasterEgg(true);
    setDragonPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    });
    setTimeout(() => setShowEasterEgg(false), 2000);
  }, [clickCount]);

  return (
    <>
      {showOnAllPages && (
        <>
          <canvas 
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
            onMouseMove={handleMouseMove}
          />
          <div className="dragon-scale-overlay" />
        </>
      )}

      {/* Render only the 15 randomly selected emojis */}
      {emojis.map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          initial={{ 
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotate: Math.random() * 360,
            scale: 0.8
          }}
          animate={{
            x: [null, Math.random() * 200 - 100],
            y: [null, Math.random() * 200 - 100],
            rotate: Math.random() * 720,
            scale: [null, Math.random() * 0.4 + 0.6]
          }}
          transition={{
            duration: 20 + Math.random() * 40,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="fixed text-4xl opacity-60 pointer-events-none z-0"
          style={{
            left: `${5 + (i * 5) % 90}%`,
            top: `${5 + (i * 7) % 90}%`,
            color: emoji.color,
            fontSize: `${emoji.size}px`,
            filter: 'saturate(1.5)'
          }}
        >
          {emoji.icon}
        </motion.div>
      ))}

      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#1A1C24] border-2 border-[#D4B000] text-[#D4B000] px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center gap-2">
            <GiDragonSpiral className="text-xl" />
            <span>{secretMessage}</span>
          </div>
        </motion.div>
      )}
      
      <motion.div
        className="fixed text-4xl cursor-pointer z-50"
        style={{
          left: `${dragonPosition.x}%`,
          top: `${dragonPosition.y}%`,
          opacity: 0.3,
          fontSize: '3rem'
        }}
        onClick={handleDragonClick}
        whileHover={{ scale: 1.3, opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        🐉
      </motion.div>
    </>
  );
};

export default DragonFireBackground;