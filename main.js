document.getElementById('sentence').innerHTML = 'I have made a random selection from the pile of books in front of me';

var timer;
var ele = document.getElementById('timer');

function start (){
    var sec = 0;
    timer = setInterval(()=>{
      ele.innerHTML = '00:'+sec;
      sec ++;
    }, 1000) // each 1 second
  }

function done(){
  clearInterval(timer);
  document.getElementById('js_timer').innerHTML= 'WPM: '+ timer;
}



   