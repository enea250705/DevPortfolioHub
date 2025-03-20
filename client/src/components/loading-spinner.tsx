import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center">
      <motion.div 
        className="relative h-16 w-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear",
            delay: 0.2 
          }}
          className="absolute inset-0 border-4 border-t-primary rounded-full"
        />
      </motion.div>
    </div>
  );
}
