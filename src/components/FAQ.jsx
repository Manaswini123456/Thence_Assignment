import Union from '../assets/Union.png';
import faq_cross from '../assets/faq_cross.png';
import '../index.css';
import faq_minus from '../assets/faq_minus.png'
import { useState } from 'react';

const FAQ = () => {

  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };
  return (
    <div className="flex flex-col min-h-screen justify-center m-5">
      <div className="relative" style={{ backgroundColor: 'rgba(230, 237, 234, 1)', borderRadius: '20px' }}>
        <div className="absolute bottom-0 left-0" style={{ backgroundImage: `url(${Union})`, width: '250px', height: '250px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between p-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className='flex flex-col'>
              <h1 className='font-covered-by-your-grace text-xl mb-3 text-gray-500'>What's in your mind</h1>
              <h1 className='text-5xl font-bold md:text-5xl title'>Ask Questions</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-10">
            <div className="flex flex-col justify-start">
              <div className="flex flex-row justify-between items-center">
                <h3 className="font-bold text-xl">Do you offer freelancers</h3>
                <img src={faq_cross} alt="Cross" className='w-4 h-4' />
              </div>
              <div className="border-t border-gray-400 mt-5 mb-3"></div>
              <div className="flex flex-row justify-between items-center">
                <h3 className="font-bold text-xl">What is the guarantee that I will be satisfied with the hired talent?</h3>
                <img src={faq_cross} alt="Cross" className='w-4 h-4' />
              </div>
              <div className="border-t border-gray-400 mt-5 mb-3"  ></div>
              <div className="flex flex-row justify-between items-center" onClick={toggleText}>
                <h3 className="font-bold text-xl">Can I hire multiple talent at once?</h3>
                <img src={showText ? faq_minus : faq_cross} alt="Toggle" className='w-4 h-4 cursor-pointer' />
              </div>
              {showText && (
                <>
                  <div className="border-t border-gray-400 mt-5 mb-3"></div>
                  <p className='w-[80%] mt-5 mb-3'>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
                </>
              )}
              <div className="border-t border-gray-400 mt-5 mb-3"></div>
              <div className="flex flex-row justify-between items-center">
                <h3 className="font-bold text-xl">Why should I not go to an agency directly?</h3>
                <img src={faq_cross} alt="Cross" className='w-4 h-4' />
              </div>
              <div className="border-t border-gray-400 mt-5 mb-3"></div>
              <div className="flex flex-row justify-between items-center">
                <h3 className="font-bold text-xl">Who can help me pick a right skillset and duration for me?</h3>
                <img src={faq_cross} alt="Cross" className='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
