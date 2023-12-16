const tipInput = document.getElementById("tip");
const sumInput = document.getElementById("sum");
const numberOfFriendsInput = document.getElementById("numberOfFriends");
let numberOfFriends;
let total;
let sumDivided;
function calculateTip(sum, tip) {
    const calculatedTip = sum * tip;
    total = calculatedTip + sum;
    return total;
}
/* console.log(calculateTip(100,10)); */
document.getElementById('calculateButton').addEventListener('click', function () {
    divideTotal(total, numberOfFriends);
    console.log(divideTotal(total, numberOfFriends));
    showDividedSum(sumDivided);
});
function divideTotal(total, numberOfFriends) {
    const tip = parseFloat(tipInput.value);
    const sum = parseFloat(sumInput.value);
    numberOfFriends = parseFloat(numberOfFriendsInput.value);
    sumDivided = calculateTip(sum, tip) / numberOfFriends;
    return sumDivided;
}
function showDividedSum(result) {
    const friendSum = document.getElementById("friendSum");
    friendSum.innerText = `Varje person ska betala : ${result} `;
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
}
