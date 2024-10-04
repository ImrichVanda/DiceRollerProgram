function rollDice(){
    const numberOfDice= document.getElementById("numbOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages= document.getElementById("diceImages");
    const values= [];
    const images= [];

    for (let i=0; i<numberOfDice; i++){
        const value= Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`) //alt= if the pics are not showing alternative value
    }
    diceResult.textContent= `dice: ${values.join(', ')}`;
   
    diceImages.innerHTML = images.join(' ');
}