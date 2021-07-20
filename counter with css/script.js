let count = 0;

function counter(){
  count ++;
  document.querySelector('h2').innerHTML = count;

}

function reset(){
  count --;
  document.querySelector('h2').innerHTML = count;
}
