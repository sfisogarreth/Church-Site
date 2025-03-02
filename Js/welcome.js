// membership.js

// Validate form fields
function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const birthdate = document.getElementById("birthdate").value;
    const membershipType = document.getElementById("membership_type").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
  
    // Validation: Check if any field is empty
    if (!name || !email || !phone || !address || !birthdate || !membershipType || !password || !confirmPassword) {
      document.getElementById("error").textContent = "Please fill out all fields.";
      return false;
    }
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      document.getElementById("error").textContent = "Passwords do not match.";
      return false;
    }
  
    return true;
  }
  
  // Submit form function
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
  
    if (validate()) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      const birthdate = document.getElementById("birthdate").value;
      const membershipType = document.getElementById("membership_type").value;
      const password = document.getElementById("password").value;
  
      // Save data in localStorage (for demonstration purposes; sensitive data should not be stored like this)
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("address", address);
      localStorage.setItem("birthdate", birthdate);
      localStorage.setItem("membershipType", membershipType);
      localStorage.setItem("password", password); // Avoid storing plain passwords in production
  
      // Redirect to the welcome page
      window.location.href = "welcome.html";
    }
  }
  
  // Attach event listener to the form
  const form = document.getElementById("membership");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
  