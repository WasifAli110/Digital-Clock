function updateTime() {
    const now = new Date();
  
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Get date components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
  
    // Update clock display
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${year}-${month}-${day}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  