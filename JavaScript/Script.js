var slider = document.getElementById("myRange");
var output = document.getElementById("price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value+(".00");
  
}
var x = document.getElementById("price");
var y = x.textContent
console.log(y);