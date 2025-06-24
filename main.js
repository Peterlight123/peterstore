let cartCount = 0;

function addToCart(product) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  showToast(`${product} added to cart!`);
}

function buyNow(productName, price) {
  const phone = '2348108821809';
  const msg = `Hello! I'm interested in *${productName}* for ₦${price.toLocaleString()}. Is it available?`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWhatsApp() {
  const phone = '2348108821809';
  const msg = 'Hi! I’m interested in your website services.';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
