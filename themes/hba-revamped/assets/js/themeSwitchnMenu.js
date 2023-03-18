(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content
  const cbox = document.getElementById("menu-trigger");
  const wrapper = document.querySelector(".wrapper");

  cbox.addEventListener("click", function () {
    console.log("cbox");
    if (this.checked) {
      wrapper.classList.add("blurry");
    } else {
      wrapper.classList.remove("blurry");
    }
  });

  // Hide menu when clicking outside
  document.addEventListener("click", function (e) {
    const target = document.querySelector(".trigger");
    if (target.contains(e.target)) {
      cbox.checked = false;
      wrapper.classList.remove("blurry");
    }
  });
})();

