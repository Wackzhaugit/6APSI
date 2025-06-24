import React, { useState } from 'react';
import './Loginpage.css';  // Importing CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., check credentials)
    if (username && password) {
      alert(`Logged in with username: ${username}`);
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
