/* ==========================================
   ShopEase – Shared JavaScript Module
   Common data, utilities, cart & header/footer
   ========================================== */

// ============ MOCK DATA ============
const categories = [
  { id: 1, name: 'Electronics', icon: '📱', count: 45 },
  { id: 2, name: 'Fashion', icon: '👕', count: 120 },
  { id: 3, name: 'Home & Living', icon: '🏠', count: 78 },
  { id: 4, name: 'Beauty', icon: '💄', count: 56 },
  { id: 5, name: 'Sports', icon: '⚽', count: 34 },
  { id: 6, name: 'Books', icon: '📚', count: 89 },
  { id: 7, name: 'Toys', icon: '🧸', count: 42 },
  { id: 8, name: 'Grocery', icon: '🛒', count: 150 }
];

const banners = [
  { title: 'Summer Sale', subtitle: 'Discover amazing deals on top electronics. Limited time offer — shop your favorites now!', badge: '50% OFF', gradient: 'linear-gradient(135deg, #FF6B35, #E94560)' },
  { title: 'New Arrivals', subtitle: 'Fresh fashion collection for 2025. Trendy styles and premium quality at unbeatable prices.', badge: 'NEW COLLECTION', gradient: 'linear-gradient(135deg, #1A1A2E, #0F3460)' },
  { title: 'Flash Deals', subtitle: 'Hurry! Limited time offers on home decor and lifestyle products. Up to 70% off.', badge: '70% OFF', gradient: 'linear-gradient(135deg, #28A745, #17A2B8)' }
];

const productEmojis = {
  headphones: '🎧', smartwatch: '⌚', speaker: '🔊', laptop_stand: '💻',
  charger: '🔋', usb_hub: '🔌', denim_jacket: '🧥', sneakers: '👟',
  tshirt: '👕', wallet: '👛', sunglasses: '🕶️', backpack: '🎒',
  candles: '🕯️', pillows: '🛋️', plant_pot: '🪴', wall_art: '🖼️',
  skincare: '🧴', perfume: '🌸', hair_kit: '💇', yoga_mat: '🧘',
  fitness_band: '💪', resistance_bands: '🏋️', books_novel: '📖',
  books_selfhelp: '📘', blocks: '🧱', rc_car: '🏎️', tea: '🍵', snack_box: '🥜'
};

