  // Project Specific JavaScript

    // Typing effect
    const textToType = "Building secure systems, one exploit at a time";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeWriter() {
      if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 80); // Adjust speed here (lower = faster)
      }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // Navbar scroll effect (from main site)
    const navbar = document.querySelector('.project-topbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
      } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
      }
    });

    // Enhanced parallax effect with brightness control
    let mouseMoving = false;
    let mouseMoveTimeout;
    let currentBrightness = 0.08;
    let targetBrightness = 0.05;
    const maxBrightness = 0.4; 
    const minBrightness = 0.05; 
    const brightnessIncrement = 0.0075; 
    const dimSpeed = 0.0003; 

    window.addEventListener('mousemove', (e) => {
      mouseMoving = true;
      
      // Gradually increase target brightness with movement (cap at max)
      targetBrightness = Math.min(targetBrightness + brightnessIncrement, maxBrightness);
      
      // Clear existing timeout
      clearTimeout(mouseMoveTimeout);
      
      // Set timeout to detect when mouse stops
      mouseMoveTimeout = setTimeout(() => {
        mouseMoving = false;
        targetBrightness = minBrightness; // Start dimming back down
      }, 150);

      // Parallax effect
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
      });
    });

    // Smooth brightness animation loop
    function animateBrightness() {
      // Smoothly interpolate current brightness toward target
      if (currentBrightness < targetBrightness) {
        currentBrightness = Math.min(currentBrightness + 0.005, targetBrightness);
      } else if (currentBrightness > targetBrightness) {
        currentBrightness = Math.max(currentBrightness - dimSpeed, targetBrightness);
      }

      // Apply brightness to all orbs
      document.querySelectorAll('.gradient-orb').forEach((orb) => {
        orb.style.opacity = currentBrightness;
      });

      requestAnimationFrame(animateBrightness);
    }

    // Start the brightness animation loop
    animateBrightness();