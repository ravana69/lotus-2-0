function rgb(col){
	
	col+=.000001;
	var r = parseInt((.5+Math.sin(col)*.5)*16);
	var g = parseInt((.5+Math.cos(col)*.5)*16);
	var b = parseInt((.5-Math.sin(col)*.5)*16);
	return "#"+r.toString(16)+g.toString(16)+b.toString(16);
}

var deg = 0,
    tag = document.querySelector('#spin')
var spin = setInterval(function(){
  document.body.style.background = "#000"
  deg+=.1
  var styles = '\
    var {\
      transform: rotate('+Math.sin(deg/6)*102+'deg);\
    }'
    tag.innerHTML = styles
    child=document.querySelector('#t')
  i=0
  child.style.background=rgb(Math.PI*2/20*i-deg)
  while( (child = child.parentNode) && child.tagName=="VAR" ){
    i++
    child.style.background=rgb(Math.PI*2/20*i-deg)
  }
},30)