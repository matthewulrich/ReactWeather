function addPromise (a, b) {
	return new Promise (function (resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve (a + b);
		} else {
			reject('These are both not numbers');
		}
	});
}

addPromise(3, 4).then(function (sum) {
	console.log('promise success', sum);
}, function (err) {
	console.log('promise error', err);
});

addPromise(6, 'banana').then(function (sum) {
	console.log('This should not appear');
}, function (err) {
	console.log('This should appear', err);
});