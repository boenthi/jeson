import { CardComponent } from "../component/Cardcomponent.js";
let renderArea = document.querySelector("#renderArea");
const base_url = "http://127.0.0.1:5500/data/products.json";

fetch(base_url)
  .then((x) => x.json())
  .then((data) => {
    let products = data.products;
    console.log(products);
    products.map((product) => (renderArea.innerHTML += CardComponent(product)));
  });