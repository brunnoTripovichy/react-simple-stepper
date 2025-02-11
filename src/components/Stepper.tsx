import { useState } from 'react';

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

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col items-center`}>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold
                ${index === currentStep ? 'bg-blue-500' : 'bg-gray-400'}
              `}
            >
              {index + 1}
            </div>
            <p className="mt-2 text-sm">{step}</p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="p-4 border border-gray-300 rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold">{steps[currentStep]}</h2>
        <p className="text-gray-500 mt-2">Content for {steps[currentStep]}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
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
