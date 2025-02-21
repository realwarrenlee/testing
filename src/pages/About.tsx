
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      <div className="radiant-glow animate-glow-pulse" />
      
      <div className="absolute top-4 right-4">
        <Link to="/" className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:bg-gray-100 transition-colors">
          Back Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-gray-600">Coming soon...</p>
      </motion.div>
    </div>
  );
};

export default About;
