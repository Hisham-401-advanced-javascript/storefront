let initialState = {
    products: [
        { name: 'IPHONE 12 PRO MAX', category: 'mobiles', price: 1000.00, inStock: 10 , url: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg' },
        { name: 'SAMSUNG NOTE 20 ULTRA', category: 'mobiles', price: 800.00, inStock: 3, url: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-ultra-1.jpg' },
        { name: 'Trilogy Ring', category: 'jewelery', price: 100.00, inStock: 25, url: 'https://cdn.shopify.com/s/files/1/0116/4592/products/kelcipotter_trilogyring-1_large.jpg?v=1601075914' },
        { name: 'Compass Pinky Ring', category: 'jewelery', price: 150.00, inStock: 10, url: 'https://cdn.shopify.com/s/files/1/0116/4592/products/kelcipotter_compasspinkyring_3_large.jpg?v=1557938721' },
        { name: 'Burger', category: 'food', price: .99, inStock: 500, url: 'https://wallpapercave.com/wp/wp1987065.jpg' },
        { name: 'Pizza', category: 'food', price: 1.99, inStock: 12, url: 'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg' },
        { name: 'fettuccine', category: 'food', price: 2.39, inStock: 90, url: 'https://wallpapercave.com/wp/wp3031774.jpg' },
      ],
      productsTo: [
    
      ],
  };
    
  // reducer : switch case
  export default (state = initialState, action) => {
    let {type, payload,payload2} = action; // destructuring
    console.log(payload,payload2)
    // let type = action.type
    // let payload = action.payload
    let products;   
    let productsTo;
    switch(type) {
    case 'activate':
      // let products = state.products.map(product=> {
      //   if (product.category === payload) {
      //     return { name: product.name, category: product.category, price: product.price, inStock: product.inStock };
      //   }
      //   return product;
      // });
      products = [...state.products];
      productsTo =[...state.products.filter(product =>{ return product.category === payload; })];
      console.log(productsTo,'productsproductsproductsproducts');
      //let productsTo= products;
      return {products,productsTo};
    case 'count':
      products = state.products.map(product=> {
        if (product.name === payload) {
          return { name: product.name,category: product.category,price: product.price, inStock: product.inStock-1,description:product.description, url: product.url};
        }
        return product;
      });
      products = [...products];
      productsTo =[...products.filter(product =>{ return product.category === payload2; })];
      console.log(productsTo,'productsproductsproductsproducts');
      return {products,productsTo};
    default:
      return state;
    }
  };
    
  // Actions function
  export const showCategory = (name) => {
    return {
      type: 'activate',
      payload: name,
    };
  };
  
  export const changeCount = (name,activeCategory) => {
    return {
      type: 'count',
      payload: name,
      payload2: activeCategory,
    };
  };
  
    