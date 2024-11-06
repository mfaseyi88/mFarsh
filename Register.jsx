import React from 'react'

const Register = () => {
  return (
    <div className='pt-[6rem]'>    <div class="container">
            <h2>Sign Up</h2>
            <form id="signupForm" action="submit_signup" method="post">
                <input type="text" name="first_name" placeholder="First Name" required>
                <input type="text" name="middle_name" placeholder="Middle Name (Optional)">
                <input type="text" name="surname" placeholder="Surname" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <input type="password" id="password" name="password" placeholder="Password" required>
                <small class="error" id="passwordError"></small>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required>
                <small class="error" id="confirmPasswordError"></small>
                
                <div class="remember-me">
                    <input type="checkbox" name="remember_me" id="remember_me">
                    <label for="remember_me">Remember Me</label>
                </div>
                
                <button type="submit">Sign Up</button>
            </form>
    
            <div class="login-link">
                <p>Already have an account? <a href="login.html">Log In</a></p>
            </div>
        </div></div>
  )
}

export default Register