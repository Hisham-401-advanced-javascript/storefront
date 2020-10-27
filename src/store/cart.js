let initialState = {
    cartProducts: [
    ],
  };
      
  
  export default (state = initialState, action) => {
    let {type, payload} = action; // destructuring
    
    //   let cartProducts;  
    let cartProducts;
    switch(type) {
    case 'addToCart':
      cartProducts = state.cartProducts.push(payload);
      cartProducts = [...state.cartProducts];
      
      return {cartProducts};
      //   case 'removeFromCart':
      //     cartProducts = state.cartProducts.map(product=> {
      //       if (product.name === payload) {
      //         return { name: product.name,category: product.category,price: product.price, inStock: product.inStock-1,description:product.description, url: product.url};
      //       }
      //       return product;
      //     });
      //     cartProducts = [...cartProducts];
      //     let productsTo =[... state.cartProducts.filter(product =>{ return product.category === payload; })];
      //     return {cartProducts,productsTo};
    //   let newState = {...state};
    //       let products = newState.products.filter(product =>{
    //           if(payload !== product.id ){

    //               return product;
    //           }                    
    //     })


    //     return {
    //         products:products,
    //         count : state.count - 1
    //     }
    default:
      return state;
    }
  };
      
  // Actions function
  export const addToCart = (name) => {
    return {
      type: 'addToCart',
      payload: name,
    };
  };
  export const removeFromCart = (name) => {
    return {
      type: 'removeFromCart',
      payload: name,
    };
  };
  
      