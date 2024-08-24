import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const success = await login(form.email, form.password);
    console.log(success);
    navigate("/");
    if (success) {
      navigate("/");
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={{ backgroundImage: 'url("assets/images/backgrounds/login-bg.jpg")' }}>
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Register</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
                  <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                      <label htmlFor="signin-email-2">Username or email address *</label>
                      <input type="text" className="form-control" id="signin-email-2" name="email"  onChange={handleLoginChange} required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="signin-password-2">Password *</label>
                      <input type="password" className="form-control" id="signin-password-2" name="password" onChange={handleLoginChange} required />
                    </div>

                    <div className="form-footer">
                      <button type="submit" className="btn btn-outline-primary-2">
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right"></i>
                      </button>

                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                        <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
                      </div>

                      <Link to="#" className="forgot-link">Forgot Your Password?</Link>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="form-group">
                      <label htmlFor="register-email-2">Your email address *</label>
                      <input type="email" className="form-control" id="register-email-2" name="email" onChange={handleRegisterChange} required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="register-password-2">Password *</label>
                      <input type="password" className="form-control" id="register-password-2" name="password" onChange={handleRegisterChange} required />
                    </div>

                    <div className="form-footer">
                      <button type="submit" className="btn btn-outline-primary-2">
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right"></i>
                      </button>

                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                        <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <Link to='#'>privacy policy</Link> *</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
