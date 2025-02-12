import Stepper from '../components/stepper/Stepper';
import Timer from '../components/timer/Timer';
import AddressForm from '../features/AdressForm';
import Summary from '../features/Summary';
import UserInfo from '../features/UserInfo';

const Home = () => {
  const steps = [
    { title: 'User Info', component: <UserInfo /> },
    { title: 'Address', component: <AddressForm /> },
    { title: 'Summary', component: <Summary /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Multi-Step Wizard</h1>
      <Stepper steps={steps} />
      <Timer />
    </div>
  );
};

export default Home;
