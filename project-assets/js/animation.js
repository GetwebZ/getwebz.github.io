const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Unlock the potential of your brand with our innovative and visually stunning website designs, crafted to leave a lasting impact in the digital sphere.", "we blend creativity with functionality to build bespoke websites that resonate with your audience and elevate your online presence to new heights", "Elevate your online presence with our custom-tailored website designs that not only stand out but also seamlessly integrate your brand's essence, fostering meaningful connections with your visitors.", "Transforming your ideas into captivating digital experiences, our expert team is committed to crafting visually appealing and user-friendly websites that drive results.","Empower your business with an engaging online platform. Our cutting-edge designs are tailored to reflect your unique identity and leave a lasting impression on your audience"];
const typingDelay = 100;
const erasingDelay = 40;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});