import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
  'Marketing Digital',
  'Criação de Sites',
  'Gestão de Redes Sociais',
  'Tráfego Pago',
  'Branding',
  'Identidade Visual',
  'Landing Pages',
  'E-commerce',
];

export default function CircularServices() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50); // Velocidade de rotação

    return () => clearInterval(interval);
  }, []);

  const radius = 180; // Raio do círculo
  const angleStep = 360 / services.length;

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center my-16">
      <div 
        className="relative w-[500px] h-[500px]"
        style={{
          transform: 'perspective(1000px) rotateX(15deg)',
        }}
      >
        {services.map((service, index) => {
          const angle = (index * angleStep + rotation) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          // Calcular opacidade e blur baseado na posição Z (profundidade)
          const z = Math.sin(angle);
          const isInFront = z > 0;
          const opacity = isInFront ? 1 : 0.4;
          const blur = isInFront ? 0 : 3;
          const scale = isInFront ? 1 : 0.85;

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                filter: `blur(${blur}px)`,
                zIndex: isInFront ? 10 : 1,
                transition: 'all 0.3s ease-out',
              }}
            >
              <div className={`px-6 py-3 rounded-full font-semibold text-sm ${
                isInFront 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {service}
              </div>
            </motion.div>
          );
        })}
        
        {/* Centro decorativo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
