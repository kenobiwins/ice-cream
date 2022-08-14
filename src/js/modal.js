(() => {
  const modals = {
    // Modals
    modalMain: document.querySelector('[data-modal]'),    
    modalFran: document.querySelector('[data-modal-fran]'),
    modalAbout: document.querySelector('[data-modal-about]'),
  };

  const buttons = {
    // buttons
    btnClose: document.querySelector('[data-btn-close]'),
    btnModal: document.querySelector('[data-btn-modal]'),    
    btnFran: document.querySelector('[data-btn-fran]'),
    btnAbout: document.querySelector('[data-btn-about]'),
  };

  buttons.btnFran.addEventListener('click', toggle);
  buttons.btnModal.addEventListener('click', toggle);
  buttons.btnAbout.addEventListener('click', toggle);
  buttons.btnClose.addEventListener('click', toggle);

  function toggle(e) {
    let target = e.currentTarget;

    target == buttons.btnModal && modals.modalMain.classList.toggle('is-hidden');    
    target == buttons.btnFran && modals.modalFran.classList.toggle('is-hidden');
    target == buttons.btnAbout && modals.modalAbout.classList.toggle('is-hidden');
    
    console.log(target);
    if (target == buttons.btnClose) {
      for (const modal in modals) {
        if (modals[modal] != undefined) {
          modals[modal].classList.add('is-hidden');
        }
      }
    }
  }
})();