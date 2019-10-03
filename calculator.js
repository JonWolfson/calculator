window.onload = function () {
  nums = document.getElementById("nums")
  var buttons = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"]
  var j = 0
  var k = 0
  var size = 4
  var posx = 0
  var posy = 0

  for (var i = 0; i < buttons.length; i++) {
    var tile = document.createElement("span")
    var text = document.createElement("p")
    tile.setAttribute("class", "select")
    text.setAttribute("class", "text")
    text.innerHTML = buttons[i]
    nums.appendChild(tile)
    tile.appendChild(text)

    tile.style.left = posx + "px"
    tile.style.top = posy + "px"

    if((i + 1) % size == 0) {
      posx = 0
      posy += 100
    } else {
      posx += 100
    }
  }
}
