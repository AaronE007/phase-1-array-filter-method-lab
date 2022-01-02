function findMatching (drivers, string) {
    
    const answer = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase());
    
    return answer;
}

function fuzzyMatch (drivers, string) {
    
    const answer = drivers.filter(driversName => driversName.startsWith(string));

    return answer;
}

function matchName (drivers, string) {

    const answer = drivers.filter(drivers => drivers === string.length);

    return answer;
}