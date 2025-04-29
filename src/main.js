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


// JS for active button of dashboard

const buttons = document.querySelectorAll(".filter-btn");
const contents = document.querySelectorAll(".shipment-content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update button styles
    buttons.forEach((b) => {
      b.classList.remove("bg-tm-charcoal-blue", "text-tm-white");
      b.classList.add("text-tm-charcoal-blue");
    });
    btn.classList.remove("text-tm-charcoal-blue");
    btn.classList.add("bg-tm-charcoal-blue", "text-tm-white");

    // Show/hide shipment sections
    const targetId = btn.getAttribute("data-target");

    contents.forEach((content) => {
      if (content.id === targetId) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
});
