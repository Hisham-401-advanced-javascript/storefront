let initialState = {
  categories: [
    { name: 'mobiles', displayName: 'Mobiles' },
    { name: 'food', displayName: 'Food' },
    { name: 'jewelery', displayName: 'Jewelery' },
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
    let  categories = state.categories;  
    return {categories,activeCategory};

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

// export const reset = () => {
//   return {
//     type: 'RESET',
//   };
// };
