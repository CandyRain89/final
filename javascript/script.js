//Light mode and dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    
    document.body.classList.add("dark-mode");
  } else {
    
    document.body.classList.remove("dark-mode");
  }
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Light mode and dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("change", () => {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });

});

// Hero Rolodex effect
document.addEventListener("DOMContentLoaded", function() {
  const jobTitles = ["Software Engineer", "Graphic Designer", "Problem Solver"];
  const rolodexElement = document.getElementById("rolodex");

  let index = 0;
  let animationInProgress = false;

  function startAnimation() {
      if (!animationInProgress) {
          animationInProgress = true;
          rolodexElement.style.transform = "translate3d(0, 0, 0)"; // Add this line
          rolodexElement.style.opacity = "0";
          setTimeout(() => {
              rolodexElement.innerText = jobTitles[index];
              index = (index + 1) % jobTitles.length;
              rolodexElement.style.opacity = "1";
              animationInProgress = false;
          }, 500);
      }
  }

  setInterval(startAnimation, 2000);
});

  // Parallax effect
  const parallaxContainer = document.querySelector(".parallax-container");

  function updateParallax() {
      const scrollY = window.scrollY;
      parallaxContainer.style.backgroundPositionY = -scrollY * 0.5 + "px"; 
  }

  window.addEventListener("scroll", updateParallax);

  // Fade in effect for hero section
  function fadeInHero() {
      const heroElement = document.getElementById("hero");
      let opacity = 0;
      const fadeInInterval = setInterval(function () {
          if (opacity < 1) {
              opacity += 0.05;
              heroElement.style.opacity = opacity;
          } else {
              clearInterval(fadeInInterval);
          }
      }, 50);
  }

  window.addEventListener("load", fadeInHero);

  // Function to fade in the image
function fadeInImage() {
  const imageElement = document.getElementById("profileImage");
  let opacity = 0;
  const fadeInInterval = setInterval(function () {
      if (opacity < 1) {
          opacity += 0.05;
          imageElement.style.opacity = opacity;
      } else {
          clearInterval(fadeInInterval);
      }
  }, 50);
}

// Call the fadeInImage function when the page loads
window.addEventListener("load", fadeInImage);


  // Fade in effect for about section
  function fadeInAbout() {
      const aboutElement = document.getElementById("about");
      let opacity = 0;
      const fadeInInterval = setInterval(function () {
          if (opacity < 1) {
              opacity += 0.05;
              aboutElement.style.opacity = opacity;
          } else {
              clearInterval(fadeInInterval);
          }
      }, 50);
  }
//skill bar graph animation
const bars = d3.selectAll('.bar');

bars
  .style('width', 0)
  .transition()
  .duration(1000)
  .style('width', d => d.getAttribute('data-level') + '%');
