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

// Trigger the element when it comes into full view in the viewport:
$(document).ready(function () {
  let popUpFired = false;
  $('.modal').modal();
  // let instance = M.Modal.getInstance('.modal');
  let ourButton = document.querySelector('#startBtn');
  console.log(ourButton)
  window.addEventListener('scroll', function (event) {
    if (isInViewport(ourButton) && !popUpFired) {
      $('.modal').modal('open');
      popUpFired = true;
      // instance.open();
      console.log('isInViewport')
    }
  }, false);
});