function humantime (seconds) {
    if (seconds === 0) {
      return 'now';
    }
    let remainingSeconds = seconds;
    let humanReadableTime = [];
    const TIMEUNITS = {year: 31536000, day: 86400, hour: 3600, minute: 60 };

    for (let unit in TIMEUNITS)  {
      if (remainingSeconds >= TIMEUNITS[unit]) {
        const totalUnits = Math.floor(remainingSeconds / TIMEUNITS[unit]);
        remainingSeconds = remainingSeconds % TIMEUNITS[unit];
        humanReadableTime.push(totalUnits === 1 ? `1 ${unit}`: `${totalUnits} ${unit}s`);
      }
    };
    // seconds
    if (remainingSeconds > 0) 
    {
        humanReadableTime.push(remainingSeconds === 1 ? "1 second" : `${remainingSeconds} seconds`);
    }

    if(humanReadableTime.length > 1) {
        const lastElement = humanReadableTime.pop();
        return humanReadableTime.join(", ") + ` and ${lastElement}`;
    } else {
        return humanReadableTime[0];
    }
}

module.exports = { humantime };

