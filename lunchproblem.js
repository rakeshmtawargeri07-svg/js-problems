function whoWillPay(names) {
   
    const randomNumber = Math.random();
    const randomIndex = Math.floor(randomNumber * names.length);

    const selectedPerson = names[randomIndex];

    return `${selectedPerson} is going to buy the meal today!`;
}

const friends = ["Alice", "Bob", "Charlie", "David"];
console.log(whoWillPay(friends));
