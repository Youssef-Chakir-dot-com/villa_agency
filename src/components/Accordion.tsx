"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
type AccordionItem = {
  question: string;
  answer: string;
};

function Accordion({ item }: { item: AccordionItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-color1 p-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            isOpen
              ? "text-primary border-b-color2 border-b-2 pb-2 font-bold"
              : "border-b-color2 border-b-2 pb-2 font-bold"
          }
        >
          {item.question}
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-3 transition-all duration-300">
              {item.answer}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
