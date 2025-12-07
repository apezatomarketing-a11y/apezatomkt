import { testimonials, Testimonial } from '@/data/testimonials';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <motion.div
    className="bg-background p-8 rounded-2xl border border-border relative flex-shrink-0 w-[350px] md:w-[400px] h-full"
    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute top-6 right-8 text-6xl text-primary/10 font-serif">"</div>
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.stars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-muted-foreground mb-6 relative z-10 italic min-h-[100px]">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
        {testimonial.avatarInitials}
      </div>
      <div>
        <h4 className="font-bold text-sm">{testimonial.name}</h4>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

export default function CarouselTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Multiplicador para velocidade de arrasto
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-6 pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        * Arraste horizontalmente para ver mais depoimentos.
      </p>
    </div>
  );
}
