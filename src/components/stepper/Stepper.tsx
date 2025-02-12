import { useState, useCallback } from 'react';
import StepIndicators from './StepIndicators';

interface StepperProps {
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Optimized handlers using `useCallback`
  const nextStep = useCallback((): void => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, [steps.length]);

  const prevStep = useCallback((): void => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextStep();
      if (event.key === 'ArrowLeft') prevStep();
    },
    [nextStep, prevStep],
  );

  return (
    <div
      className="w-full max-w-lg mx-auto px-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Step Indicators */}
      <StepIndicators steps={steps} currentStep={currentStep} />

      {/* Step Content */}
      <div className="p-4 border border-gray-300 rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold">{steps[currentStep]}</h2>
        <p className="text-gray-500 mt-2">Content for {steps[currentStep]}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          onClick={prevStep}
          disabled={currentStep === 0}
          aria-label="Go to previous step"
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          aria-label={
            currentStep === steps.length - 1
              ? 'Finish process'
              : 'Go to next step'
          }
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
