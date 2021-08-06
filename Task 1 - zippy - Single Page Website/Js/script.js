// Script to change header when scroll 

let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("nav-active")
const remove_class_on_scroll = () => header.classList.remove("nav-active")

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }

})

// Script for Life in zippy section 

let pictures = document.getElementsByClassName('pictures')

for (var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener('mouseover', function () {
    document.getElementById('show-images').src = this.src
  })
}
// ------ For Left Arrow ------ 
let leftArrow = document.getElementById('leftArrow');
leftArrow.addEventListener('click', function () {
  document.getElementById('move').scrollLeft -= 80
})

// ------ For Right Arrow ------ 
let rightArrow = document.getElementById('rightArrow');
rightArrow.addEventListener('click', function () {
  document.getElementById('move').scrollLeft += 80
})

// To protect the source code at some extent 
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}