let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let s=0;
for (let subArr of arr) {
	for (let elem of subArr) {
	    for(let v of elem)
		s=s +v;
	}
}
console.log(s);