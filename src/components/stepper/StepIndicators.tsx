import { useMemo } from 'react';

interface StepIndicatorsProps {
  steps: string[];
  currentStep: number;
}

const StepIndicators: React.FC<StepIndicatorsProps> = ({
  steps,
  currentStep,
}) => {
  // Memoized step indicators to prevent unnecessary re-renders
  const stepIndicators = useMemo(() => {
    return steps.map((step, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center w-full"
      >
        <div
          className={`flex items-center justify-center font-bold text-white w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full 
              ${index === currentStep ? 'bg-blue-500' : 'bg-gray-400'}
            `}
          role="button"
          tabIndex={0}
          aria-current={index === currentStep ? 'step' : undefined}
          aria-label={`Step ${index + 1}: ${step}`}
        >
          {index + 1}
        </div>
        <p className="mt-1 text-xs sm:text-sm md:text-base">{step}</p>
      </div>
    ));
  }, [steps, currentStep]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] gap-4 mb-6">
      {stepIndicators}
    </div>
  );
};

export default StepIndicators;
