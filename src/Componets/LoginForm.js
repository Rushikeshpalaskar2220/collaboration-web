import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGoogleLogin = () => {
    setShowForm(true);
  };

  return (
    <div className="login-form-container">
      {!showForm ? (
        <>
          <h2>Login</h2>
          <button className="google-login-button" onClick={handleGoogleLogin}>
            Login with Google
          </button>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="text" placeholder="Company Name" required />
            <input type="file" placeholder="Company Image" required />
            <input type="text" placeholder="Company Domain" required />
            <input type="email" placeholder="Company Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </div>
  );
  
};

export default LoginForm;