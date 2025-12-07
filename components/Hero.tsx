import React from 'react';
import { ArrowUpRight, Star, ShieldCheck, Activity, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-slate-900 text-white z-30 shadow-xl flex-none font-sans overflow-hidden border-b border-slate-800">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row md:h-40">
        
        {/* 1. PHOTO BLOCK - Vertical Slice */}
        <div className="flex-none w-full md:w-56 relative h-48 md:h-full bg-slate-800 border-r border-slate-700 overflow-hidden group">
            <img 
                src="https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/avatar/83fe34cd/83fe34cd-383e-446d-8b34-fa3679f9797b_large.jpg" 
                alt="Dr. Tradati Daniele"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
            
            <div className="absolute bottom-3 left-4 md:hidden text-white">
                <h1 className="text-2xl font-black leading-none tracking-tight">DR. TRADATI</h1>
            </div>
        </div>
        
        {/* 2. INFO BLOCK */}
        <div className="flex-1 flex flex-col justify-center px-6 py-5 md:px-10 relative">
            <div className="flex flex-col gap-1 mb-3">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-teal-500"></span>
                    Chirurgo Ortopedico
                </span>
                <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                    TRADATI <span className="text-slate-500 font-light text-3xl align-top">MD</span>
                </h1>
                <p className="text-lg text-slate-400 font-medium hidden md:block">
                    Dr. Daniele Tradati
                </p>
            </div>

            {/* Badges - Adapted for Dark Theme */}
            <div className="flex items-center gap-6 mt-2 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-3 pr-6 border-r border-slate-700">
                     <ShieldCheck size={20} className="text-teal-400" strokeWidth={1.5} />
                     <div className="flex flex-col">
                        <span className="text-sm font-bold text-white leading-none">20+ Anni</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide">Esperienza</span>
                     </div>
                </div>
                
                <div className="flex items-center gap-3">
                     <Activity size={20} className="text-teal-400" strokeWidth={1.5} />
                     <div className="flex flex-col">
                        <span className="text-sm font-bold text-white leading-none">2000+</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide">Interventi</span>
                     </div>
                </div>
            </div>
        </div>

        {/* 3. CTA BLOCK */}
        <a 
            href="tel:+39021234567"
            className="group relative flex-none w-full md:w-80 bg-teal-600 hover:bg-teal-500 text-white transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-center px-8 py-6"
        >
            {/* Pulse Effect */}
            <span className="absolute right-0 top-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 blur-xl rounded-full animate-pulse"></span>

            <div className="flex items-center justify-between md:justify-start gap-4 mb-1 relative z-10">
                <div className="p-2 bg-white/20 rounded-none backdrop-blur-sm">
                    <Phone size={24} className="text-white" />
                </div>
                <span className="text-xs font-bold opacity-90 uppercase tracking-widest md:hidden">Prenota Ora</span>
            </div>
            
            <div className="flex flex-col mt-2 relative z-10">
                <span className="text-[10px] font-bold text-teal-100 group-hover:text-white uppercase tracking-[0.25em] mb-1 transition-colors">
                    Studio Privato
                </span>
                <span className="text-3xl font-black tracking-tight leading-none">
                    CHIAMA
                </span>
            </div>
            
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity">
                <ArrowUpRight size={64} />
            </div>
        </a>

      </div>
    </div>
  );
};

export default Hero;