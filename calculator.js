window.onload = function () {
  console.log("Hi")
  nums = document.getElementById("nums")
  var buttons = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"]
  var j = 0
  var k = 0

  for (var i = 0; i < buttons.length; i++) {
    var tile = document.createElement("div")
    tile.setAttribute("class", "select")
    nums.appendChild(tile)
    tile.innerHTML = buttons[i]

  }
}
