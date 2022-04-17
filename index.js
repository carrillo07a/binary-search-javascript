function binarySearch(list, left, right, current) {
	if (left > right) return -1;

	const position = Math.floor((left + right) / 2);
	if (list[position] == current) return { value: list[position], index: position };

	if (list[position] < current) {
		return binarySearch(list, position + 1, right, current);
	} else {
		return binarySearch(list, left, position - 1, current);
	}
}

const numberList = [...new Array(1000000).keys()];
numberList.splice(0, 1);
console.log('index: ', binarySearch(numberList, 0, numberList.length - 1, 888888));
