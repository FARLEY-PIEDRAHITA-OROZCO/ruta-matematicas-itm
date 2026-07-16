  const stops = document.querySelectorAll('.linenav-stop');
  const sections = Array.from(stops).map(s => document.getElementById(s.dataset.target));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const stop = document.querySelector('.linenav-stop[data-target="' + id + '"]');
      if (!stop) return;
      if (entry.isIntersecting) {
        stops.forEach(s => s.classList.remove('active'));
        stop.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => { if (sec) observer.observe(sec); });