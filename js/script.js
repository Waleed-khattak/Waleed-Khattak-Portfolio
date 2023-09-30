// Scroll Button 

const scrollButton = document.querySelector('.scroll-top-button');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 0) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo(0, 0);
}



// Pre Loader 

let loader = document.getElementById('pre-loader');

window.addEventListener('load', () => {
  loader.style.display = 'none'
});



// Nav Section

let bar = document.getElementById("bar");
let nav = document.getElementById("nav");

bar.onclick = () =>{
    bar.classList.toggle('fa-window-close');
    nav.classList.toggle('active');
}

window.onscroll = () =>{
    bar.classList.remove('fa-window-close'); 
    nav.classList.remove('active');
}



// Skills Section 

let skillNums = document.querySelectorAll('.skill-num');
let ranges = document.querySelectorAll('.custom-range');

ranges.forEach((range, index) => {
  range.value = parseInt(skillNums[index].innerText);
  if (isTouchDevice()) {
    range.disabled = true;
  }

  const skillRange = () => {
    skillNums[index].innerText = range.value + " %";
  }

  range.addEventListener('input', skillRange);

  range.addEventListener('mousedown', function(event) {
    event.preventDefault();
  });
});


function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}



// Contact Section

let formInput = document.querySelectorAll('.form-input');

formInput.forEach((inputIndex) => {
  const InputFun = () =>{
    if(inputIndex.value == "")
    {
      inputIndex.style.backgroundColor = '#0a1e2e';
      inputIndex.style.color = 'rgb(153, 152, 152)'
    }
    else{
      inputIndex.style.backgroundColor = '#E8F0FE';
      inputIndex.style.color = 'black'
    }
  }
  inputIndex.addEventListener("input", InputFun);
});

