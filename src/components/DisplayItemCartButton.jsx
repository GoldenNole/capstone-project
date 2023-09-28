const DisplayItemCartButton = (props) => {
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = props.cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...props.cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      props.setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(props.cart));
      alert("Item added to cart!");
    } else {
      props.setCart([...props.cart, newItem]);
      localStorage.setItem('cart', JSON.stringify(props.cart));
      alert("Item added to cart!");
    }
  };

  return (
    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={() => addToCart(props.item, props.item.id)}>Add to cart</button>
  )

}
export default DisplayItemCartButton;