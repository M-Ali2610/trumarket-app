import './style.css'
const buttons = document.querySelectorAll('#buttonGroup .tab-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('bg-[#EAECED]'));
      buttons.forEach(btn => btn.classList.add('bg-white'));
      
      button.classList.remove('bg-white');
      button.classList.add('bg-[#EAECED]');
    });
  });
