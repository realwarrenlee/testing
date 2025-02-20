
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      <div className="radiant-glow animate-glow-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6 text-lg text-gray-600"
        >
          <span className="px-4 py-2 rounded-full bg-gray-50 backdrop-blur-sm border border-gray-100">
            Welcome to my world
          </span>
        </motion.div>

        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight">
          <span className="gradient-text-cool">Warren </span>
          <span className="gradient-text-warm">Lee</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-8 space-y-8"
        >
          <p className="text-xl text-gray-600">
            My Education Journey in Singapore
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-stretch">
            <div className="w-full sm:w-72 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">NYPS</h3>
              <p className="text-gray-600">2013 to 2018</p>
            </div>
            
            <div className="w-full sm:w-72 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">RVHS</h3>
              <p className="text-gray-600">2019 to 2024</p>
            </div>
            
            <div className="w-full sm:w-72 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">University</h3>
              <p className="text-gray-600">TBD</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
