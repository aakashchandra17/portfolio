document.addEventListener("DOMContentLoaded", () => {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#38bdf8"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5,
          random: false
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#38bdf8",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.8
            }
          }
        }
      },
      retina_detect: true
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      // Store form data before submission
      const nameField = document.querySelector("input[name='name']");
      const emailField = document.querySelector("input[name='email']");
      const messageField = document.querySelector("textarea[name='message']");
      
      // Clear fields after a brief delay to show success message
      setTimeout(() => {
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
        alert("Thank you for your message! I have received your details and will get back to you soon.");
      }, 1000);
    });
  }
});