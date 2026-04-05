'use client';

import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Maintenance() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-8"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 border border-white/10 backdrop-blur-sm">
            <Settings className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          We'll be <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">right back</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-light mb-8 max-w-md mx-auto leading-relaxed"
        >
          Streamwoo is currently undergoing scheduled maintenance to improve your experience. Thank you for your patience.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full" />
          <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium"></p>
        </motion.div>
      </div>

      {/* Subtle bottom text or links if needed */}
      <div className="absolute bottom-12 left-0 w-full text-center">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Streamwoo. All rights reserved.</p>
      </div>
    </div>
  );
}
