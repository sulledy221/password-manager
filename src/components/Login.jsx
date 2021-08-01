import React, { useState } from 'react';
import './Login.css'; 

export default function Login() {
  // * think of these as the values for your inputs
  // * You'll need a useState line for each of the values you want to keep track of
  // * For naming convension, try to think of names that match what value they are for
  // * const [username, setUsername] = useState(''); (that kind of thing :-D )
  const [username, setUsername] = useState(''); // ? useState is a function that takes a parameter which sets the "initial state" for your variable
  const [password, setPassword] = useState(''); // ? useState is a function that takes a parameter which sets the "initial state" for your variable
  return (
    <div>
      <div className="login">Login</div>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        name="username"
        className="login-input"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
        value={username}
        required
      />
      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="password-input"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button type="button" className="login-btn">
        Login
      </button>
    </div>
  );
}
