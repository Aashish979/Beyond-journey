const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.right = sidebar.style.right === "0px" ? "-300px" : "0";
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
    sidebar.style.right = "-300px";
  }
});

// Typewriter effect for search
const searchInput = document.querySelector('.search-box input');
const text = "Where do you want to Holiday?";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    searchInput.placeholder = text.substring(0, i + 1);
    i++;
  } else {
    i = 0;
  }
  setTimeout(typeWriter, 200);
}
typeWriter();

const destinationsData = [
  { name: "Sri Lanka", img: "assets/images/Inter-national-trip/1.jpg" },
  { name: "Europe", img: "assets/images/Inter-national-trip/2.jpg" },
  { name: "Dubai", img: "assets/images/Inter-national-trip/3.jpg" },
  { name: "Mauritius", img: "assets/images/Inter-national-trip/4.jpg" },
  { name: "Singapore", img: "assets/images/Inter-national-trip/5.jpg" },
  { name: "North Goa", img: "assets/images/Inter-national-trip/6.jpg" },
  { name: "Vietnam", img: "assets/images/Inter-national-trip/7.jpg" },
  { name: "Maldives", img: "assets/images/Inter-national-trip/8.jpg" },
  { name: "Malaysia", img: "assets/images/Inter-national-trip/9.jpg" }
];

const container = document.getElementById("destinations");

// Render items
destinationsData.forEach(dest => {
  const div = document.createElement("div");
  div.classList.add("destination-item");
  div.innerHTML = `
    <img src="${dest.img}" alt="${dest.name}" class="destination-img">
    <span class="destination-name">${dest.name}</span>
  `;
  container.appendChild(div);
});

let currentIndex = 0;
function slideDestinations() {
  currentIndex++;
  if (currentIndex > destinationsData.length - 3) {
    currentIndex = 0;
  }
  container.style.transform = `translateX(-${currentIndex * (200 + 24)}px)`;
}

setInterval(slideDestinations, 2000);
