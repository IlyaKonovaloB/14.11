let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let s=0,v=0;
for (let i = 0; i < 2; i++) {
	for (let j = 0; j < 2; j++) {
	    for(let n=0;n<2;n++){
	        v=v+arr[n][i][j]
	    }
		
	}
}
let arr1 = [[1, 2, 3], [4, 5], [6]];
for (let i = 0; i < arr1.length; i++) {
	for (let j = 0; j < arr1[i].length; j++) {
		s=s+arr1[i][j];
	}
}
console.log(s);
console.log(v);