function parseMolecule(formula)
{
  // "H"
  // {H: 1, }
  const f = {};
  if(formula.length === 1) {
    const f = {}
    f[formula[0]] = 1;
    return f;
  }

  //let previousElement = "";
  for (let i = 0; i < formula.length; i++) {
    // H 2 O
    ["H", "O"]
    [2, 1]
    // 0 1 2
    // ['MgAuFr']

    // MgAu2Fr5
    // [MgAu, FR]
    // [2, 1]



    let element = formula[i];
    // If is lower case is a two letter element
    let nextChar = formula[i + 1]  || "";
    if (nextChar !== nextChar.toUpperCase() ) {
      element += nextChar;
      i++;
      nextChar = formula[i + 1];
    }
    
    if (!Number.isNaN(+(formula[i + 1]))) {
      if(f[element] === undefined) {
        f[element] = +(formula[i + 1]);
      }
      else{
        f[element] += +(formula[i + 1]);
      }
      i++;
    }
    else if(f[element] === undefined) {
      f[element] = 1;
    }

    // previousElement = element;
  }

  return f;


}


module.exports = { parseMolecule };

