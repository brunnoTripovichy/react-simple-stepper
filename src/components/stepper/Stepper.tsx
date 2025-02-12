import { useState, useCallback, useEffect, useRef } from 'react';
import StepIndicators from './StepIndicators';

interface Step {
  title: string;
  component: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextStep = useCallback((): void => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, [steps.length]);

  const prevStep = useCallback((): void => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard Navigation (Use Ctrl + Arrow to navigate steps)
  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.ctrlKey) {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          nextStep();
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          prevStep();
        }
      }
    },
    [nextStep, prevStep],
  );

  // Ensure focus is set on the stepper container for keyboard navigation
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-lg mx-auto px-4 focus:outline-none"
      tabIndex={0}
    >
      {/* Step Indicators */}
      <StepIndicators
        steps={steps.map((step) => step.title)}
        currentStep={currentStep}
      />

      {/* Directly Render Step Content */}
      <div className="p-4 border border-gray-300 rounded-md shadow-md text-center">
        {steps[currentStep].component}
      </div>

      {/* Pure Tailwind Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
        <button
          className="px-4 py-2 rounded transition-all duration-200 
                     bg-gray-500 text-white 
                     hover:bg-gray-600 focus:ring-2 focus:ring-gray-300 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 rounded transition-all duration-200 
                     bg-blue-500 text-white 
                     hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>

      {/* Accessibility Hint */}
      <p className="text-sm text-gray-500 mt-4 text-center">
        Use <kbd className="bg-gray-200 px-1 rounded">Ctrl</kbd> +{' '}
        <kbd className="bg-gray-200 px-1 rounded">←</kbd> /{' '}
        <kbd className="bg-gray-200 px-1 rounded">→</kbd> to navigate steps.
      </p>
    </div>
  );
};

export default Stepper;
