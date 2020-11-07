// return the total number of smiling faces in the array
function countSmileys(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const validEyes = [':', ';']
    const validNose = ['-', '~']
    const validMouth = [')', 'D'];
    let smileycount = 0;
    for (const smiley of arr) {
        if (smiley.length > 1 && smiley.length < 4) {
            if (smiley.length === 2) {
                const [eyes, mouth] = smiley.split('');
                if (validEyes.includes(eyes) && validMouth.includes(mouth)) {
                    smileycount++;
                }
            }

            if (smiley.length === 3) {
                const [eyes, nose, mouth] = smiley.split('');
                if (validEyes.includes(eyes) && validNose.includes(nose) && validMouth.includes(mouth)) {
                    smileycount++;
                }
            }
        }
    }

    return smileycount;
}

module.exports = { countSmileys };