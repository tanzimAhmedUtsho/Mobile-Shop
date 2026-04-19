// পাসওয়ার্ড দেখা বা লুকানোর ফাংশন
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// লগইন ফর্ম সাবমিশন
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.getElementById("loginBtn");
  const originalContent = btn.innerHTML;

  // লোডিং এনিমেশন দেখানো
  btn.innerHTML =
    '<i class="fas fa-circle-notch fa-spin"></i> <span>চেক করা হচ্ছে...</span>';
  btn.disabled = true;
  btn.style.opacity = "0.7";

  // ১.৫ সেকেন্ড পর অ্যাকশন (সিমুলেশন)
  setTimeout(() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // এখানে আপনার আসল লগইন লজিক থাকবে
    console.log("Attempting login with:", email);

    if (email && password) {
      alert("সফলভাবে লগইন হয়েছে!");
      window.location.href = "index.html"; // হোম পেজে নিয়ে যাবে
    } else {
      alert("ভুল তথ্য দিয়েছেন!");
      btn.innerHTML = originalContent;
      btn.disabled = false;
      btn.style.opacity = "1";
    }
  }, 1500);
});
