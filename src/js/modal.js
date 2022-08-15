(() => {
  const refs = {
    // Modals
    modals: document.querySelectorAll('[data-modal]'),
    // buttons
    buttons: document.querySelectorAll('[data-modal-btn]'),
  };

  // Add listener to each button
  for (const btn in refs.buttons) {
    if (Object.hasOwnProperty.call(refs.buttons, btn)) {
      const element = refs.buttons[btn];
      element != undefined && element.addEventListener('click', toggle);
    }
  }

  function modalFunc(arr, attr) {
    for (const key in arr) {
      if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        if (attr == 'close') {
          if (element != undefined) element.classList.add('is-hidden');
        } else {
          const elementAttr = arr[key].getAttribute('data-modal');
          if (elementAttr == attr) element.classList.toggle('is-hidden');
        }
      }
    }
  }

  function toggle(e) {
    let targetAttr = e.currentTarget.getAttribute('data-modal-btn');
    modalFunc(refs.modals, targetAttr);
  }
})();