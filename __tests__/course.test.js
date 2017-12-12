
const course = require('../lib/course');

test('Find the correct wind vector for heading 60 and wind of 180', () => {
    expect(course.windvector(60, 0)).toBe(120);
});

test('Find the correct wind vector for heading 30 and wind of 330', () => {
    expect(course.windvector(30, 150)).toBe(60);
});

test('Find the correct wind vector for heading 150 and wind of 240', () => {
    expect(course.windvector(150, 240)).toBe(90);
});

test('Find the correct wind vector for heading 300 and wind of 30', () => {
    expect(course.windvector(300, 30)).toBe(90);
});

test('Find the correct wind vector for heading 330 and wind of 30', () => {
    expect(course.windvector(330, 210)).toBe(60);
});
