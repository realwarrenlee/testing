
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      <div className="radiant-glow animate-glow-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center animate-float"
      >
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight">
          <span className="gradient-text-cool">Warren </span>
          <span className="gradient-text-warm">Lee</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg text-gray-600"
        >
          <span className="px-4 py-2 rounded-full bg-gray-50 backdrop-blur-sm border border-gray-100">
            Welcome
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
