// Example service for product-related API calls

const API_URL = 'http://localhost:8001/api/v1'; // Replace with your actual API URL

const productService = {
  async getProducts() {
    const response = await fetch(`${API_URL}/get-product`);
    if (!response.ok) {
      throw new Error('Failed to fetch products.');
    }
    return response.json();
  },

  async addProduct(newProduct) {
    const response = await fetch(`${API_URL}/create-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error('Failed to add product.');
    }
    return response.json();
  },

  async updateProduct(updatedProduct) {
    const response = await fetch(`${API_URL}/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) {
      throw new Error('Failed to update product.');
    }
    return response.json();
  },

  async deleteProduct(productId) {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product.');
    }
  },
};

export default productService;