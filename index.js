function cardCreator(){
    for (let i = 0; i < 8; i++) {
        const parentElement = document.getElementById('card-container');
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        parentElement.appendChild(cardElement);   
    }
}






// Call functions below, in order.
cardCreator();