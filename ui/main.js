console.log('Loaded!');
var button = document.getElementById('counter');
var counter = 0;
button.onclick=function(){
    counter = counter + 1;
    var span = documentgetElementById('count');
    span.innerHTML = counter.toString();
};