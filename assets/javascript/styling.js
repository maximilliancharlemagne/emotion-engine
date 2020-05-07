// Modal
// Check if triggering element is in the viewport window:
let isInViewport = function (elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Trigger the element when it comes into full view in the viewport, and use localStorage to hide it once it's been viewed one time:
$(document).ready(function () {
  let popUpFired
  if (localStorage.getItem('popUpFired')) {
    popUpFired = localStorage.getItem('popUpFired') 
  } else {
    popUpFired = '';
  }
  $('.modal').modal();
  let ourButton = document.querySelector('#startBtn');
  window.addEventListener('scroll', function (event) {
    if (isInViewport(ourButton) && !popUpFired) {
      $('.modal').modal('open');
      popUpFired = `this could be true but it's not - ha!`;
      localStorage.setItem('popUpFired', popUpFired)
    }
  }, false);
});