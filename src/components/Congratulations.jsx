import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import tick from '../assets/green_tick.png';

const Congratulations = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, countdown * 1000);

    const timerInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(timerInterval);
    };
  }, [countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={tick} width={50} height={50} alt="tick" />
        <h1 className="text-3xl font-covered-by-your-grace mb-6 text-green-800">Success Submitted</h1>
        <h1 className="text-5xl font-manrope mb-6">Congratulations!</h1>
        <p className="text-gray-700 text-2xl max-w-lg">
          Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates.
        </p>
        <div className='mt-16'> 
          <p className='flex items-center'>Redirecting you to the Homepage in &nbsp;
            <span className='text-black font-bold'>{countdown} seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