const products = [
  { id:1, name:'Wireless Headphones Pro', description:'Premium noise-cancelling wireless headphones with 40-hour battery life. Features active noise cancellation, transparency mode, and custom EQ settings. Premium over-ear design with memory foam cushions for all-day comfort.', price:2499, originalPrice:4999, rating:4.5, reviewCount:234, categoryId:1, image:'headphones', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:2, name:'Smart Watch Ultra', description:'Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Water resistant to 50m with AMOLED display. Track workouts, heart rate, and sleep patterns.', price:3999, originalPrice:7999, rating:4.3, reviewCount:189, categoryId:1, image:'smartwatch', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:3, name:'Bluetooth Speaker', description:'Portable waterproof speaker with 360° surround sound and 20-hour battery life. IPX7 rated for outdoor adventures. Deep bass and crystal-clear treble.', price:1299, originalPrice:2599, rating:4.4, reviewCount:312, categoryId:1, image:'speaker', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:4, name:'Laptop Stand Ergonomic', description:'Adjustable aluminum laptop stand with ventilation. Compatible with 10-17 inch laptops. Improves posture and cooling performance.', price:899, originalPrice:1799, rating:4.6, reviewCount:156, categoryId:1, image:'laptop_stand', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:5, name:'Wireless Charger Pad', description:'15W fast wireless charging pad with LED indicator. Compatible with all Qi-enabled devices. Slim, portable, and includes USB-C cable.', price:599, originalPrice:1199, rating:4.2, reviewCount:445, categoryId:1, image:'charger', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:6, name:'USB-C Hub Multiport', description:'7-in-1 USB-C hub with HDMI 4K, USB 3.0 ports, SD card reader, and 100W PD charging. Essential for modern laptops and tablets.', price:1499, originalPrice:2999, rating:4.7, reviewCount:278, categoryId:1, image:'usb_hub', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:7, name:'Classic Denim Jacket', description:'Premium quality denim jacket with vintage wash. Features button closure, chest pockets, and adjustable waist tabs. Comfortable cotton blend fabric.', price:1899, originalPrice:3799, rating:4.4, reviewCount:167, categoryId:2, image:'denim_jacket', discount:50, inStock:true, sizes:['S','M','L','XL'] },
  { id:8, name:'Running Sneakers', description:'Lightweight responsive running shoes with breathable mesh upper and cushioned midsole for maximum comfort on any terrain.', price:2299, originalPrice:4599, rating:4.6, reviewCount:523, categoryId:2, image:'sneakers', discount:50, inStock:true, sizes:['UK 6','UK 7','UK 8','UK 9','UK 10'] },
  { id:9, name:'Casual Cotton T-Shirt', description:'100% organic cotton t-shirt with premium finish. Pre-shrunk fabric with reinforced stitching. Perfect everyday wear.', price:499, originalPrice:999, rating:4.3, reviewCount:891, categoryId:2, image:'tshirt', discount:50, inStock:true, sizes:['S','M','L','XL','XXL'] },
  { id:10, name:'Leather Wallet', description:'Genuine leather bifold wallet with RFID protection. Multiple card slots and coin pocket. Handcrafted with premium stitching.', price:799, originalPrice:1599, rating:4.5, reviewCount:334, categoryId:2, image:'wallet', discount:50, inStock:true, sizes:['One Size'] },
  { id:11, name:'Aviator Sunglasses', description:'Classic aviator sunglasses with UV400 protection and polarized lenses. Lightweight metal frame with comfortable nose pads.', price:999, originalPrice:1999, rating:4.4, reviewCount:267, categoryId:2, image:'sunglasses', discount:50, inStock:true, sizes:['One Size'] },
  { id:12, name:'Canvas Backpack', description:'Durable canvas backpack with padded laptop compartment. Water-resistant coating with multiple organizational pockets.', price:1299, originalPrice:2599, rating:4.5, reviewCount:445, categoryId:2, image:'backpack', discount:50, inStock:true, sizes:['One Size'] },
  { id:13, name:'Scented Candle Set', description:'Set of 3 luxury scented candles. Premium soy wax with essential oils. Long burning time of 45 hours each. Elegant glass containers.', price:699, originalPrice:1399, rating:4.7, reviewCount:189, categoryId:3, image:'candles', discount:50, inStock:true, sizes:['Small','Medium','Large'] },
  { id:14, name:'Throw Pillow Set', description:'Set of 2 decorative throw pillows with premium velvet cover. Includes removable inner cushion. Machine washable.', price:899, originalPrice:1799, rating:4.3, reviewCount:223, categoryId:3, image:'pillows', discount:50, inStock:true, sizes:['16"','18"','20"'] },
  { id:15, name:'Ceramic Plant Pot', description:'Minimalist ceramic plant pot with drainage hole and bamboo saucer. Perfect for indoor plants and succulents.', price:449, originalPrice:899, rating:4.5, reviewCount:156, categoryId:3, image:'plant_pot', discount:50, inStock:true, sizes:['S','M','L'] },
  { id:16, name:'Wall Art Canvas', description:'Modern abstract wall art on premium canvas. Ready to hang with included hardware. 60x40cm. Adds character to any room.', price:1499, originalPrice:2999, rating:4.6, reviewCount:112, categoryId:3, image:'wall_art', discount:50, inStock:true, sizes:['40x30','60x40','80x60'] },
  { id:17, name:'Skincare Gift Set', description:'Complete skincare routine in a gift box. Includes cleanser, toner, hyaluronic serum, and moisturizer. Suitable for all skin types.', price:1899, originalPrice:3799, rating:4.8, reviewCount:345, categoryId:4, image:'skincare', discount:50, inStock:true, sizes:['Standard'] },
  { id:18, name:'Perfume Collection', description:'Designer fragrance with notes of bergamot, jasmine, and sandalwood. 100ml eau de parfum. Long-lasting scent.', price:2499, originalPrice:4999, rating:4.6, reviewCount:189, categoryId:4, image:'perfume', discount:50, inStock:true, sizes:['50ml','100ml'] },
  { id:19, name:'Hair Styling Kit', description:'Professional hair styling kit with ceramic dryer, straightener, and curling wand. Temperature control for all hair types.', price:1699, originalPrice:3399, rating:4.4, reviewCount:234, categoryId:4, image:'hair_kit', discount:50, inStock:true, sizes:['Standard'] },
  { id:20, name:'Yoga Mat Premium', description:'Non-slip eco-friendly yoga mat with carrying strap. 6mm thick for joint protection. 183x61cm. Perfect for studio or home.', price:999, originalPrice:1999, rating:4.5, reviewCount:567, categoryId:5, image:'yoga_mat', discount:50, inStock:true, sizes:['4mm','6mm','8mm'] },
  { id:21, name:'Fitness Tracker Band', description:'Advanced fitness tracker with heart rate monitor, step counter, sleep tracking, and blood oxygen sensor. 14-day battery.', price:1499, originalPrice:2999, rating:4.3, reviewCount:445, categoryId:5, image:'fitness_band', discount:50, inStock:true, sizes:['S','M','L'] },
  { id:22, name:'Resistance Band Set', description:'Set of 5 resistance bands with different strengths (5-50 lbs). Includes carry bag, door anchor, and illustrated exercise guide.', price:599, originalPrice:1199, rating:4.6, reviewCount:678, categoryId:5, image:'resistance_bands', discount:50, inStock:true, sizes:['Standard'] },
  { id:23, name:'Bestseller Novel Collection', description:'Collection of 5 bestselling novels from top authors. Paperback edition with premium printing and beautiful cover art.', price:999, originalPrice:1999, rating:4.7, reviewCount:890, categoryId:6, image:'books_novel', discount:50, inStock:true, sizes:['Paperback','Hardcover'] },
  { id:24, name:'Self-Help Book Bundle', description:'Bundle of 3 top-rated self-help books. Covers productivity, mindset shifts, and building positive habits.', price:749, originalPrice:1499, rating:4.5, reviewCount:567, categoryId:6, image:'books_selfhelp', discount:50, inStock:true, sizes:['Paperback'] },
  { id:25, name:'Building Blocks Set', description:'500-piece creative building blocks set for children 6+. Compatible with major brands. STEM learning toy.', price:1299, originalPrice:2599, rating:4.8, reviewCount:345, categoryId:7, image:'blocks', discount:50, inStock:true, sizes:['250pc','500pc','1000pc'] },
  { id:26, name:'Remote Control Car', description:'High-speed RC car with 2.4GHz remote control. Rechargeable battery with 30-min runtime. 1:16 scale. Off-road tires.', price:1899, originalPrice:3799, rating:4.4, reviewCount:234, categoryId:7, image:'rc_car', discount:50, inStock:true, sizes:['1:16','1:10'] },
  { id:27, name:'Organic Tea Collection', description:'Premium organic tea collection with 6 varieties: green, black, chamomile, mint, chai, and oolong. Individually wrapped sachets.', price:549, originalPrice:1099, rating:4.6, reviewCount:789, categoryId:8, image:'tea', discount:50, inStock:true, sizes:['50g','100g','200g'] },
  { id:28, name:'Healthy Snack Box', description:'Curated box of 12 healthy snacks including almonds, dried fruits, granola bars, and trail mix. No artificial preservatives.', price:799, originalPrice:1599, rating:4.5, reviewCount:456, categoryId:8, image:'snack_box', discount:50, inStock:true, sizes:['Standard','Family'] }
];

