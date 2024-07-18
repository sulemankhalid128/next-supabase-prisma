// components/Signup.tsx
'use client'

import React, { useState } from 'react';
import { signUp } from '../../../utils/auth';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { user, error } = await signUp(email, password);
    if (error) setMessage(`Signup failed: ${error.message}`);
    else setMessage('Signup successful! Check your email to confirm your account.');
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
