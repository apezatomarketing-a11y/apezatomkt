import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function SnowflakesEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    const flakeCount = 20; // Número de flocos

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100, // Posição horizontal aleatória (%)
        size: Math.random() * 8 + 4, // Tamanho entre 4px e 12px
        duration: Math.random() * 10 + 15, // Duração entre 15s e 25s
        delay: Math.random() * 5, // Delay inicial entre 0s e 5s
      });
    }

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.x}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(flake.id) * 50, 0],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={flake.size}
            height={flake.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L12 22M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19M2 12L22 12M2 12L5 9M2 12L5 15M22 12L19 9M22 12L19 15M5.64 5.64L18.36 18.36M5.64 5.64L8.46 8.46M18.36 18.36L15.54 15.54M18.36 5.64L5.64 18.36M18.36 5.64L15.54 8.46M5.64 18.36L8.46 15.54"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="text-primary/20"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
