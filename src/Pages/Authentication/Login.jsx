import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
    const[form, setForm] = useState({email: '', password: ''});
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLoginChange = (e) =>{
        const{ name, value} = e.target;
        setForm({ ...form, [name]:value});
    }

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        console.log(form);
        const success = await login(form.email, form.password);
        if (success) {
          navigate('/'); 
        }
    }

    const handleRegisterChange = (e) =>{
      const{ name, value} = e.target;
      setForm({ ...form, [name]:value});
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(form);
}
  return (
    <>
      <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="icon-close"></i></span>
              </button>

              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                      <form action="#" onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                          <label htmlFor="signin-email">Username or email address *</label>
                          <input type="text" className="form-control" id="email" name="email" onChange={handleLoginChange} required />
                        </div>

                        <div className="form-group">
                          <label htmlFor="signin-password">Password *</label>
                          <input type="password" className="form-control" id="password" name="password" onChange={handleLoginChange} required />
                        </div>

                        <div className="form-footer">
                          <button type="submit" className="btn btn-outline-primary-2">
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="signin-remember" />
                            <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                          </div>

                          <a href="javascript:void(0)" className="forgot-link">Forgot Your Password?</a>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="javascript:void(0)" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="javascript:void(0)" className="btn btn-login btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                      <form onSubmit={handleRegisterSubmit}>
                        <div className="form-group">
                          <label htmlFor="register-email">Your email address *</label>
                          <input type="email" className="form-control" id="register-email" name="register-email" onChange={handleRegisterChange} required />
                        </div>

                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input type="password" className="form-control" id="register-password" name="register-password" onChange={handleRegisterChange} required />
                        </div>

                        <div className="form-footer">
                          <button type="submit" className="btn btn-outline-primary-2">
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="register-policy" required />
                            <label className="custom-control-label" htmlFor="register-policy">
                              I agree to the <a href="javascript:void(0)">privacy policy</a> *
                            </label>
                          </div>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="javascript:void(0)" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="javascript:void(0)" className="btn btn-login btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
