function generateRange(min, max, step){
  let res = [];
  if(max < min || step < 1)
  {
    return res;
  }
  else
  {
    for(let i = min; i <= max; i += step)
    {
      res.push(i);
    }
    return res;
  }
}