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
    cbox.addEventListener("change", function () {
      const area = document.querySelector(".wrapper");
      console.log('blur');
      this.checked
        ? area.classList.add("blurry")
        : area.classList.remove("blurry");
    });

    const cbox_menu = document.getElementsById("over");
    console.log(cbox_menu);
    cbox_menu.addEventListener('change', function() {
      console.log('mouse');
      isMouseDown = true;
    });

  })();
  