const AddToCart = (props) =>{
    const addToCart = (product, id) => {
        console.log("product", product);
        const newItem = { ...product, amount: 1 };
        console.log("newItem", newItem);
        // check if the item is already in the cart
        const cartItem = props.cart.find((item) => {
          return item.id === id;
        });
        // if cart item is already in the cart
        if (cartItem) {
          const newCart = [...props.cart].map((item) => {
            if (item.id === id) {
              return { ...item, amount: cartItem.amount + 1 };
            } else {
              return item;
            }
          });
          props.setCart(newCart);
          console.log("Cart", props.cart);
        } else {
          props.setCart([...props.cart, newItem]);
          console.log("Cart", props.cart);
        }
      };

      return(
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(props.item, props.item.id)}>Add to cart</button>
      )

}
export default AddToCart;