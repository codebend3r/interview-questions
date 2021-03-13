// QUESTIOn
// return both arrays orderede sequentially without duplicates
// log the content of these two promises at the same time
const a = Promise.resolve([1, 3, 2]);
const b = Promise.resolve([7, 9, 2]);

// ANSWER

Promise.all([a, b]).then((data) => data.flat().sort());
