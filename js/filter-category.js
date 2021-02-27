var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var filter_content = this.nextElementSibling;
    if (filter_content.style.maxHeight) {
      filter_content.style.maxHeight = null;
    } else {
      filter_content.style.maxHeight = filter_content.scrollHeight + "px";
    }
  });
}
