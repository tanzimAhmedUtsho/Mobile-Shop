const products = [
  {
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 162000,
    oldPrice: 175000,
    img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Samsung S24 Ultra",
    brand: "Samsung",
    price: 138000,
    oldPrice: 145000,
    img: "https://images.unsplash.com/photo-1707246261592-3a33999905fa?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 92500,
    oldPrice: 99000,
    img: "https://images.unsplash.com/photo-1696429117070-077558667503?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Realme GT 5",
    brand: "Realme",
    price: 42000,
    oldPrice: 48000,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 115000,
    oldPrice: 125000,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Oppo Find X7",
    brand: "Oppo",
    price: 85000,
    oldPrice: 90000,
    img: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Redmi Note 13",
    brand: "Xiaomi",
    price: 28000,
    oldPrice: 32000,
    img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Samsung A54",
    brand: "Samsung",
    price: 45000,
    oldPrice: 49000,
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400",
  },
];

const shopGrid = document.getElementById("shopGrid");

function renderShop(filter = "All") {
  const filtered =
    filter === "All" ? products : products.filter((p) => p.brand === filter);

  shopGrid.innerHTML = filtered
    .map(
      (p) => `
        <div class="brand-card p-6 flex flex-col group">
            <div class="relative overflow-hidden rounded-2xl mb-6 bg-black h-48 flex items-center justify-center">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500">
                <span class="absolute top-3 right-3 discount-badge">-${Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}%</span>
            </div>
            <div class="flex-1">
                <span class="text-blue-500 text-[10px] font-bold uppercase tracking-widest">${p.brand}</span>
                <h4 class="text-lg font-bold mt-1 text-white">${p.name}</h4>
                <div class="mt-4 flex items-center gap-3">
                    <span class="text-xl font-black text-white">৳${p.price.toLocaleString()}</span>
                    <span class="text-sm text-gray-500 line-through italic">৳${p.oldPrice.toLocaleString()}</span>
                </div>
            </div>
            <button class="mt-6 w-full py-3 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 rounded-xl font-bold text-sm transition-all duration-300">Buy Now</button>
        </div>
    `,
    )
    .join("");
}

function filterBrand(brand) {
  // Button Active Style Update
  document.querySelectorAll(".brand-btn").forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-white/5", "border", "border-white/10");
  });
  event.target.classList.add("bg-blue-600", "text-white");
  event.target.classList.remove("bg-white/5", "border", "border-white/10");

  renderShop(brand);
}

// Initial Render
renderShop();
