function inArray (arr1, arr2) {
    if(!arr1 || !arr2 || arr1.length === 0 || arr2.length === 0 ){
        return [];
    }

    let res = [];
    for (const subs of arr1) {
        for (let i = 0; i < arr2.length; i++) {
            const word = arr2[i];
            if (word.includes(subs)) {
                res.push(subs);
                break;
            }
            
        }
        
    }
    return res.sort();
}

module.exports = { inArray };

