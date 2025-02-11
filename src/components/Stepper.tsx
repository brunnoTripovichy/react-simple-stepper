import { useState, useMemo } from 'react';

interface StepperProps {
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = (): void => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = (): void => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Memoizing the Step Indicators
  const stepIndicators = useMemo(() => {
    return steps.map((step: string, index: number) => (
      <div
        key={index}
        className="flex flex-col items-center text-center w-full"
      >
        <div
          className={`flex items-center justify-center font-bold text-white
            w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full
            ${index === currentStep ? 'bg-blue-500' : 'bg-gray-400'}
          `}
        >
          {index + 1}
        </div>
        <p className="mt-1 text-xs sm:text-sm md:text-base">{step}</p>
      </div>
    ));
  }, [steps, currentStep]);

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      {/* Step Indicators - Fully Responsive & Evenly Spaced */}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] gap-4 mb-6">
        {stepIndicators}
      </div>

      {/* Step Content */}
      <div className="p-4 border border-gray-300 rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold">{steps[currentStep]}</h2>
        <p className="text-gray-500 mt-2">Content for {steps[currentStep]}</p>
      </div>

      {/* Navigation Buttons - Responsive */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
