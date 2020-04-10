const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent

function isEquivalent(o1, o2) {
	props1 = Object.getOwnPropertyNames(o1);
	props2 = Object.getOwnPropertyNames(o2);
	if (props1.length !== props2.length) {
		return false;
	}
	for (let i = 0; i < props1.length; i++) {
		if (props1[i] !== props2[i] || o1[props1[i]] !== o2[props2[i]]) {
			return false
		}
	}
	return true
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false