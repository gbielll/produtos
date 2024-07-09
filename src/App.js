import ProductRegister from "./components/ProductRegister";
import ProductList from "./components/ProductList";
import CategoryRegister from "./components/CategoryRegister";
import CategoryList from "./components/CategoryList";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(1);

  function seletorDeComponente() {
    if (visible === 1) {
      return <ProductRegister text={"Componente de cadastro de produtos"}/>; //use o Return quando for chamar 
    } else if (visible === 2) {
      return <ProductList text={"Componente de listagem de produtos"} />;    //use o Return quando for chamar 
    } else if (visible === 3) {
      return <CategoryRegister text={"Componente de cadastro de categorias"} />;  //use o Return quando for chamar 
    } else {
      return <CategoryList text={"Componente de lisgarem de categorias"} />;  //use o Return quando for chamar 
    }
  }

  return (
    <div>
      <button onClick={() => setVisible(1)}>Cadastro de produtos</button>
      <button onClick={() => setVisible(2)}>Listagem de produtos</button>
      <button onClick={() => setVisible(3)}>Cadastro de categorias</button>
      <button onClick={() => setVisible(4)}>Listagem de categorias</button>
      {seletorDeComponente()}
    </div>
  );
}

export default App;
