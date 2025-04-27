import './style.css'
const buttons = document.querySelectorAll('#buttonGroup .tab-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('bg-white'));
      buttons.forEach(btn => btn.classList.add('bg-[#EAECED]'));
      
      button.classList.remove('bg-[#EAECED]');
      button.classList.add('bg-white');
    });
  });
