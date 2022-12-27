const menuItems = document.querySelectorAll(".menu-item");

      menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function (e) {
          const id = e.target.attributes[1].textContent;

          menuItems.forEach(function (item) {
            item.classList.remove("active");
          });
          this.classList.add("active");

          tabMenu(id);
        });
      });

      function tabMenu(id) {
        const items = document.querySelectorAll(".menu-content"); 
        items.forEach(function (item) {
          item.classList.remove("active");
        });
        let se = document.querySelector(`[data-tab="${id}"]`);
        se.classList.add("active"); 
      }