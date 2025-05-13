async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data)
  showProduct(data)
}

fetchProduct()

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidente:boolean;
}

function showProduct(data: Product){
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `
}