import React, { useState } from 'react';
import axios from 'axios';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus('Loading...');
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/subscribe`, { email });
      console.log({response})
      if (response.status === 200) {
        setStatus('Subscription successful!');
        setEmail(''); // Reset the email input
      } else {
        setStatus('Subscription failed. Please try again.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const why = error.response?.data?.why?.split(/\.\s/)[0] ?? 'Unknown error';
        setStatus(`Subscription failed. ${why}`);
      } else {
        setStatus('Subscription failed. Please try again.');
      }
    }
  };

  return (
    <>
      <h2 className="text-[32px] font-light mb-[20px] text-center lg:text-right max-w-[400px] lg:max-w-[380px]">Subscribe to our newsletter</h2>
      <form
        className="border-2 border-white bg-black/50 flex justify-between px-4 focus mb-1"
        onSubmit={handleSubscribe}
      >
        <input
          type="email"
          className="py-2 bg-night/0 focus:outline-none pr-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" className='w-[80px] hover:text-jonquil/70'>Sign up</button>
      </form>
      {status && <p>{status}</p>}
    </>
  );
};

export default Subscribe;
