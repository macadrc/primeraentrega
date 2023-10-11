class ProductManager {
    constructor() {
      this.products = [];
    }
  
    // Agregar un producto al arreglo de productos
    addProduct(title, description, price, thumbnail, code, stock, productType, quantity) {
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        productType,
        quantity,
        id: this.generateProductId(),
      };
      this.products.push(product);
    }
  
   
    getProducts() {
      return this.products;
    }
  

    getProductById(id) {
      return this.products.find(product => product.id === id);
    }
  
   
    generateProductId() {
      return this.products.length + 1;
    }
  }
  

  const productManager = new ProductManager();
  
  // Agregar productos de verdulería
  productManager.addProduct("Manzanas", "Manzanas Verdes", 2.99, "apples.jpg", "A1", 100, "Fruta", "10 kg");
  productManager.addProduct("Manzanas Rojas", "Manzanas Rojas", 2.99, "apples.jpg", "A1", 100, "Fruta", "10 kg");
  productManager.addProduct("Bananas", "Bananas", 1.99, "bananas.jpg", "B1", 80, "Fruta", "5 kg");
  productManager.addProduct("Limones", "Limones", 1.50, "limones.jpg", "L1", 80, "Fruta", "2 kg");
  productManager.addProduct("Zanahorias", "Zanahorias", 1.49, "carrots.jpg", "Z1", 120, "Verdura", "8 kg");
  
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  
  const productIdToFind = 2;
  const foundProduct = productManager.getProductById(productIdToFind);
  console.log("Producto con ID", productIdToFind, ":", foundProduct);
  