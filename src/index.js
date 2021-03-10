import "./style/style.css";
console.log('test')
const app = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};

const createCardAvocado = (data) => {
  const cards = [];
  console.log(data.data);
  data.data.forEach((avocado) => {
    const container = document.createElement("div");
    container.className =
      "m-3 pb-3 text-center max-w-1/4 inline-block bg-gray-200 rounded-xl";

    const img = document.createElement("img");
    img.src = `https://platzi-avo.vercel.app${avocado.image}`;
    img.className = "m-auto pb-3";

    const title = document.createElement("h2");
    title.textContent = avocado.name;

    const price = document.createElement("p");
    price.textContent = formatPrice(avocado.price);

    container.append(img, title, price);
    cards.push(container);
  });
  app.append(...cards);
};

const getData = async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    createCardAvocado(data);
  } catch (err) {
    console.error(err.message);
  }
};

getData("https://platzi-avo.vercel.app/api/avo");
