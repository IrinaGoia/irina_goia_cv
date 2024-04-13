(function () {
    let circle = document.querySelector('.circle');

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }

        if (entry.isIntersecting) {
            let list = document.querySelectorAll('.circle');
            for (let i = 0; i < list.length; ++i) {
                list[i].classList.add('circle-animation');
             }
        }

        setTimeout(() => {
            let list = document.querySelectorAll('.circle');
            for (let i = 0; i < list.length; ++i) {
                list[i].classList.remove('circle-animation');
             }
        }, 3000);
      });
    });

    observer.observe(circle);
  })();