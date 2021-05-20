import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Iphone 12",
      src: [
        "https://cdn.verk.net/960/images/81/2_662935-1530x3093.jpeg",
        "https://cdn.verk.net/960/images/96/2_662935-2273x3093.jpeg",
        "https://cdn.verk.net/960/images/11/2_662935-3544x3544.jpeg",
        "https://cdn.verk.net/960/images/26/2_662935-3545x3544.jpeg",
        "https://cdn.verk.net/960/images/1/2_662935-4000x4000.jpeg",
      ],
      description: "Apple iPhone 12 64GB phone, black, MGJ53",
      content: [
        "6.1-inch Super Retina XDR ‑screen",
        "Ceramic Shield",
        "5G",
        "A14 Bionic chip",
        "Supports MagSafe accessories",
      ],
      price: 798.9,
      count: 33,
      color: "Black",
    },
  ]);
  const [index, setIndex] = useState(0)
  const myRef = useRef();
  const handleEvent=(index)=>{
    setIndex(index)
    const images = myRef.current.children
    for(let i=0; i< images.length; i++){
      images[i].className = images[i].className.replace('active', '')
    }
    images[index].className = 'active'
  }

  useEffect( ()=> {
    myRef.current.children[index].className='active'
  })
  
  return (
    <div className="app">
      {products.map((product) => (
        <div className="details" key={product.id}>
          <div className="big-img">
            <img src={product.src[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{product.title}</h2>
              <span>€ {product.price}</span>
            </div>
            <div>Avaliable in color: {product.color}</div>
            <p>{product.description}</p>
            <ul>
              {product.content.map((des,index) => (
                <li key={index}>{des}</li>
              ))}
            </ul>
            <div className='thumb' ref={myRef}> 
                {
                  product.src.map((img,index)=>(
                    <img key={index} src={img} alt='' 
                    onClick={()=>handleEvent(index)}
                    />
                  ))
                }
             </div>
             <button className='cart'>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
