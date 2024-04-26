import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Impressum from "./components/Impressum";
import IProduct from "./models/interface";
import Cards from "./components/Cards";



function App() {
    const productsPrefill:IProduct[]  =
        [{id:1,category:"Waren", title:"Jacket", subtitle:"Gut gefüttert",
            details:"Hat schon mein Vater getragen!",
            image:"../assets/jacket.jpg", likes: 0},
            {id:2, category:"Waren", title:"Couch", subtitle:"gut eingelegen", details:"" +
                    "Mit dieser Couch ist schon meine Tante gut gelegen",
                image:"../assets/couch.jpg", likes: 0},
            {id:3,category:"Personen", title:"Nachhilfe", subtitle:"React native",
                details:"Diese Nachhilfe kostet 20€ die Stunde",
                image:"../assets/mosh.jpg", likes: 0},
            {id:4, category:"Waren",  title:"Sessel", subtitle:"ganz in weiss",
                details:"War im Wirtshaus zur goldenen Sichel im Einsatz",
                image:"../assets/chair.jpg", likes: 5},
            {id:5,category:"Waren", title:"Jacket", subtitle:"gut gefüttert",
                details:"Hat schon mein Vater getragen",
                image:"../assets/jacket.jpg", likes: 0},
            {id:6, category:"Waren", title:"Couch", subtitle:"gut eingelegen", details:"" + "Mit dieser Couch ist schon meine Tante gut gelegen",
                image:"../assets/couch.jpg", likes: 0},
            {id:7,category:"Personen", title:"Freudschaft", subtitle:"Spielpartner gesucht",
                details:"Bin super in Fortnite ",
                image:"../assets/jakob.jpg", likes: 0},
            {id:8, category:"Waren",  title:"Sessel", subtitle:"ganz in weiss",
                details:"War im Wirtshaus zur goldenen Sichel im Einsatz",
                image:"../assets/chair.jpg", likes: 0}];
    const [products, setProducts] = useState(productsPrefill);

    const handleLike = (id:number) => {
      console.log(`Like für id ${id}`);
      let changedProducts = products.map((value)=> {
          if (value.id === id) {
              value.likes++;
              console.log(`Like geändert für id ${id}`);
          }
          return value;
      })
      setProducts(changedProducts);
    };
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="impressum" element={<Impressum/>} />
              <Route path="cards" element={<Cards items={products} onLike={handleLike}/>} />
              <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
  );
}

export default App;
