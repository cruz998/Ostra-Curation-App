// Placeholder for Send Sats functionality
document.addEventListener('DOMContentLoaded', () => {
    const sendSatsButton = document.querySelector('.send-sats-btn');
  
    if (sendSatsButton) {
      sendSatsButton.addEventListener('click', () => {
        // Simulate a sats sending action
        alert('💸 You sent 100 sats to Satoshi Lopez!');
        console.log('Send Sats button clicked!');
      });
    }
  });