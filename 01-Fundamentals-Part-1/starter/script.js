let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log('Bill was ${bill}, tip was ${tip}, total value was ${bill+tip}');