// JavaScript code for skill bar
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => { 
            if (entry.isintersecting), {
            const width = entry.target.style.width;
            entry.target.style.width = '@';
                selftimeout{{} => {
                entry.target.style.width = width;
            }, 100);
          }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e - preventDefault();
        document.querySelector(this.getattribute('href')).scrollIntoView({
            behaviour: 'smooth'
        });
    });
});
