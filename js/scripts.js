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

// Show the crate page and hide the home page
function showCratePage() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('crate-page').style.display = 'block';
}

// Show the home page and hide the crate page
function showHomePage() {
  document.getElementById('crate-page').style.display = 'none';
  document.getElementById('home-page').style.display = 'grid'; // Restore grid layout
}