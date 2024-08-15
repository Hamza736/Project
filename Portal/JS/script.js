// JavaScript to toggle between Sign In and Sign Up forms

document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  const showSignUp = document.getElementById('showSignUp');
  const showSignIn = document.getElementById('showSignIn');
  const showForgotPassword = document.getElementById('showForgotPassword');
  const backToSignIn = document.getElementById('backToSignIn');

  showSignUp.addEventListener('click', (e) => {
      e.preventDefault();
      signInForm.style.display = 'none';
      signUpForm.style.display = 'block';
      forgotPasswordForm.style.display = 'none';
  });

  showSignIn.addEventListener('click', (e) => {
      e.preventDefault();
      signInForm.style.display = 'block';
      signUpForm.style.display = 'none';
      forgotPasswordForm.style.display = 'none';
  });

  showForgotPassword.addEventListener('click', (e) => {
      e.preventDefault();
      forgotPasswordForm.style.display = 'block';
      signInForm.style.display = 'none';
      signUpForm.style.display = 'none';
  });

  backToSignIn.addEventListener('click', (e) => {
      e.preventDefault();
      signInForm.style.display = 'block';
      signUpForm.style.display = 'none';
      forgotPasswordForm.style.display = 'none';
  });
});

function showPayment() {
  var courseDropdown = document.getElementById("courseDropdown");
  var paymentInput = document.getElementById("payment");

  // Course payment mapping
  var coursePayment = {
      "Web Development": "5000",
      "Data Science": "7000",
      "Graphic Design": "6000"
  };

  // Get selected course
  var selectedCourse = courseDropdown.value;

  // Display the payment
  paymentInput.value = coursePayment[selectedCourse] || "";
}

// Password Visibility Eye Icon 

document.addEventListener('DOMContentLoaded', () => {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('signInPassword');

  togglePassword.addEventListener('click', () => {
      // Toggle the type attribute
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Toggle the eye icon
      if (type === 'password') {
          togglePassword.classList.remove('fa-eye');
          togglePassword.classList.add('fa-eye-slash');
      } else {
          togglePassword.classList.remove('fa-eye-slash');
          togglePassword.classList.add('fa-eye');
      }
  });
});







// VALIDATION SIGN IN PAGE

document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.getElementById('signInForm');
  const signInEmail = document.getElementById('signInEmail');
  const signInPassword = document.getElementById('signInPassword');
  const signInButton = document.querySelector('#signInForm button');

  signInButton.addEventListener('click', (e) => {
      e.preventDefault();
      const email = signInEmail.value.trim();
      const password = signInPassword.value.trim();
      if (validateEmail(email) && validatePassword(password)) {
          window.location.href = 'dasboard.html';
      } else {
          alert('Please enter a valid email and password.');
      }
  });

  function validateEmail(email) {
      // Simple email validation pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

  function validatePassword(password) {
      // For simplicity, just check if the password is not empty
      return password.length > 6;
  }
});
