import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import AddItem from './components/AddItem';


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
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount +=newProductList[index].price
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
    
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    if (newProductList[index].quantity > 0){
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price
    }  
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  }

  const resetQuantity = () =>{
    let newProductList = [...productList]

    newProductList.map ((product) => {
      product.quantity = 0
    });

    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].quantity * newProductList[index]. price

    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name,price) => {
    let newProductList = [...productList]
    newProductList.push({
      price: price,
      name:name,
      quantity:0
    });
   setProductList(newProductList);
    
  }


  return (
    <div>
    <NavBar/> 
    <main className='container mt-5'>
    <AddItem addItem ={addItem}/>
    <ProductList 
    productList ={productList} 
    incrementQuantity={incrementQuantity} 
    decrementQuantity ={decrementQuantity}
    removeItem ={removeItem}/>
    <Footer totalAmount ={totalAmount} resetQuantity = {resetQuantity}/>
    </main>
    
  
    </div>
  );
}

export default App;
