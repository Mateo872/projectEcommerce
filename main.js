const cart = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const menuHamburger = document.querySelector(".header__menu");
const modalNavbar = document.querySelector(".modal-navbar__background");
const modalNavbarIconClose = document.querySelector(
  ".modal-navbar__close-icon"
);

menuHamburger.addEventListener("click", () => {
  modalNavbar.classList.add("show");
});

modalNavbarIconClose.addEventListener("click", () => {
  modalNavbar.classList.remove("show");
});

modalNavbar.addEventListener("click", () => {
  modalNavbar.classList.remove("show");
});

cart.addEventListener("click", () => {
  cartModal.classList.toggle("show");
});

const minusBtn = document.querySelector(".input__minus");
let inputNumber = document.querySelector(".input__number");
const plusBtn = document.querySelector(".input__plus");

let userInputNumber = 0;

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  inputNumber.value = userInputNumber;
});
plusBtn.addEventListener("click", () => {
  userInputNumber++;
  inputNumber.value = userInputNumber;
});

const btnAdd = document.querySelector(".details__button");
const cartNotification = document.querySelector(".header__cart--notification");
const btnCheckOut = document.createElement("button");
btnCheckOut.classList.add("cart-modal__chekount");
btnCheckOut.textContent = "Checkout";

const cartProductContainer = document.querySelector(
  ".cart-modal__chekout-container"
);

const p = document.createElement("p");
p.classList.add("cart-empty");

p.innerText = "Your cart is empty";

btnAdd.addEventListener("click", () => {
  cartNotification.innerText = +cartNotification.innerText + userInputNumber;

  inputNumber.value = 0;
  userInputNumber = 0;

  if (cartNotification.innerText > 0) {
    cartProductContainer.innerHTML = `
                      <div class="cart-modal__details-container">
                                <img
                                  class="cart-modal__image"
                                  src="./images/image-product-1-thumbnail.jpg"
                                  alt=""
                                />
                                <div>
                                  <p class="cart-modal__product">Autumn Limited Edition...</p>
                                  <p class="cart-modal__price">$125 x${
                                    cartNotification.innerText
                                  } <span>$${
      125 * cartNotification.innerText
    }</span></p>
                                </div>
                                <img
                                  class="cart-modal__delete"
                                  src="./images/icon-delete.svg"
                                  alt="delete"
                                />
                                </div>
  `;
    cartProductContainer.appendChild(btnCheckOut);

    cartProductContainer.addEventListener("click", (e) => {
      if (e.target.className.includes("cart-modal__delete")) {
        e.target.parentElement.remove();
        cartNotification.innerText = 0;

        cartProductContainer.appendChild(p);

        btnCheckOut.remove();
      }
    });
  }
});

const galleryImageContainer = document.querySelector(
  ".gallery__image-container"
);

let index = 1;

const btnGalleryNext = document.querySelector(".gallery__next");
const btnGalleryPrevious = document.querySelector(".gallery__previus");

btnGalleryPrevious.addEventListener("click", previousImage);

btnGalleryNext.addEventListener("click", nextImage);

function nextImage() {
  if (index == 4) {
    index = 1;
  } else {
    index++;
  }
  galleryImageContainer.style.backgroundImage = `url("../images/image-product-${index}-thumbnail.jpg")`;
}

function previousImage() {
  if (index == 1) {
    index = 4;
  } else {
    index--;
  }

  galleryImageContainer.style.backgroundImage = `url("../images/image-product-${index}-thumbnail.jpg")`;
}

const galleryModal = document.querySelector(".modal-gallery__background");

const modalIconClose = document.querySelector(".modal-gallery__close");

modalIconClose.addEventListener("click", () => {
  galleryModal.style.display = "none";
});

galleryImageContainer.addEventListener("click", () => {
  if (window.innerWidth >= 1115) {
    galleryModal.style.display = "grid";
  }
});

const btnModalGalleryNext = document.querySelector(".modal-gallery__next");
const btnModalGalleryPrevious = document.querySelector(
  ".modal-gallery__previus"
);

btnModalGalleryNext.addEventListener("click", nextImageModal);

btnModalGalleryPrevious.addEventListener("click", previousImageModal);

const galleryModalContainer = document.querySelector(
  ".modal-gallery__image-container"
);

function nextImageModal() {
  if (index == 4) {
    index = 1;
  } else {
    index++;
  }
  galleryModalContainer.style.backgroundImage = `url("../images/image-product-${index}-thumbnail.jpg")`;
}

function previousImageModal() {
  if (index == 1) {
    index = 4;
  } else {
    index--;
  }
  galleryModalContainer.style.backgroundImage = `url("../images/image-product-${index}-thumbnail.jpg")`;
}

let galleryTumbnail = document.querySelectorAll(".gallery__thumnail");

galleryTumbnail = [...galleryTumbnail];

galleryTumbnail.forEach((e) => {
  e.addEventListener("click", (e) => {
    galleryImageContainer.style.backgroundImage = `url("../images/image-product-${e.target.id}-thumbnail.jpg")`;
  });
});

let modalGalleryTumbnail = document.querySelectorAll(
  ".modal-gallery__thumnail"
);

modalGalleryTumbnail = [...modalGalleryTumbnail];

modalGalleryTumbnail.forEach((e) => {
  e.addEventListener("click", (e) => {
    galleryModalContainer.style.backgroundImage = `url("../images/image-product-${e.target.id.slice(
      1
    )}-thumbnail.jpg")`;
  });
});