// ============ HELPERS ============
function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ TOAST ============
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2500);
}

// ============ CART (localStorage) ============
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('shopease_cart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('shopease_cart', JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.productId === productId);
  if (existing) existing.quantity += qty;
  else cart.push({ productId, quantity: qty });
  saveCart(cart);
  updateCartBadges();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.productId !== productId);
  saveCart(cart);
  updateCartBadges();
}

function updateQuantity(productId, qty) {
  if (qty <= 0) return removeFromCart(productId);
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) item.quantity = qty;
  saveCart(cart);
  updateCartBadges();
}

function getCartCount() { return getCart().reduce((s, i) => s + i.quantity, 0); }

function getSubtotal() {
  return getCart().reduce((s, i) => {
    const p = products.find(pr => pr.id === i.productId);
    return s + (p ? p.price * i.quantity : 0);
  }, 0);
}

function getShipping() { return getSubtotal() > 500 ? 0 : 49; }
function getDiscount() { return Math.round(getSubtotal() * 0.1); }
function getTotal() { return getSubtotal() + getShipping() - getDiscount(); }

function clearCart() {
  saveCart([]);
  updateCartBadges();
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ============ PRODUCT CARD HTML ============
function productCardHTML(p) {
  const emoji = productEmojis[p.image] || '📦';
  return `
    <div class="product-card" onclick="window.location.href='product-detail.html?id=${p.id}'">
      <div class="product-card-img">
        <span class="discount-badge">${p.discount}% OFF</span>
        ${emoji}
      </div>
      <div class="product-card-info">
        <div class="product-card-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="review-count">(${p.reviewCount})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(p.price)}</span>
          <span class="product-original-price">${formatPrice(p.originalPrice)}</span>
        </div>
      </div>
    </div>
  `;
}

// ============ SHARED HEADER HTML ============
function renderHeader(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const count = getCartCount();
  const badgeDisplay = count > 0 ? 'flex' : 'none';
  container.innerHTML = `
    <div class="header-top"><div class="container"><span>📍 Free Delivery on orders above ₹500</span><span>📞 Customer Support: 1800-000-0000</span></div></div>
    <div class="header-main"><div class="container">
      <a href="index.html" class="logo"><span class="logo-emoji">🛍️</span><span class="logo-text">ShopEase</span></a>
      <div class="header-search"><input type="text" placeholder="Search for products, brands and more..." /><span class="search-icon">🔍</span></div>
      <div class="header-actions">
        <a href="login.html" class="header-btn"><span class="emoji">🔑</span><span>Login</span></a>
        <button class="header-btn" onclick="showToast('Profile coming soon!')"><span class="emoji">👤</span><span>Account</span></button>
        <button class="header-btn" onclick="showToast('Wishlist coming soon!')"><span class="emoji">❤️</span><span>Wishlist</span></button>
        <a href="cart.html" class="header-btn"><span class="emoji">🛒</span><span>Cart</span><span class="badge cart-badge-count" style="display:${badgeDisplay};">${count}</span></a>
      </div>
    </div></div>
    <nav class="nav-bar"><div class="container">${categories.map(c => `<a href="products.html?cat=${c.id}&name=${encodeURIComponent(c.name)}" class="nav-link">${c.icon} ${c.name}</a>`).join('')}</div></nav>
  `;
}

// ============ SHARED FOOTER HTML ============
function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-emoji">🛍️</span>
            <span class="logo-text">ShopEase</span>
          </a>
          <p>Your one-stop shop for electronics, fashion, home decor, beauty, sports and more. We deliver happiness at your doorstep.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" onclick="showToast('About Us - Coming soon!')">About Us</a></li>
            <li><a href="#" onclick="showToast('Contact Us - Coming soon!')">Contact</a></li>
            <li><a href="#" onclick="showToast('Careers - Coming soon!')">Careers</a></li>
            <li><a href="#" onclick="showToast('Blog - Coming soon!')">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect With Us</h4>
          <ul>
            <li><a href="#">📘 Facebook</a></li>
            <li><a href="#">📷 Instagram</a></li>
            <li><a href="#">🐦 Twitter</a></li>
            <li><a href="#">📺 YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 ShopEase. All rights reserved.</span>
        <div class="footer-payments">💳 📱 🏦 💵</div>
      </div>
    </div>
  `;
}

// ============ URL PARAMS HELPER ============
function getUrlParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}
