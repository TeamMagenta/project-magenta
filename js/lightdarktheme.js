// document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
// const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
// const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

// let theme = 'dark';
// const root = document.querySelector(':root');
// const container = document.getElementsByClassName('theme-container')[0];
// const themeIcon = document.getElementById('theme-icon');
// // container.addEventListener('click', setTheme);
// // function setTheme() {
// //   switch (theme) {
// //   case 'dark':
// //     setLight();
// //     theme = "light";
// //     break;
// //   case "light":
// //     setDark();
// //     theme = 'dark';
// //     break;
// //   }
// // }
// // function setLight() {
// //   root.style.setProperty(
// //     "--bs-dark",
// //     "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
// //   );
// //   container.classList.remove("shadow-dark");
// //   setTimeout(() => {
// //     container.classList.add("shadow-light");
// //     themeIcon.classList.remove("change");
// //   }, 300);
// //   themeIcon.classList.add("change");
// //   themeIcon.src = sun;
// // }
// // function setDark() {
// //   root.style.setProperty("--bs-dark", "#212529");
// //   container.classList.remove("shadow-light");
// //   setTimeout(() => {
// //     container.classList.add("shadow-dark");
// //     themeIcon.classList.remove("change");
// //   }, 300);
// //   themeIcon.classList.add("change");
// //   themeIcon.src = moon;
// // }

// const initializeTheme = () => {
//   let theme;
//   if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme") as "light" | "dark";
//   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     theme = "dark";
//   } else {
//     theme = "light";
//   }
//   return theme;
// };

// const ThemeToggler = () => {
//   const [theme, setTheme] = createSignal<string>(initializeTheme());

//   createEffect(() => {
//     const root = document.documentElement;
//     if (theme() === "light") {
//       root.classList.remove("theme-dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       root.classList.add("theme-dark");
//       localStorage.setItem("theme", "dark");
//     }
//   });

//   return (
//     <div>
//       <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>{theme()}</button>
//     </div>
//   );
// };

// render(() => <ThemeToggler />, document.getElementById("app")!);

const btn = document.querySelector('button')

//FUNCTIONS
function soundClick() {
  let audio = new Audio('click-one.mp3');
  audio.play();
}
function soundClickTwo() {
  let audio = new Audio("click-two.mp3");
  audio.play();
}
const darkMode = () => {
  const body = document.querySelector('body');
  const sun = document.querySelector('i');
  const mode = document.querySelector('h1');
  body.classList.toggle('darkMode');

  if(body.classList.contains('darkMode')) {
    sun.className = 'fas fa-moon fa-3x';
    mode.textContent = "Dark Mode";
    sun.classList.add('open');
    soundClick();
    localStorage.setItem('theme', 'dark');
  } else {
    sun.className = 'fas fa-sun fa-3x';
    mode.textContent = "Light Mode";
    sun.classList.add('close');
    soundClickTwo();
    localStorage.setItem('theme', 'light');
  }
};

//EVENT LISTENER
btn.addEventListener('click', darkMode);

//LOCAL STORAGE
const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark') {
  darkMode();
} else {
  localStorage.removeItem('dark');
}
