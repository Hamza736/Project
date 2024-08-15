
      function showPayment() {
        var courseDropdown = document.getElementById("courseDropdown");
        var paymentInput = document.getElementById("payment");

        // Course payment mapping
        var coursePayment = {
          first: "5000",
          second: "7000",
          third: "6000",
        };

        // Get selected course
        var selectedCourse = courseDropdown.value;

        // Display the payment
        paymentInput.value = coursePayment[selectedCourse] || "";
      }

      document
        .getElementById("fileUpload")
        .addEventListener("change", function () {
          var fileName = this.files[0] ? this.files[0].name : "No file chosen";
          document.getElementById("file-name").textContent = fileName;
        });

        var swiper = new Swiper(".mySwiper", {
          grabCursor: true,
          effect: "creative",
          creativeEffect: {
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
          autoplay: {
            delay: 2500,
          },
        });

          // JavaScript to handle login validation
document.querySelector('.login-btn').addEventListener('click', handleLogin);

// Add keydown event listener to the password field
document.getElementById('headerPassword').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleLogin(event);
    }
});

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get email and password values
    const email = document.getElementById('headerEmail').value;
    const password = document.getElementById('headerPassword').value;

    // Simple validation
    if (validateEmail(email) && validatePassword(password)) {
      //  alert('Login successful!');
        // Redirect to another page or perform any other action
        window.location.href = "Portal/dasboard.html"; // Example of redirecting to a dashboard
    } else {
        alert('Please enter a valid email and password.');
    }
}

// Function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password (example: minimum 6 characters)
function validatePassword(password) {
    return password.length >= 6;
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
        modal.style.display = "none";
  }
}
