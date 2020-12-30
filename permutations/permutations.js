function permutations (string) {
    if (!string || string.length == 0) {
        return [];
    } else if (string.length === 1){
        return [string];
    }

    for (const char of string) {
        if(char) {

        }
    }

    const stringSet = new Set(string);
    if(stringSet.size === 1){
        return [string];
    }


    // 1, 2
    // 2, 1
    
    // 1, 2, 3
    // 1, 3, 2

    // brute force all permutations

    let permutations = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
          permutations.push(m)
        } else {
          for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), m.concat(next))
         }
       }
       return permutations;
    }

    const allPerms = permute(string.split('')).map(p => p.join(''));

    return Array.from(new Set(allPerms));
}

module.exports = { permutations };

