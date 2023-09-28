const DecreaseButton = (props) =>{
  
    const removeFromCart = (id) => {
        const newCart = props.cart.filter((item) => {
          return item.id !== id;
        });
        props.setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(props.cart));
      };

    const decreaseAmount = (id) => {
        const cartItem = props.cart.find((item) => {
          return item.id === id;
        });
        if (cartItem) {
          const newCart = props.cart.map((item) => {
            if (item.id === id) {
              return { ...item, amount: cartItem.amount - 1 };
            } else {
              return item;
            }
          });
          props.setCart(newCart);
          localStorage.setItem('cart', JSON.stringify(props.cart));
        }
    
        if (cartItem.amount < 2) {
          removeFromCart(id);
        }
      };
    return(
        <button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={() => decreaseAmount(props.item.id)}>-</button>
    )
}

export default DecreaseButton