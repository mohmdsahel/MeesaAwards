import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-n-1 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h5 text-n-1 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "text-purple-500",
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "relative flex size-12 items-center justify-center rounded-full border-2 border-n-1 transition-all duration-500 group-hover:border-purple-500",
            active && "border-purple-500",
          )}
        >
          <div className="bg-n-8 size-11/12 rounded-full" />
          <div className={clsx(
            "absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-n-1 transition-all duration-300",
            active && "bg-purple-500"
          )} />
          <div className={clsx(
            "absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-n-1 transition-all duration-300",
            active && "rotate-90 bg-purple-500"
          )} />
        </div>
      </div>

      <AnimatePresence>
        {activeId === item.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="text-n-2 px-7 py-3.5">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={clsx(
          "absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl bg-n-7 opacity-0 transition-opacity duration-500",
          active && "opacity-100",
        )}
      >
        <div className="absolute inset-0.5 -z-1 rounded-3xl bg-n-8" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-purple-500" />
      </div>
    </div>
  );
};

export default FaqItem;