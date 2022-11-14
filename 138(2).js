let arr = [[1, 2], 
[3, 4], 
[5, 6]
];
let s=0;
for(let i=0; i<2;i++){
    for(let j=0;j<3;j++){
        s = s + arr[j][i]
    }
}
console.log(s);