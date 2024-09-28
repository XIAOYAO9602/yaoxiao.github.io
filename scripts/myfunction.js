//Comments from Michelle Duan: your flash function makes sense to me and good to see flash is easy to implement!

var flag = 0;
function flash(){
  var text = document.getElementById("myDiv");
  if (!flag) {
    text.style.color = "white";
    text.style.background = "";
    flag = 1;
  } else {
    text.style.color = "black";

    text.style.background = "";
    flag = 0;
  }
  setTimeout("flash()", 300);
}
