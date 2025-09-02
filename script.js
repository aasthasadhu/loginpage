// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1000);
});

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = loginForm.querySelector("input[type='text']").value.trim();
    const password = loginForm.querySelector("input[type='password']").value.trim();

    if (!username || !password) {
      alert("Please fill in both fields!");
      return;
    }

    // Redirect to home
    window.location.href = "home.html";
  });
}

// Portfolio filter
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio .item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
