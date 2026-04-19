document.getElementById("repairForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // ভ্যালুগুলো সংগ্রহ করা
  const name = document.getElementById("name").value;
  const model = document.getElementById("model").value;

  // এখানে আপনি চাইলে API বা ইমেইল পাঠানোর কোড যুক্ত করতে পারেন
  console.log("Repair Request from:", name, "for model:", model);

  // ফর্মটি হাইড করে সাকসেস মেসেজ দেখানো
  this.style.display = "none";
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";

  // একটি সিম্পল এলার্ট (ঐচ্ছিক)
  alert("আপনার অনুরোধটি গ্রহণ করা হয়েছে। ধন্যবাদ!");
});
