
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const text = "Welcome to my world";
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white font-['Helvetica Neue']">
      <div className="radiant-glow animate-glow-pulse" />
      
      <div className="absolute top-4 right-4">
        <Link to="/about" className="group px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:bg-gray-100 transition-colors relative">
          <span className="relative z-10 group-hover:bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#ff0080] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
            About Me
          </span>
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#ff0080] transition-all duration-300" style={{ padding: '1px' }}>
            <span className="block h-full w-full rounded-full bg-white"></span>
          </span>
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mb-6 text-lg text-gray-600"
        >
          <span className="px-4 py-2 rounded-full bg-gray-50 backdrop-blur-sm border border-gray-100">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 2 + (index * 0.05),
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.div>

        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight relative">
          <motion.span 
            className="gradient-text-cool"
            animate={{ x: [0, 2, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          >
            Warren
          </motion.span>
          {" "}
          <motion.span 
            className="gradient-text-warm"
            animate={{ x: [0, 2, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            Lee
          </motion.span>
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
            {[
              { title: "NYPS", years: "2013 to 2018" },
              { title: "RVHS", years: "2019 to 2024" },
              { title: "University", years: "TBD" }
            ].map((education, index) => (
              <motion.div
                key={education.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 3 + (index * 0.2),
                  ease: "easeOut"
                }}
                className="w-full sm:w-72 p-6 rounded-xl bg-white shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-2">{education.title}</h3>
                <p className="text-gray-600">{education.years}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
