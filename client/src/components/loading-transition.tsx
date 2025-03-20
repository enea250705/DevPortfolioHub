import { LazyMotion, m, domAnimation } from "framer-motion";

interface LoadingTransitionProps {
  isLoading: boolean;
}

export function LoadingTransition({ isLoading }: LoadingTransitionProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={false}
        animate={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        transition={{ duration: 0.2 }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <m.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative h-12 w-12"
          >
            <m.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-2 border-primary/20 rounded-full"
            />
            <m.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-2 border-t-primary rounded-full"
            />
          </m.div>
        </div>
      </m.div>
    </LazyMotion>
  );
}