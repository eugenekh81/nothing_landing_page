'use strict';

const allAnimated = document.querySelectorAll('.animated');

document.addEventListener('DOMContentLoaded', () => {
  function checkBlockPosition() {
    const windowHeight = window.innerHeight;

    allAnimated.forEach((block) => {
      const blockPosition = block.getBoundingClientRect().top;

      if (blockPosition < windowHeight - 100) {
        block.style.opacity = 1;
        block.style.transform = 'translate(0)';
      }
    });
  }

  checkBlockPosition();

  window.addEventListener('scroll', () => {
    checkBlockPosition();
  });
});
