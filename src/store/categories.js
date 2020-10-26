let initialState = {
  categories: [
    { name: 'mobiles', displayName: 'Mobiles' },
    { name: 'food', displayName: 'Food' },
    { name: 'jewelery', displayName: 'Jewelery' },
  ],
  products: [
    { name: 'IPHONE 12 PRO MAX', category: 'mobiles', price: 1000.00, inStock: 10 , url: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg' },
    { name: 'SAMSUNG NOTE 20 ULTRA', category: 'mobiles', price: 800.00, inStock: 3, url: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-ultra-1.jpg' },
    { name: 'Trilogy Ring', category: 'jewelery', price: 100.00, inStock: 25, url: 'https://cdn.shopify.com/s/files/1/0116/4592/products/kelcipotter_trilogyring-1_large.jpg?v=1601075914' },
    { name: 'Compass Pinky Ring', category: 'jewelery', price: 150.00, inStock: 10, url: 'https://cdn.shopify.com/s/files/1/0116/4592/products/kelcipotter_compasspinkyring_3_large.jpg?v=1557938721' },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, url: 'https://cdn.vox-cdn.com/thumbor/1lkbiwsmSbovu-HAyjWeZTcGQo8=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg' },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, url: 'https://www.thesilverlife.com/wp-content/uploads/2019/05/bowl-full-of-eggs.jpg' },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, url: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/master/pass/milk-bread.jpg' },
  ],
  productsTo: [

  ],
  activeCategory: '',
};

// reducer : switch case
export default (state = initialState, action) => {
  let {type, payload} = action; // destructuring
  // let type = action.type
  // let payload = action.payload
    
  switch(type) {
  case 'activate':
    // let products = state.products.map(product=> {
    //   if (product.category === payload) {
    //     return { name: product.name, category: product.category, price: product.price, inStock: product.inStock };
    //   }
    //   return product;
    // });
    let activeCategory = payload;
    let products = [...state.products]
    let productsTo =[... state.products.filter(product =>{ return product.category === payload })];
    console.log(productsTo,'productsproductsproductsproducts');
    //let productsTo= products;
    let  categories = state.categories;  
    return {categories,products,productsTo, activeCategory};

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

export const reset = () => {
  return {
    type: 'RESET',
  };
};
