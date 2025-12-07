import React, { useState } from 'react';
import Hero from './components/Hero';
import ClinicCard from './components/ClinicCard';
import ClinicModal from './components/ClinicModal';
import { clinics } from './data';
import { Clinic } from './types';

const App: React.FC = () => {
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 overflow-hidden">
      
      {/* 1. Header (Fixed height) */}
      <Hero />

      {/* 2. The Quadrant Grid (Takes remaining height) */}
      <div className="flex-1 w-full relative overflow-y-auto sm:overflow-hidden p-1 sm:p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-[600px] sm:min-h-0 gap-1 sm:gap-2">
            {clinics.slice(0, 4).map((clinic) => (
              <ClinicCard 
                key={clinic.id} 
                clinic={clinic} 
                onSelect={setSelectedClinic} 
              />
            ))}
        </div>
      </div>

      <ClinicModal 
        clinic={selectedClinic} 
        onClose={() => setSelectedClinic(null)} 
      />
    </div>
  );
};

export default App;