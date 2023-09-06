import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Favorites from './Favorites';

const supabase = createClient(
  'https://nyustduadaoyfspinngs.supabase.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55dXN0ZHVhZGFveWZzcGlubmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4Mzk4NDcsImV4cCI6MjAwOTQxNTg0N30.WlqDIYG5ys0Fm7COGNqr5nNzi9rCKkw0JBD33xCHcHI'
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigation function

  const handleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        console.error(error.message);
        return;
      }

      console.log('User:', user);
      console.log('Session:', session);

      // Redirect to the Favourites page upon successful login
      navigate('favorites');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
