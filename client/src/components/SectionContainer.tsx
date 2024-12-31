import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  id: string;
  background: string;
}

export const SectionContainer = ({ children, id, background }: SectionContainerProps) => {
  return (
    <section id={id} className="section-container">
      <div
        className="section-background"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="section-content">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
