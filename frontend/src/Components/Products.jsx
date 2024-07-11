import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../redux/slice/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddProduct = async () => {
    const newProduct = { name: "New Product", price: 0 }; // Example new product
    await dispatch(addProduct(newProduct));
  };

  const handleUpdateProduct = async (productId) => {
    const updatedProduct = {
      id: productId,
      name: "Updated Product",
      price: 10,
    }; // Example updated product
    await dispatch(updateProduct(updatedProduct));
  };

  const handleDeleteProduct = async (productId) => {
    await dispatch(deleteProduct(productId));
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {products?.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleUpdateProduct(product.id)}>
                Update
              </button>
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;
