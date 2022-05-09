ScreenOrientation.lock("landscape-primary");
var collapsible = document.getElementsByClassName("collapsible");

for (var i = 0; i < collapsible.length; i++) {

  collapsible[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var steps = this.nextElementSibling;

    if (steps.style.maxHeight) {
      steps.style.maxHeight = null;
      document.querySelectorAll('nav').forEach(function (e) {
        e.style.transition = "1.5s"
        e.style.top = '30%';
      })
    } else {
      steps.style.maxHeight = steps.scrollHeight + 50 + "px";
      document.querySelectorAll('nav').forEach(function (e) {
        e.style.transitionDuration = "0.5s"
        e.style.top = '18%';
      })
    }
  })
}