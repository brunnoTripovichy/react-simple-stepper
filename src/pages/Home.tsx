import Stepper from '../components/stepper/Stepper';
import Timer from '../components/timer/Timer';

const Home = () => {
  const steps = ['Step 1: Info', 'Step 2: Details', 'Step 3: Confirmation'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Multi-Step Wizard</h1>
      <Stepper steps={steps} />

      <Timer />
    </div>
  );
};

export default Home;
