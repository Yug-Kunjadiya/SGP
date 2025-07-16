import React, { useState } from "react";
import "./AuthForm.css";

function AuthForm({ isLogin, setIsLogin, setLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState(""); // Add state for user type

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use userType here for registration
    setLoggedIn(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        {/* Justice image is set via CSS background */}
      </div>
      <div className="auth-form-section">
        <div className="glass-card">
          <h2>{isLogin ? "LOGIN" : "REGISTER"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
              <span className="icon">&#9993;</span>
            </div>
            {!isLogin && (
              <>
                <div className="input-group">
                  <input type="text" placeholder="Username" required />
                  <span className="icon">&#128100;</span>
                </div>
                <div className="input-group">
                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="police">Police</option>
                    <option value="court">Court</option>
                    <option value="admin">Admin</option>
                  </select>
                  <span className="icon">&#128221;</span>
                </div>
              </>
            )}
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="icon password-toggle"
                onClick={() => setShowPassword((v) => !v)}
                style={{ cursor: "pointer" }}
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {isLogin && (
              <div className="options">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => {}}
                >
                  Forgot Password?
                </button>
              </div>
            )}
            <button type="submit" className="login-btn">
              {isLogin ? "Login" : "Register"}
            </button>
            <div className="register-link">
              {isLogin ? (
                <>
                  Don't have an Account?{" "}
                  <span
                    className="toggle-link"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </span>
                </>
              ) : (
                <>
                  Already have an Account?{" "}
                  <span
                    className="toggle-link"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;