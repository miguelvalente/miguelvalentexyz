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
    // and remove the blur when the menu is closed
    // or when the user clicks outside the menu
    // the menu is a ul element with the class "triger"
    const cbox = document.getElementById("menu-trigger");
    const cbox_menu = document.getElementById("menu-div");
    const wrapper = document.querySelector(".wrapper");
    const menu_list = document.getElementById("menu-list");
    const mode = document.getElementById("mode");
    cbox.addEventListener("click", function () {
      console.log('cbox');
      this.checked
        ? (
          // shows menu
          wrapper.classList.add("blurry"),
          cbox_menu.classList.remove("remove-display"),
          menu_list.classList.remove("remove-display"),
          mode.classList.remove("remove-display")
        )
        : (
          wrapper.classList.remove("blurry")
        );
    });

    cbox_menu.addEventListener("click", function () {
      menu_list.classList.remove("blurry")
      mode.classList.add("remove-display");
      wrapper.classList.remove("blurry");
      cbox_menu.classList.add("remove-display");
    });

  })();
  