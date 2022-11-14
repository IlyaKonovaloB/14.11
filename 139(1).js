let arr = [[1, 2, 3], [4, 5], [6]];
let s=0;
for (let subArr of arr) {
	for (let elem of subArr) {
		s=s +elem
	}
}
console.log(s);