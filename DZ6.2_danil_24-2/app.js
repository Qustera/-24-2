const cards = document.querySelectorAll('.card');

getData = () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                const obj = products[i];
                card.querySelector('img').src = obj.img;
                card.querySelector('.title').textContent = obj.title;
                card.querySelector('.sale').textContent = obj.sale;
                card.querySelector('.before__price').textContent = obj.before;
                card.querySelector('.description').textContent = obj.description;
            }
        })
        .catch(error => console.error(error));
}

getData()
