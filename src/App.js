import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';


function App() {

  const product = [
    {
      price:9999,
      name: "Iphone 10SMax",
      quantity : 0,
    },
    {
      price:9999,
      name: "Redmi Note 10SMax",
      quantity : 0,
    }
  ]
  
  let[productList, setProductList] = useState(product)

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity--
    setProductList(newProductList);
  }

  return (
    <div>
    <NavBar/> 
    <main className='container mt-5'>
    <ProductList 
    productList ={productList} 
    incrementQuantity={incrementQuantity} 
    decrementQuantity ={decrementQuantity}/>
    </main>
    
  
    </div>
  );
}

export default App;
