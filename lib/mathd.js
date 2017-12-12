// Taken from ideas from StackOverflow
// https://stackoverflow.com/a/34436551/97313

/*
    mathd
    This module to calculate trigonomic functions for degrees instead of radians
*/

function toRadians(degree) {
    return degree * (Math.PI / 180);
}

/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
function toDegree(radians) {
    return radians * (180 / Math.PI);
}

/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 5)
 * @returns {number}
 */
function roundNumber(number, decimals) {
    decimals = decimals || 5;
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
//the object
const MathD = {
    sin: function(number){
        return roundNumber(Math.sin(toRadians(number)));
    },
    cos: function(number){
        return roundNumber(Math.cos(toRadians(number)));
    },
    tan: function(number){
        return roundNumber(Math.tan(toRadians(number)));
    },
    asin: function(number){
        return roundNumber(toDegree(Math.asin(number)));
    },
    acos: function(number){
       return roundNumber(toDegree(Math.acos(number)));
   },
   atan: function(number){
       return roundNumber(toDegree(Math.atan(number)));
   }
};

module.exports = MathD;
