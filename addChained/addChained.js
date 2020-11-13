function add(n){
  
  var closure = (l) => add(n + l);

  closure.valueOf = () => n;
  
  return closure;
}

module.exports = { add };

