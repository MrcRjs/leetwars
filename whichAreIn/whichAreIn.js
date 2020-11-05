const bruteForceSubstring = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i += 1) {
		for (let j = 0; j < arr2.length; j += 1) {
			if (arr2[j].includes(arr1[i])) {
				result.push(arr1[i]);
				break;
			}
		}
	}
	return result.sort();
};


/************************************/
/*          TEST SUITE              */
/************************************/

const tests = [
	{
		arr1: ["ARP"],
		arr2: ["SHARPS", "ARMSTRONG"],
		expected: ["ARP"]
	},
	{
		arr1: ["ARP", "ARM"],
		arr2: ["SHARPS", "ARMSTRONG"],
		expected: ["ARP", "ARM"]
	},
	{
		arr1: ["ARP", "ARM", "NOTSUBS"],
		arr2: ["SHARPS", "ARMSTRONG"],
		expected: ["ARP", "ARM"]
	},
	{
		arr1: ["ARP", "ARM", "NOTSUBS"],
		arr2: ["SHARPS", "ARPA", "ARMANDO", "ARMSTRONG", "MARMOTA"],
		expected: ["ARP", "ARM"]
	},
	{
		arr1: ["MAR", "ARP"],
		arr2: ["ARPA", "MARMOTA"],
		expected: ["ARP", "MAR"]
	},
]

for (const t of tests) {
	const r = bruteForceSubstring(t.arr1, t.arr2);
	console.log(`Expected ${JSON.stringify(t.expected)} got ${JSON.stringify(r)} `)
}

