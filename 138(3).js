let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let s=0;
for(let n=0;n<2;n++)
for(let i=0; i<2;i++){
    for(let j=0;j<2;j++){
        s = s + arr[n][j][i]
    }
}
console.log(s);