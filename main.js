function addToCart(item, price, qtyId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const quantity = parseInt(document.getElementById(qtyId).value);

  let found = cart.find(c => c.item === item);

  if (found) {
    found.quantity = (found.quantity || 1) + quantity;
  } else {
    cart.push({ item, price, quantity: quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item} を ${quantity}個 カートに追加しました！`);
}
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) cartCountElement.textContent = count;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
