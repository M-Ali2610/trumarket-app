import './style.css'
const tabs = document.querySelectorAll('#buttonGroup .tab-btn');
const emailForm = document.getElementById('emailForm');
const socialLoginForm = document.getElementById('socialLoginForm');
const web3WalletForm = document.getElementById('web3WalletForm');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Hide all forms first
    emailForm.classList.add('hidden');
    socialLoginForm.classList.add('hidden');
    web3WalletForm.classList.add('hidden');

    // Remove active background from all tabs
    tabs.forEach(t => t.classList.remove('bg-[#EAECED]'));
    tabs.forEach(t => t.classList.add('bg-white'));

    // Set the clicked tab as active
    tab.classList.remove('bg-white');
    tab.classList.add('bg-[#EAECED]');

    // Show the corresponding form
    if (index === 0) {
      emailForm.classList.remove('hidden');
    } else if (index === 1) {
      socialLoginForm.classList.remove('hidden');
    } else if (index === 2) {
      web3WalletForm.classList.remove('hidden');
    }
  });
});
