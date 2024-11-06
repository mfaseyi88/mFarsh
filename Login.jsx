import React from 'react'

const Login = () => {
  return (
    <div className='pt-[8rem]'>  <div class="container">
        <div id="login-container" class="login-container">
          <h2>Login</h2>
          <form id="loginForm">
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" required>
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="login-btn">Login</button>
            <div class="options">
              <a href="resetPassword.html">Forgot Password?</a> |
              <a href="resetEmail.html">Forgot Email?</a>
              <p>Don't have an account yet? <a href="signup.html">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div> </div>
  )
}

export default Login