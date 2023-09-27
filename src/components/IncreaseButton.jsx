const IncreaseButton = (props) =>{
    const increaseAmount = (id) => {
        const cartItem = props.cart.find((item) => {
          return item.id === id;
        });
        if (cartItem) {
          const newCart = props.cart.map((item) => {
            if (item.id === id) {
              return { ...item, amount: cartItem.amount + 1 };
            } else {
              return item;
            }
          });
          props.setCart(newCart);
          localStorage.setItem('cart', JSON.stringify(props.cart));
        }
      };
    return(
        <button className="btn" onClick={() => increaseAmount(props.item.id)}>+</button>
    )
}

export default IncreaseButton