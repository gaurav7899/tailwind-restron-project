let menu = document.querySelector("#menu-icon");
let mobile_menu = document.querySelector("#mobile-menu")

menu.addEventListener('click', () => {
    mobile_menu.classList.toggle('hidden');
});


// menu.addEventListener("click", function () {
//   menu.innerHTML = `<span><div id="mobile-menu" class="respo-navbar">
//         <ol class="border-4 ">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Menu</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Blog</a></li>
//         </ol>
//     </div> </span>`;
// });
