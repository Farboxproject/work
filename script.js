const menuData = [
  { name: 'Nasi Goreng Spesial', category: 'Nusantara', price: 35000, rating: 4.8, calories: 620, image: 'https://images.unsplash.com/photo-1686742863458-c5f1ad311501?auto=format&fit=crop&w=1200&q=80', desc: 'Nasi goreng smoky dengan telur mata sapi dan kerupuk renyah.' },
  { name: 'Rendang Daging', category: 'Nusantara', price: 48000, rating: 4.9, calories: 680, image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=1200&q=80', desc: 'Rendang kaya rempah dengan potongan daging super empuk.' },
  { name: 'Sate Ayam Madura', category: 'Nusantara', price: 40000, rating: 4.7, calories: 510, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80', desc: 'Sate ayam bakar dengan bumbu kacang pedas manis.' },
  { name: 'Tom Yum Seafood', category: 'Seafood', price: 52000, rating: 4.6, calories: 380, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80', desc: 'Sup asam pedas dengan udang, cumi, dan jamur.' },
  { name: 'Ikan Bakar Jimbaran', category: 'Seafood', price: 69000, rating: 4.8, calories: 540, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80', desc: 'Ikan bakar segar, sambal matah, dan nasi hangat.' },
  { name: 'Chicken Katsu Curry', category: 'Asian', price: 47000, rating: 4.7, calories: 590, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80', desc: 'Ayam katsu crispy dengan saus kari Jepang creamy.' },
  { name: 'Sushi Party Set', category: 'Asian', price: 79000, rating: 4.8, calories: 520, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80', desc: 'Kombinasi nigiri, maki, dan roll segar satu set.' },
  { name: 'Steak Pepper Sauce', category: 'Western', price: 88000, rating: 4.8, calories: 740, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80', desc: 'Sirloin juicy dengan saus lada hitam dan potato.' },
  { name: 'Creamy Truffle Pasta', category: 'Western', price: 65000, rating: 4.7, calories: 690, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80', desc: 'Pasta al dente dengan saus krim jamur truffle.' },
  { name: 'Caesar Salad Bowl', category: 'Healthy', price: 39000, rating: 4.5, calories: 320, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80', desc: 'Romaine segar dengan grilled chicken dan crouton.' },
  { name: 'Grilled Salmon Veggie', category: 'Healthy', price: 82000, rating: 4.8, calories: 460, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80', desc: 'Salmon grill, sayuran panggang, lemon butter.' },
  { name: 'Dimsum Mix 6pcs', category: 'Snack', price: 33000, rating: 4.6, calories: 370, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80', desc: 'Dimsum ayam, udang, jamur dengan chili oil.' },
  { name: 'French Fries Loaded', category: 'Snack', price: 29000, rating: 4.4, calories: 430, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80', desc: 'Kentang goreng crispy dengan saus keju.' },
  { name: 'Matcha Lava Cake', category: 'Dessert', price: 36000, rating: 4.7, calories: 410, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=1200&q=80', desc: 'Cake matcha lembut dengan isi lumer.' },
  { name: 'Es Kopi Susu Gula Aren', category: 'Minuman', price: 24000, rating: 4.9, calories: 210, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', desc: 'Kopi creamy dengan rasa gula aren seimbang.' },
  { name: 'Mango Yakult Sparkle', category: 'Minuman', price: 22000, rating: 4.5, calories: 190, image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=1200&q=80', desc: 'Minuman mangga segar dengan sensasi sparkle.' },
  { name: 'Paket Keluarga Hemat', category: 'Paket', price: 149000, rating: 4.8, calories: 1200, image: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1200&q=80', desc: 'Paket 4 porsi terdiri dari nasi, lauk, dan minuman.' }
];

const elements = {
  grid: document.getElementById('menuGrid'),
  template: document.getElementById('menuTemplate'),
  filters: document.getElementById('categoryFilters'),
  search: document.getElementById('searchInput'),
  sort: document.getElementById('sortSelect'),
  featuredBox: document.getElementById('featuredBox'),
  featuredText: document.getElementById('featuredText'),
  statItems: document.getElementById('statItems'),
  statCategory: document.getElementById('statCategory'),
  btnExplore: document.getElementById('btnExplore'),
  btnMenu: document.getElementById('btnMenu'),
  btnRandomTop: document.getElementById('btnRandomTop'),
  btnHighlight: document.getElementById('btnHighlight')
};

let currentCategory = 'Semua';
const categories = ['Semua', ...new Set(menuData.map(item => item.category))];

const formatRupiah = (amount) => `Rp${amount.toLocaleString('id-ID')}`;
const createStars = (rating) => `${'★'.repeat(Math.round(rating))}${'☆'.repeat(5 - Math.round(rating))} ${rating.toFixed(1)}`;

function updateStats() {
  elements.statItems.textContent = menuData.length;
  elements.statCategory.textContent = categories.length - 1;
}

function renderFilters() {
  elements.filters.innerHTML = '';
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = `filter-chip ${currentCategory === category ? 'active' : ''}`;
    button.textContent = category;
    button.addEventListener('click', () => {
      currentCategory = category;
      renderFilters();
      renderMenu();
    });
    elements.filters.appendChild(button);
  });
}

function getFilteredMenus() {
  const keyword = elements.search.value.trim().toLowerCase();

  let list = menuData.filter(item => {
    const sameCategory = currentCategory === 'Semua' || item.category === currentCategory;
    const sameKeyword = [item.name, item.category, item.desc]
      .some(part => part.toLowerCase().includes(keyword));
    return sameCategory && sameKeyword;
  });

  switch (elements.sort.value) {
    case 'priceAsc':
      list = list.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      list = list.sort((a, b) => b.price - a.price);
      break;
    case 'ratingDesc':
      list = list.sort((a, b) => b.rating - a.rating);
      break;
    case 'calorieAsc':
      list = list.sort((a, b) => a.calories - b.calories);
      break;
    default:
      list = list.sort((a, b) => b.rating - a.rating || a.price - b.price);
      break;
  }

  return list;
}

function renderMenu(list = null) {
  const menus = list || getFilteredMenus();
  elements.grid.innerHTML = '';

  if (!menus.length) {
    elements.grid.innerHTML = '<p>Tidak ada menu cocok. Coba ubah kata kunci atau kategori.</p>';
    return;
  }

  menus.forEach(item => {
    const node = elements.template.content.cloneNode(true);
    node.querySelector('h3').textContent = item.name;
    node.querySelector('.price').textContent = formatRupiah(item.price);
    node.querySelector('.desc').textContent = item.desc;
    node.querySelector('.rating').textContent = createStars(item.rating);
    node.querySelector('.calories').textContent = `${item.calories} kcal`;
    node.querySelector('.category-chip').textContent = item.category;

    const img = node.querySelector('.menu-image');
    img.src = item.image;
    img.alt = item.name;

    elements.grid.appendChild(node);
  });

  observeReveal();
}

function showFeatured() {
  const topPicks = [...menuData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map(item => `${item.name} (${item.rating.toFixed(1)})`)
    .join(' • ');

  elements.featuredText.textContent = topPicks;
  elements.featuredBox.hidden = false;
  elements.featuredBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function randomRecommendation() {
  const randomMenus = [...menuData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8)
    .sort((a, b) => b.rating - a.rating);

  elements.featuredText.textContent = 'Mode acak aktif: menampilkan 8 rekomendasi pilihan chef.';
  elements.featuredBox.hidden = false;
  renderMenu(randomMenus);
}

function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

function jumpToMenu() {
  document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function attachEvents() {
  elements.search.addEventListener('input', () => renderMenu());
  elements.sort.addEventListener('change', () => renderMenu());
  elements.btnExplore.addEventListener('click', jumpToMenu);
  elements.btnMenu.addEventListener('click', jumpToMenu);
  elements.btnRandomTop.addEventListener('click', randomRecommendation);
  elements.btnHighlight.addEventListener('click', showFeatured);
}

updateStats();
renderFilters();
renderMenu();
attachEvents();
observeReveal();
