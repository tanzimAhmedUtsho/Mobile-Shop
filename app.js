const phones = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    price: "1,62,000",
    specs: "Natural Titanium, 256GB, A19 Pro Chip",
    img: "/image/17 pro max.jpg",
  },
  {
    id: 2,
    name: "Samsung S25 Ultra",
    brand: "Samsung",
    price: "1,38,000",
    specs: "Titanium Gray, 12GB RAM, 200MP Main Camera",
    img: "/image/Samsung-Galaxy-S25-Ultra.jpg",
  },
  {
    id: 3,
    name: "Pixel 10 Pro",
    brand: "Google",
    price: "92,500",
    specs: "Obsidian Black, AI Magic Editor, Pure Experience",
    img: "/image/google-pixel-10-pro.webp",
  },
  {
    id: 4,
    name: "ROG Phone 10",
    brand: "ASUS",
    price: "1,15,000",
    specs: "Gaming Beast, 165Hz Display, AirTriggers",
    img: "/image/RedMagic_10_Pro.jpg",
  },
];

const productList = document.getElementById("product-list");

// --- Product Logic ---
function render() {
  if (!productList) return;
  productList.innerHTML = phones
    .map(
      (phone) => `
        <div class="product-card p-6 rounded-[2rem] flex flex-col group cursor-pointer" onclick="openDetails(${phone.id})">
            <div class="h-52 overflow-hidden rounded-2xl mb-6 bg-black flex items-center justify-center">
                <img src="${phone.img}" alt="${phone.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
            </div>
            <span class="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">${phone.brand}</span>
            <h4 class="text-lg font-bold text-white group-hover:text-blue-400 transition">${phone.name}</h4>
            <p class="text-gray-400 text-sm mt-3">৳ ${phone.price}</p>
            <div class="mt-6 flex items-center text-blue-500 font-bold text-sm">
                View Details <i class="fas fa-chevron-right ml-2 text-[10px]"></i>
            </div>
        </div>
    `,
    )
    .join("");
}

function openDetails(id) {
  const p = phones.find((x) => x.id === id);
  const m = document.getElementById("modal");
  document.getElementById("modal-content").innerHTML = `
        <div class="text-center">
            <img src="${p.img}" class="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-blue-600/20">
            <h2 class="text-3xl font-bold text-white mb-2">${p.name}</h2>
            <p class="text-blue-500 font-black text-xl mb-6">৳ ${p.price}</p>
            <div class="text-left bg-black/40 p-5 rounded-2xl border border-gray-800 mb-8">
                <p class="text-xs text-gray-500 uppercase font-bold mb-2">Specifications</p>
                <p class="text-gray-300 text-sm leading-relaxed">${p.specs}</p>
            </div>
            <div class="flex gap-4">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition">Confirm Order</button>
                <button onclick="closeDetails()" class="flex-1 bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl font-bold border border-white/10 transition">Close</button>
            </div>
        </div>
    `;
  m.classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("modal").classList.add("hidden");
}

// --- Review Logic ---

function openReviewModal() {
  document.getElementById("review-modal").classList.remove("hidden");
}

function closeReviewModal() {
  document.getElementById("review-modal").classList.add("hidden");
}

// নতুন রিভিউ সাবমিট করার ফাংশন
document
  .getElementById("review-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("reviewer-name").value;
    const text = document.getElementById("reviewer-text").value;
    const firstLetter = name.charAt(0).toUpperCase();

    // নতুন রিভিউ কার্ডের ডিজাইন
    const reviewHTML = `
        <div class="product-card p-8 rounded-[2rem] border border-blue-500/30 animate-pulse-once">
          <div class="flex text-yellow-500 mb-4 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-gray-400 text-sm italic mb-8 leading-relaxed">
            "${text}"
          </p>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg">${firstLetter}</div>
            <div>
              <h4 class="text-white font-bold text-sm">${name}</h4>
              <p class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Just Now</p>
            </div>
          </div>
        </div>
    `;

    // রিভিউর শুরুতে যুক্ত করা
    const reviewList = document.getElementById("review-list");
    reviewList.insertAdjacentHTML("afterbegin", reviewHTML);

    // ফর্ম ক্লিয়ার এবং মোডাল বন্ধ
    this.reset();
    closeReviewModal();
  });

// মডালের বাইরে ক্লিক করলে বন্ধ হবে
window.onclick = function (event) {
  const pModal = document.getElementById("modal");
  const rModal = document.getElementById("review-modal");
  if (event.target == pModal) pModal.classList.add("hidden");
  if (event.target == rModal) rModal.classList.add("hidden");
};

render();
