
const mathd = require('./mathd');

function reverseCourse(degrees) {
    if (degrees > 180) {
        return degrees - 180;
    } else {
        return 180 + degrees;
    }
} 

function truecourse(heading, speed, wd, ws) {
    const twd = reverseCourse(wd);
    // The Law of Cosines says:	csquare = asquare + bsquare − 2*a*b *cos(C)
    const csquare = Math.pow(speed, 2) * Math.pow(ws, 2) * 2 * speed * ws * mathd.cos(windvector(heading, wd));
    return Math.sqrt(csquare); 
}

function windvector(heading, wd) {
    const wv = reverseCourse(wd);
    let result = 0;
    if (heading > wv) {
        result = heading - wv;
        if (result > 180) {
            result = (wv + 360) - heading;
        }
    } else {
        result = wv - heading;
        if (result > 180) {
            result = (heading + 360) - wv;
        }
    }
    return result;
}

module.exports.truecourse = truecourse;
module.exports.windvector = windvector;
