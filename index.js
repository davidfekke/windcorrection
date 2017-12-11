
function reverseCourse(degrees) {
    if (degrees > 180) {
        return degrees - 180;
    } else {
        return 180 + degrees;
    }
}

console.log(223, reverseCourse(223));
console.log(90, reverseCourse(90));
console.log(30, reverseCourse(30));
console.log(360, reverseCourse(360));