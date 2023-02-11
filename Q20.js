
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if(shoppingCart.filter(items => items != "Meat")){
    shoppingCart.push('Meat')
}


if(shoppingCart.filter(items => items != "Suger")){
    shoppingCart.push('Suger')
}


if (shoppingCart.includes('Honey')) {
    const index = shoppingCart.indexOf('Honey');
    shoppingCart.splice(index, 1);
  }

  
  const index = shoppingCart.indexOf('Tea');
  if (index !== -1) {
    shoppingCart[index] = 'Green Tea';
  }
  console.log(shoppingCart);