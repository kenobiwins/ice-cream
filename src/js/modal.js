(() => {
  const refs = {
    // Modals
    modals: document.querySelectorAll('[data-modal]'),
    // buttons
    buttons: document.querySelectorAll('[data-modal-btn]'),
    backdrop: document.querySelectorAll('.backdrop'),
  };

  // Add listener to each button
  for (const btn in refs.buttons) {
    if (Object.hasOwnProperty.call(refs.buttons, btn)) {
      const element = refs.buttons[btn];
      element != undefined && element.addEventListener('click', toggle);
    }
  }

  var stopAllYouTubeVideos = () => {
    var iframes = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframes, iframe => {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'stopVideo' }),
        '*'
      );
    });
  };

  function modalFunc(arr, attr) {
    if (attr == 'close') {
      stopAllYouTubeVideos();
    }

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

  // Backdrop click
  for (const back in refs.backdrop) {
    if (Object.hasOwnProperty.call(refs.backdrop, back)) {
      const element = refs.backdrop[back];
      element != undefined &&
        element.addEventListener('click', e => {
          if (e.target.classList.contains('backdrop')) {            
            e.target.classList.toggle('is-hidden');
            stopAllYouTubeVideos();
          }
        });
    }
  }
})();
