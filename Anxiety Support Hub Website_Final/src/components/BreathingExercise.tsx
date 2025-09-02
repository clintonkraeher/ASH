
import { useState, useEffect, useRef } from 'react';

interface BreathingExerciseProps {
  className?: string;
}

export function BreathingExercise({ className = '' }: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(1); // Initialize to 1 instead of 0
  const [totalCycles, setTotalCycles] = useState(0);
  const animationRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const durations = {
    inhale: 4,
    hold: 7,
    exhale: 8
  };
  
  useEffect(() => {
    if (!isActive) return;
    
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    const currentDuration = durations[phase];
    
    // When we've reached the target number for this phase
    if (count <= currentDuration) {
      if (count === currentDuration) {
        // Show the final number for 1 second before transitioning
        timerRef.current = setTimeout(() => {
          // Move to next phase
          setCount(1); // Reset to 1 for the next phase
          switch (phase) {
            case 'inhale':
              setPhase('hold');
              break;
            case 'hold':
              setPhase('exhale');
              break;
            case 'exhale':
              if (totalCycles >= 3) {
                // End after 3 cycles
                setIsActive(false);
                setTotalCycles(0);
                setPhase('inhale');
              } else {
                // Directly go back to inhale (no rest phase)
                setPhase('inhale');
                setTotalCycles(totalCycles + 1);
              }
              break;
          }
        }, 1000);
      } else {
        // Increment the counter
        timerRef.current = setTimeout(() => {
          setCount(count + 1);
        }, 1000);
      }
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive, phase, count, totalCycles]);
  
  const getInstructions = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe in...';
      case 'hold':
        return 'Hold...';
      case 'exhale':
        return 'Breathe out...';
    }
  };
  
  const getProgress = () => {
    const currentDuration = durations[phase];
    
    // NEW CONSISTENT CALCULATION:
    // Each step (including the first) gets an equal portion of the progress bar
    // This ensures the progress increments equally for all counts
    
    // For a single step phase, always show 100%
    if (currentDuration === 1) {
      return 100;
    }
    
    // Calculate the percentage per step (each count represents one equal step)
    const percentPerStep = 100 / currentDuration;
    
    // Return the progress based on current count
    // This will show equal increments for each step (including the first step)
    return percentPerStep * count;
  };
  
  const getCircleAnimation = () => {
    switch (phase) {
      case 'inhale':
        return 'scale-[1.5]';
      case 'hold':
        return 'scale-[1.5] opacity-80';
      case 'exhale':
        return 'scale-[1]';
    }
  };
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="text-center mb-4">
        <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#314E52] mb-2">
          4-7-8 Breathing
        </h3>
        <p className="text-gray-600 text-sm">
          A powerful technique for quick anxiety relief
        </p>
      </div>
      
      {/* Restructured layout with separate sections for circles and instructions */}
      <div className="flex flex-col items-center my-6">
        {/* Circle animation area */}
        <div className="h-36 flex items-center justify-center mb-8">
          <div 
            ref={animationRef}
            className={`w-24 h-24 rounded-full bg-[#0A7373]/20 flex items-center justify-center transition-all duration-1000 transform ${isActive ? getCircleAnimation() : 'scale-[1]'}`}
          >
            <div className="w-16 h-16 rounded-full bg-[#0A7373]/40 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#0A7373] flex items-center justify-center text-white text-xs">
                {isActive ? count : ''}
              </div>
            </div>
          </div>
        </div>
        
        {/* Instructions and progress bar area - now positioned below circles */}
        {isActive && (
          <div className="w-full">
            <p className="text-center text-lg text-[#314E52] mb-4">
              {getInstructions()}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-[#0A7373] h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={() => {
            setIsActive(!isActive);
            setCount(1); // Start at 1 instead of 0
            setPhase('inhale');
            setTotalCycles(0);
          }}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            isActive 
              ? 'bg-[#B19777] text-white hover:bg-[#a0865d]' 
              : 'bg-[#0A7373] text-white hover:bg-[#086363]'
          } shadow-md`}
        >
          {isActive ? 'Stop Exercise' : 'Start Breathing'}
        </button>
      </div>
      
      <div className="mt-6 p-4 bg-[#E9E9E9] rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>How it works:</strong> Inhale through your nose for 4 seconds, 
          hold your breath for 7 seconds, and exhale completely through your mouth 
          for 8 seconds. 
        </p>
        <p className="text-sm text-gray-700">
          This technique helps activate your parasympathetic nervous 
          system, creating a natural relaxation response.
        </p>
      </div>
    </div>
  );
}
