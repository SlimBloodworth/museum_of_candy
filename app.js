    window.addEventListener("scroll", function() {
        let nav = document.querySelector("#mainNavBar");
        let scrollHeight = nav.offsetHeight;
      
        if (window.scrollY > scrollHeight) {
          nav.classList.add("scrolling");
        } else {
          nav.classList.remove("scrolling");
        }
      });
      