let plus = document.getElementById('buttonPlus');
let min = document.getElementById('buttonMin');
let result = document.getElementById('output');
let count = 0;

plus.onclick = function(){
  count += 1;
  result.innerHTML = count;
};
min.onclick = function(){
  count -= 1;
  result.innerHTML = count;
};
