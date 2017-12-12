
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
    const csquare = Math.pow(speed, 2) * Math.pow(ws, 2) * 2 * speed * ws * mathd.cos(twd-heading);
    return Math.sqrt(csquare); 
}

module.exports.truecourse = truecourse;