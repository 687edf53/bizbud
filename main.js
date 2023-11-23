/* --------------------- Variables --------------------- */

const Nav = document.querySelector("nav");
const navLinksCont = document.querySelector("nav .nav-links");
const navItems = document.querySelectorAll("nav .nav-links li");
const Home = document.querySelector(".home");
const subHome = document.querySelector(".sub-section");
const burgerMenu = document.querySelector(".burger-menu");
const allElements = document.querySelectorAll("section");
const testimonialName = document.querySelector("#testimonial-name");
const dots = document.querySelectorAll(".slides .dot");
const emailInput = document.getElementById("email");

let arr = [];
let num = 0;

/* --------------------- Variables --------------------- */

/* --------------------- Functions --------------------- */

const navBorder = () => {
  if (window.scrollY === 0) {
    Nav.style.setProperty("--opacity-after", 0);
  } else {
    Nav.style.setProperty("--opacity-after", 1);
  }
};

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    allElements.forEach((link2) => {
      if (
        link2.className.toLowerCase() ===
        link.children[0].innerHTML.toLowerCase()
      ) {
        navItems.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      }
    });
  });
});

const subHomeScroll = () => {
  if (window.scrollY < 250) {
    subHome.style.paddingTop = window.scrollY + "px";
  }
  navBorder();
};

const addActive = () => {
  allElements.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.children[0].innerHTML.toLowerCase() === id) {
          link.classList.add("active");
        }
      });
    }
  });
};

/* --------------------- Functions --------------------- */

/* --------------------- Events --------------------- */

navBorder();
window.addEventListener("scroll", (_) => {
  navBorder();
  addActive();
});

burgerMenu.addEventListener("click", () => {
  navLinksCont.classList.toggle("nav-mob");
  burgerMenu.classList.toggle("close");
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksCont.classList.remove("nav-mob");
      burgerMenu.classList.remove("close");
    });
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dot.classList.add("active");
    testimonialName.innerHTML = dot.dataset.name;
  });
  arr.push(dot.dataset.name);
});

setInterval(() => {
  num++;
  if (num == 3) {
    num = 0;
  }
  testimonialName.innerHTML = arr[num];
  dots.forEach((dot) => {
    dot.classList.remove("active");
    if (dot.dataset.name == arr[num]) {
      dot.classList.add("active");
    }
  });
}, 10000);

emailInput.onblur = () => {
  if (emailInput.value === "") {
    emailInput.style.borderBottom = "2px solid red";
  } else {
    emailInput.style.borderBottom = "1px solid var(--main-color)";
  }
};
emailInput.addEventListener("focus", () => {
  emailInput.style.borderBottom = "2px solid var(--second-color)";
});

emailInput.addEventListener("mouseenter", () => {
  emailInput.style.borderBottom = "2px solid var(--second-color)";
});

/* --------------------- Events --------------------- */
