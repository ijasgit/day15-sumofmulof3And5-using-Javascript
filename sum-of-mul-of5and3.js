var num = 10,sum=0;
for (i = 0; i <= num; i++) {
    if (i % 3 == 0) {
        sum = sum + i;
      
    }
    else if (i % 5 == 0) {
        sum = sum + num;
     
    }
}
console.log(sum);