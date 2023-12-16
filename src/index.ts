
const tipInput = document.getElementById("tip") as HTMLInputElement;
const sumInput = document.getElementById("sum") as HTMLInputElement;
const numberOfFriendsInput = document.getElementById("numberOfFriends") as HTMLInputElement;
let numberOfFriends :number; 
let total :number;
let sumDivided :number;


function calculateTip(sum: number, tip: number): number {
    const calculatedTip: number = sum * tip  ;
    total = calculatedTip + sum;
    return total;
}

/* console.log(calculateTip(100,10)); */

document.getElementById('calculateButton').addEventListener('click', function() {
    divideTotal(total, numberOfFriends );
    console.log(divideTotal(total, numberOfFriends));
    showDividedSum(sumDivided);

    
    
});

function divideTotal(total :number, numberOfFriends :number) :number {
const tip: number = parseFloat(tipInput.value);
const sum: number = parseFloat(sumInput.value);
numberOfFriends = parseFloat(numberOfFriendsInput.value);
sumDivided = calculateTip(sum,tip) / numberOfFriends;
return sumDivided
}

function showDividedSum(result:number) {
  const friendSum = document.getElementById("friendSum");
  friendSum.innerText = `Varje person ska betala : ${result} `;
  document.getElementById('showSum').classList.toggle('hide');
  document.getElementById('inputForm').classList.toggle('hide');
}



