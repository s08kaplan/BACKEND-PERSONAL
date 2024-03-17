import React from "react";
import useProducts from "../custom-hooks/useProducts";
import { useEffect } from "react";
import { useProductContext } from "../context/ProductsProvider";

const Products = () => {
  const { loading, products } = useProductContext();

  return (
    <section>
      <main>
        {loading ? (
          <div> Loading...</div>
        ) : (
          <div>
           { products.map(product => (
            <div key={product._id}>
             <h1>{product.title}</h1>
           <img src={product.image} alt={product.title} />   
            </div>
           
            ))}
          </div>
        )}
      </main>
    </section>
  );
};

export default Products;
