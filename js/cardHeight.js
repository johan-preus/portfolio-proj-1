const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')
const card5 = document.querySelector('#card5')
const card6 = document.querySelector('#card6')
const card7 = document.querySelector('#card7')
const card8 = document.querySelector('#card8')
const card9 = document.querySelector('#card9')
const card10 = document.querySelector('#card10')
const card11 = document.querySelector('#card11')
const card12 = document.querySelector('#card12')

const arr = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];
const heightArr = [];

for(i = 0; i < arr.length; i++){
    const height = arr[i].offsetHeight;
    // console.log(height)
    heightArr.push(height);
}

const max = Math.max(...heightArr);
console.log(max)
for (let card of arr){
    card.style.height = `${max}px`
}
console.log(heightArr)