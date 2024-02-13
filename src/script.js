
    function updateBackground() {
      const currentTime = new Date();
      const hours = currentTime.getHours();

      let bgImage;
      if (hours >= 6 && hours < 12) {
        // Morning
        bgImage = 'url("morning.png")';
      } else if (hours >= 12 && hours < 20) {
        // Afternoon
        bgImage = 'url("afternoon.png")';
      } else {
        // Night
        bgImage = 'url("night.png")';
      }

      // Set the new background style to the body
      document.body.style.backgroundImage = bgImage;
    }

    function updateTime() {
        const currentTime = new Date();
        const currentHours = currentTime.getHours().toString().padStart(2, '0');
        const currentMinutes = currentTime.getMinutes().toString().padStart(2, '0');
        const currentSeconds = currentTime.getSeconds().toString().padStart(2, '0');
        document.getElementById('hours-minutes').textContent = `${currentHours}:${currentMinutes}`;
        document.getElementById('seconds').textContent = `:${currentSeconds}`;
      }
    
      // Call these functions when the DOM is fully loaded
      document.addEventListener('DOMContentLoaded', function() {
        updateBackground();
        updateTime();
        // Update the time every second
        setInterval(updateTime, 1000);
        // Update the background every hour
        // setInterval(updateBackground, 1000 * 60 * 60);
      });

      async function displayRandomQuote() {
        try {
          const response = await fetch('https://api.quotable.io/random');
          if (!response.ok) {
            throw new Error(`API call failed: ${response.status}`);
          }
          const data = await response.json();
          document.getElementById('quote').textContent = `"${data.content}"`;
          document.getElementById('author').textContent = `- ${data.author}`;
        } catch (error) {
          console.error('Failed to fetch quote:', error);
          document.getElementById('quote').textContent = 'Failed to fetch quote.';
          document.getElementById('author').textContent = '';
        }
      }
    
      // Call the function when the DOM is fully loaded
      document.addEventListener('DOMContentLoaded', function() {
        displayRandomQuote();
      });

      function getDayCycleGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let dayCycle;
      
        if (hours >= 6 && hours < 12) {
          dayCycle = "morning";
        } else if (hours >= 12 && hours < 18) {
          dayCycle = "afternoon";
        } else if (hours >= 18 && hours < 22) {
          dayCycle = "evening";
        } else {
          dayCycle = "night";
        }
      
        const greeting = `Good ${dayCycle}, it's currently `;
        return greeting;
      }
      
      // Example of usage:
      console.log(getDayCycleGreeting());
      function updateGreeting() {
        const greetingElement = document.getElementById('greeting');
        const now = new Date();
        const currentHours = now.getHours().toString().padStart(2, '0');
        
        let dayCycle;
        if (currentHours >= 6 && currentHours < 12) {
          dayCycle = "MORNING";
        } else if (currentHours >= 12 && currentHours < 18) {
          dayCycle = "AFTERNOON";
        } else if (currentHours >= 18 && currentHours < 22) {
          dayCycle = "EVENING";
        } else {
          dayCycle = "NIGHT";
        }
    
       
        greetingElement.textContent = `GOOD ${dayCycle}, IT'S CURRENTLY`;
      }
    
      // Update the greeting immediately and then every second
      updateGreeting();
      setInterval(updateGreeting, 1000);