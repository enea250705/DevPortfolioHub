import { motion } from "framer-motion";

interface LoadingTransitionProps {
  isLoading: boolean;
}

export function LoadingTransition({ isLoading }: LoadingTransitionProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Main spinner */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-20 w-20"
        >
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-primary/20 rounded-full"
          />
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear",
              delay: 0.1 
            }}
            className="absolute inset-2 border-4 border-t-primary border-r-primary/50 rounded-full"
          />
          {/* Inner ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear",
              delay: 0.2 
            }}
            className="absolute inset-4 border-4 border-t-primary/80 border-l-primary/50 rounded-full"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Loading...
        </motion.div>

        {/* Animated dots */}
        <div className="flex space-x-1 mt-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.4, 1, 0.4],
                y: [0, -3, 0]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1
              }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}