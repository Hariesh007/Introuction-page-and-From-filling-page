document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  alert("Thank you, " + name + "! We will get back to you at " + email);
});