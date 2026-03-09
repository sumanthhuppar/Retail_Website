/* ==========================================
   ShopEase – E-Commerce Website JavaScript
   Full website logic, data & navigation
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

// ============ CART STATE ============
let cart = [];
let navigationHistory = ['homePage'];

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
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2500);
}

function loginSuccess() {
  navigateTo('homePage');
  setTimeout(() => showToast('Logged in successfully! 🎉'), 300);
}

// ============ NAVIGATION ============
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
  navigationHistory.push(pageId);
  updateAllCartBadges();
  if (pageId === 'homePage') renderHome();
  if (pageId === 'cartPage') renderCart();
  if (pageId === 'paymentPage') renderPayment();
}

// ============ SHARED HEADER HTML ============
function getHeaderHTML() {
  const count = getCartCount();
  const badgeDisplay = count > 0 ? 'flex' : 'none';
  return `
    <div class="header-top"><div class="container"><span>📍 Free Delivery on orders above ₹500</span><span>📞 Customer Support: 1800-000-0000</span></div></div>
    <div class="header-main"><div class="container">
      <div class="logo" onclick="navigateTo('homePage')"><span class="logo-emoji">🛍️</span><span class="logo-text">ShopEase</span></div>
      <div class="header-search"><input type="text" placeholder="Search for products, brands and more..." /><span class="search-icon">🔍</span></div>
      <div class="header-actions">
        <button class="header-btn" onclick="navigateTo('loginPage')"><span class="emoji">🔑</span><span>Login</span></button>
        <button class="header-btn" onclick="showToast('Profile coming soon!')"><span class="emoji">👤</span><span>Account</span></button>
        <button class="header-btn" onclick="showToast('Wishlist coming soon!')"><span class="emoji">❤️</span><span>Wishlist</span></button>
        <button class="header-btn" onclick="navigateTo('cartPage')"><span class="emoji">🛒</span><span>Cart</span><span class="badge" style="display:${badgeDisplay};">${count}</span></button>
      </div>
    </div></div>
    <nav class="nav-bar"><div class="container">${categories.map(c => `<span class="nav-link" onclick="openCategory(${c.id},'${c.name}')">${c.icon} ${c.name}</span>`).join('')}</div></nav>
  `;
}

function injectHeaders() {
  ['listHeader','detailHeader','cartHeader','paymentHeader','orderHeader'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = getHeaderHTML();
  });
}

// ============ CART MANAGER ============
function addToCart(productId, qty = 1) {
  const existing = cart.find(i => i.productId === productId);
  if (existing) existing.quantity += qty;
  else cart.push({ productId, quantity: qty });
  updateAllCartBadges();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.productId !== productId);
  updateAllCartBadges();
}

function updateQuantity(productId, qty) {
  if (qty <= 0) return removeFromCart(productId);
  const item = cart.find(i => i.productId === productId);
  if (item) item.quantity = qty;
  updateAllCartBadges();
}

function getCartCount() { return cart.reduce((s, i) => s + i.quantity, 0); }

function getSubtotal() {
  return cart.reduce((s, i) => {
    const p = products.find(pr => pr.id === i.productId);
    return s + (p ? p.price * i.quantity : 0);
  }, 0);
}

function getShipping() { return getSubtotal() > 500 ? 0 : 49; }
function getDiscount() { return Math.round(getSubtotal() * 0.1); }
function getTotal() { return getSubtotal() + getShipping() - getDiscount(); }

function updateAllCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.header-btn .badge, #headerCartBadge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  injectHeaders();
}

// ============ PRODUCT CARD HTML ============
function productCardHTML(p) {
  const emoji = productEmojis[p.image] || '📦';
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
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

// ============ HOME PAGE ============
let bannerIndex = 0;
let bannerInterval;

function renderHome() {
  // Hero Banner
  const track = document.getElementById('heroTrack');
  const dots = document.getElementById('heroDots');
  track.innerHTML = banners.map(b => `
    <div class="hero-slide" style="background:${b.gradient}">
      <span class="hero-badge">${b.badge}</span>
      <h2 class="hero-title">${b.title}</h2>
      <p class="hero-subtitle">${b.subtitle}</p>
      <button class="hero-cta" onclick="showAllProducts()">Shop Now →</button>
    </div>
  `).join('');
  dots.innerHTML = banners.map((_, i) => `<div class="hero-dot ${i === 0 ? 'active' : ''}" onclick="goToBanner(${i})"></div>`).join('');

  clearInterval(bannerInterval);
  bannerIndex = 0;
  bannerInterval = setInterval(() => {
    bannerIndex = (bannerIndex + 1) % banners.length;
    goToBanner(bannerIndex);
  }, 5000);

  // Navigation Links
  document.getElementById('navLinks').innerHTML =
    categories.map(c => `<span class="nav-link" onclick="openCategory(${c.id},'${c.name}')">${c.icon} ${c.name}</span>`).join('');

  // Categories Grid
  document.getElementById('categoriesGrid').innerHTML = categories.map(c => `
    <div class="category-card" onclick="openCategory(${c.id},'${c.name}')">
      <span class="emoji">${c.icon}</span>
      <span class="name">${c.name}</span>
      <span class="count">${c.count}+ items</span>
    </div>
  `).join('');

  // Flash Deals
  document.getElementById('flashDealsRow').innerHTML = shuffle(products).slice(0, 6).map(productCardHTML).join('');

  // Recommended
  document.getElementById('recommendedGrid').innerHTML = shuffle(products).slice(0, 8).map(productCardHTML).join('');
}

function goToBanner(index) {
  bannerIndex = index;
  document.getElementById('heroTrack').style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

// ============ PRODUCT LIST ============
function openCategory(catId, catName) {
  const prods = catId === 0 ? products : products.filter(p => p.categoryId === catId);
  document.getElementById('listTitle').textContent = catName;
  document.getElementById('breadcrumbCategory').textContent = catName;
  document.getElementById('productCount').textContent = `${prods.length} products found`;
  document.getElementById('listGrid').innerHTML = prods.map(productCardHTML).join('');
  navigateTo('productListPage');
}

function showAllProducts() { openCategory(0, 'All Products'); }

// ============ PRODUCT DETAIL ============
let currentProductId = null;

function openProduct(id) {
  currentProductId = id;
  const p = products.find(pr => pr.id === id);
  if (!p) return;

  const emoji = productEmojis[p.image] || '📦';
  const cat = categories.find(c => c.id === p.categoryId);

  document.getElementById('detailBreadcrumb').innerHTML = `
    <a href="#" onclick="navigateTo('homePage');return false;">Home</a>
    <span class="sep">›</span>
    <a href="#" onclick="openCategory(${p.categoryId},'${cat?.name || 'Products'}');return false;">${cat?.name || 'Products'}</a>
    <span class="sep">›</span>
    <span>${p.name}</span>
  `;

  document.getElementById('detailContent').innerHTML = `
    <div class="detail-layout">
      <div class="detail-image-section">
        <span class="discount-badge">${p.discount}% OFF</span>
        <button class="wishlist-btn" id="wishlistBtn" onclick="toggleWishlist()">🤍</button>
        ${emoji}
      </div>
      <div class="detail-info-section">
        <div class="rating-row">
          <span class="stars" style="font-size:16px;">${getStars(p.rating)}</span>
          <span class="review-count" style="font-size:14px;">${p.rating} (${p.reviewCount} reviews)</span>
        </div>
        <h1 class="name">${p.name}</h1>
        <div class="detail-price-row">
          <span class="detail-price">${formatPrice(p.price)}</span>
          <span class="detail-original">${formatPrice(p.originalPrice)}</span>
          <span class="detail-discount-text">${p.discount}% off</span>
        </div>
        <div class="stock-badge in-stock">${p.inStock ? '✅ In Stock — Ready to ship' : '❌ Out of Stock'}</div>
        <div class="detail-divider"></div>
        <div class="size-label">Select Size</div>
        <div class="size-options">
          ${p.sizes.map((s, i) => `<button class="size-option ${i === 0 ? 'selected' : ''}" onclick="selectSize(this)">${s}</button>`).join('')}
        </div>
        <div class="detail-actions">
          <button class="btn btn-outline" onclick="addToCart(${p.id});showToast('${p.name} added to cart! 🛒')">🛒 Add to Cart</button>
          <button class="btn btn-primary-std" onclick="addToCart(${p.id});navigateTo('cartPage')">Buy Now →</button>
        </div>
        <div class="features-grid">
          <div class="feature-box"><span class="emoji">🚚</span><span class="label">Free Delivery</span></div>
          <div class="feature-box"><span class="emoji">🔄</span><span class="label">Easy Returns</span></div>
          <div class="feature-box"><span class="emoji">🔒</span><span class="label">Secure Payment</span></div>
          <div class="feature-box"><span class="emoji">⭐</span><span class="label">Top Rated</span></div>
        </div>
      </div>
    </div>
    <div class="detail-description">
      <h3>Product Description</h3>
      <p>${p.description}</p>
    </div>
  `;

  navigateTo('productDetailPage');
}

function selectSize(el) {
  el.parentElement.querySelectorAll('.size-option').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

let wishlisted = false;
function toggleWishlist() {
  wishlisted = !wishlisted;
  document.getElementById('wishlistBtn').textContent = wishlisted ? '❤️' : '🤍';
  showToast(wishlisted ? 'Added to wishlist ❤️' : 'Removed from wishlist');
}

// ============ CART PAGE ============
function renderCart() {
  const container = document.getElementById('cartContent');
  const countLabel = document.getElementById('cartCountLabel');

  if (cart.length === 0) {
    countLabel.textContent = '';
    container.innerHTML = `
      <div class="empty-cart">
        <div class="emoji">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet. Start shopping to fill it up!</p>
        <button class="btn btn-primary-std" onclick="navigateTo('homePage')">Start Shopping →</button>
      </div>
    `;
    return;
  }

  const count = getCartCount();
  countLabel.textContent = `(${count} items)`;
  const subtotal = getSubtotal();
  const shipping = getShipping();
  const discount = getDiscount();
  const total = getTotal();

  const itemsHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.productId);
    if (!p) return '';
    const emoji = productEmojis[p.image] || '📦';
    return `
      <div class="cart-card">
        <div class="cart-card-img">${emoji}</div>
        <div class="cart-card-details">
          <div class="cart-card-top">
            <div class="cart-card-name">${p.name}</div>
            <button class="remove-btn" onclick="removeFromCart(${p.id});renderCart();showToast('Item removed');">✕ Remove</button>
          </div>
          <div class="cart-card-price-row">
            <span class="product-price">${formatPrice(p.price * item.quantity)}</span>
            <span class="product-original-price">${formatPrice(p.originalPrice * item.quantity)}</span>
          </div>
          <div class="qty-selector">
            <button class="qty-btn" onclick="updateQuantity(${p.id},${item.quantity - 1});renderCart();">−</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${p.id},${item.quantity + 1});renderCart();">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items-list">${itemsHTML}</div>
      <div class="cart-sidebar">
        <div class="coupon-card">
          <h4>🏷️ Have a coupon?</h4>
          <div class="coupon-row">
            <input type="text" placeholder="Enter coupon code" />
            <button onclick="showToast('Coupon applied! 🎉')">Apply</button>
          </div>
        </div>
        <div class="summary-card">
          <h3>Order Summary</h3>
          <div class="summary-row"><span class="label">Subtotal (${count} items)</span><span class="value">${formatPrice(subtotal)}</span></div>
          <div class="summary-row"><span class="label">Shipping</span><span class="value">${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
          <div class="summary-row discount"><span class="label">Discount (10%)</span><span class="value">-${formatPrice(discount)}</span></div>
          <div class="summary-row total"><span class="label">Total</span><span class="value">${formatPrice(total)}</span></div>
          <button class="btn btn-primary-full" onclick="navigateTo('paymentPage')">Proceed to Checkout →</button>
        </div>
      </div>
    </div>
  `;
}

// ============ PAYMENT PAGE ============
function renderPayment() {
  const subtotal = getSubtotal();
  const shipping = getShipping();
  const discount = getDiscount();
  const total = getTotal();
  const count = getCartCount();

  document.getElementById('paymentContent').innerHTML = `
    <div class="payment-layout">
      <div class="payment-main">
        <div class="pay-card">
          <div class="pay-card-header">
            <span class="emoji">📍</span>
            <h3>Delivery Address</h3>
            <span class="action" onclick="showToast('Address selection coming soon!')">Change</span>
          </div>
          <div class="address-box">
            <div class="name">John Doe</div>
            <div class="text">123 Main Street, Apt 4B<br>New York, NY 10001<br>Phone: +1 (555) 123-4567</div>
          </div>
        </div>
        <div class="pay-card">
          <div class="pay-card-header"><h3>Payment Method</h3></div>
          <div class="payment-option selected" onclick="selectPayment(this)">
            <span class="emoji">💳</span><span class="name">Credit / Debit Card</span><span class="radio"></span>
          </div>
          <div class="payment-option" onclick="selectPayment(this)">
            <span class="emoji">📱</span><span class="name">UPI Payment</span><span class="radio"></span>
          </div>
          <div class="payment-option" onclick="selectPayment(this)">
            <span class="emoji">🏦</span><span class="name">Net Banking</span><span class="radio"></span>
          </div>
          <div class="payment-option" onclick="selectPayment(this)">
            <span class="emoji">💵</span><span class="name">Cash on Delivery</span><span class="radio"></span>
          </div>
        </div>
      </div>
      <div class="pay-sidebar">
        <div class="summary-card">
          <h3>Order Summary</h3>
          <div class="summary-row"><span class="label">Subtotal (${count} items)</span><span class="value">${formatPrice(subtotal)}</span></div>
          <div class="summary-row"><span class="label">Shipping</span><span class="value">${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
          <div class="summary-row discount"><span class="label">Discount</span><span class="value">-${formatPrice(discount)}</span></div>
          <div class="summary-row total"><span class="label">Total</span><span class="value">${formatPrice(total)}</span></div>
          <button class="btn btn-primary-full" onclick="placeOrder()">🔒 Pay ${formatPrice(total)} →</button>
        </div>
      </div>
    </div>
  `;
}

function selectPayment(el) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

// ============ ORDER PAGE ============
function placeOrder() {
  const total = getTotal();
  cart = [];
  updateAllCartBadges();

  const now = new Date();
  const orderId = '#SE' + now.getFullYear() + String(now.getMonth()+1).padStart(2,'0') + String(now.getDate()).padStart(2,'0') + String(now.getHours()).padStart(2,'0') + String(now.getMinutes()).padStart(2,'0');
  const orderDate = now.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  const delivery = new Date(now.getTime() + 5 * 86400000);
  const deliveryDate = delivery.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  document.getElementById('orderContent').innerHTML = `
    <div class="order-success-hero">
      <div class="success-circle"><span>✓</span></div>
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
    </div>
    <div class="order-details-grid">
      <div class="order-detail-card">
        <h3>📋 Order Details</h3>
        <div class="order-info-row"><span class="label">Order ID</span><span class="value">${orderId}</span></div>
        <div class="order-info-row"><span class="label">Order Date</span><span class="value">${orderDate}</span></div>
        <div class="order-info-row"><span class="label">Total Amount</span><span class="value price">${formatPrice(total)}</span></div>
        <div class="order-info-row"><span class="label">Est. Delivery</span><span class="value delivery">${deliveryDate}</span></div>
      </div>
      <div class="order-detail-card">
        <h3>📦 Order Status</h3>
        <div class="timeline-step completed">
          <div class="timeline-dot completed">✓</div>
          <div class="timeline-info"><h4>Order Placed</h4><p>Your order has been confirmed</p></div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-info"><h4>Processing</h4><p>Getting your items ready</p></div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-info"><h4>Shipped</h4><p>On the way to you</p></div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-info"><h4>Delivered</h4><p>Package will be delivered</p></div>
        </div>
      </div>
    </div>
    <div class="order-actions">
      <button class="btn btn-primary-std" onclick="showToast('Order tracking coming soon!')">🚚 Track Order</button>
      <button class="btn btn-outline" onclick="navigateTo('homePage')">Continue Shopping →</button>
    </div>
  `;

  navigateTo('orderPage');
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  injectHeaders();
});
