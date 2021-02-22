import './style/style.css';

const app = document.querySelector('#app');

const createCardAvocado = data => {
  const cards = [];
  console.log(data.data)
  data.data.forEach(avocado => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.src = `https://platzi-avo.vercel.app${avocado.image}`;
    const title = document.createElement('h2');
    title.textContent = avocado.name;
    const price = document.createElement('p')
    price.textContent = avocado.price;
    container.append(img, title, price);
    cards.push(container);
  });
  app.append(...cards)
};

const getData = async URL => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    createCardAvocado(data)
  } catch (err) {
    console.error(err.message)
  }
};

getData('https://platzi-avo.vercel.app/api/avo')

if (module.hot) {
  module.hot.accept()
};