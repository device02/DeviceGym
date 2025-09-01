// Initialize EmailJS
(function () {
  emailjs.init("nIBIfB6FvRtflhQ6l"); // EmailJS public key
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from refreshing the page

  emailjs.sendForm("service_18cchtx", "template_vfu7tub", this)
    .then(function () {
      alert("✅ Message sent successfully!");
      document.getElementById("contactForm").reset(); // clear the form after success
    }, function (error) {
      alert("❌ Failed to send message. Error: " + JSON.stringify(error));
    });
});





// Scroll to Top Function
// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Scroll to bottom
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

