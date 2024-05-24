function preload() {
    const TIMELINE_PRELOAD = gsap.timeline();
    
    TIMELINE_PRELOAD
    .fromTo(".c-preload__logo-image", {
      opacity: 0,
      y: '10%'
    }, {
      opacity: 1,
      y: '0',
      duration: 1.5,
      ease: 'power2.out'
    })
    .to(".c-preload__logo-image", {
      opacity: 0,
      delay: 0.2,
      ease: 'power2.out'
    })
    .to(".c-preload__vertical-line", {
      height: "0",
      duration: 1,
      ease: 'power2.out'
    });
  }
  
  window.addEventListener('load', preload);
  