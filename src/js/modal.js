(() => {
  const modals = {
    // Modals
    modalMain: document.querySelector('[data-modal]'),
    modalLocation: document.querySelector('[data-modal-loc]'),
    modalFran: document.querySelector('[data-modal-fran]'),
    modalAbout: document.querySelector('[data-modal-about]'),
  };

  const buttons = {
    // buttons
    btnClose: document.querySelector('[data-btn-close]'),
    btnModal: document.querySelector('[data-btn-modal]'),
    btnLocation: document.querySelector('[data-btn-loc]'),
    btnFran: document.querySelector('[data-btn-fran]'),
    btnAbout: document.querySelector('[data-btn-about]'),
  };

  buttons.btnModal.addEventListener('click', toggle);
  buttons.btnLocation.addEventListener('click', toggle);
  buttons.btnFran.addEventListener('click', toggle);
  buttons.btnAbout.addEventListener('click', toggle);
  buttons.btnClose.addEventListener('click', toggle);

  function toggle(e) {
    let target = e.target;

    target == buttons.btnModal && modals.modalMain.classList.toggle('is-hidden');
    target == buttons.btnLocation && modals.modalLocation.classList.toggle('is-hidden');
    target == buttons.btnFran && modals.modalFran.classList.toggle('is-hidden');
    target == buttons.btnAbout && modals.modalAbout.classList.toggle('is-hidden');

    if (target == buttons.btnClose) {
      for (const modal in modals) {
        if (modals[modal] != undefined) modals[modal].classList.remove('is-hidden');
      }
    }
  }
})();