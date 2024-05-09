import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { z } from 'zod';

const Forms = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedData = schema.parse({ name, email });
      
      setTimeout(() => {
        alert(JSON.stringify(validatedData, null, 2));
        
        navigate('/success');
      }, 400);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          if (err.path === 'name') {
            setNameError(err.message);
          } else if (err.path === 'email') {
            setEmailError(err.message);
          }
        });
      } else {
        console.error(error);
      }
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
    updateSubmitButtonState(e.target.value, email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    updateSubmitButtonState(name, e.target.value);
  };

  const updateSubmitButtonState = (name, email) => {
    setIsSubmitDisabled(!name || !email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-covered-by-your-grace mb-6 text-green-800">Registration Form</h1>
        <h1 className="text-4xl font-manrope mb-3">Start your success</h1>
        <h1 className="text-4xl font-manrope mb-6">Journey here!</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
          <input
            className="mb-4 p-5 border border-gray-300 rounded-full bg-gray-200 w-full"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            autoComplete="off"
          />
          {nameError && <div className="text-red-500">{nameError}</div>}
          <input
            className="mb-4 p-5 border border-gray-300 rounded-full bg-gray-200 w-full"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            autoComplete="off"
          />
          {emailError && <div className="text-red-500">{emailError}</div>}
          <button
            className={`hover:bg-black text-white font-bold py-5 px-4 rounded-full bg-gray-400 hover:text-white ${isSubmitDisabled && 'cursor-not-allowed opacity-50'}`}
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
          {isSubmitDisabled && (
            <div className="text-red-500 mt-2">
              Please fill out all fields before submitting.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Forms;
