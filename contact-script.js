document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  const form = document.getElementById("contactForm");
  const successBox = document.getElementById("successBox");

  // বাটন এনিমেশন (Loading state)
  btn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> <span>পাঠানো হচ্ছে...</span>';
  btn.disabled = true;

  // একটি ডামি ডিলে (১.৫ সেকেন্ড) আসল সাবমিশন সিমুলেট করার জন্য
  setTimeout(() => {
    form.classList.add("hidden");
    successBox.classList.remove("hidden");

    // কনসোলে ডাটা দেখা (ডেভেলপমেন্টের জন্য)
    console.log("Name:", document.getElementById("userName").value);
    console.log("Phone:", document.getElementById("userPhone").value);
    console.log("Message:", document.getElementById("userMessage").value);
  }, 1500);
});

function resetForm() {
  document.getElementById("contactForm").classList.remove("hidden");
  document.getElementById("successBox").classList.add("hidden");
  document.getElementById("contactForm").reset();
  document.getElementById("submitBtn").innerHTML =
    '<span>মেসেজ পাঠান</span> <i class="fas fa-paper-plane"></i>';
  document.getElementById("submitBtn").disabled = false;
}
