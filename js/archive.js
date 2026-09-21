/* ========================================
   ARCHIVE PRODUCT
======================================== */

const params = new URLSearchParams(window.location.search);
const archiveProductId = params.get("id");

const archiveProduct = archiveProducts[archiveProductId];

if (archiveProduct) {

  /* 商品名 */
  const nameElement =
    document.getElementById("archive-product-name");

  if (nameElement) {
    nameElement.textContent = archiveProduct.name;
  }


  /* アイテム説明 */
  const descriptionElement =
    document.getElementById("archive-product-description");

  if (descriptionElement) {
    descriptionElement.textContent =
      archiveProduct.description;
  }


  /* 写真 */
  const galleryTrack =
    document.getElementById("archive-gallery-track");

  if (galleryTrack) {

    galleryTrack.innerHTML =
      archiveProduct.images
        .map(
          (image) => `
            <div class="gallery-slide">
              <img
                src="${image}"
                alt="${archiveProduct.name}"
              >
            </div>
          `
        )
        .join("");

  }

}

/* ========================================
   ARCHIVE GALLERY
======================================== */

const galleryViewport =
  document.querySelector(".gallery-viewport");

const galleryTrack =
  document.getElementById("archive-gallery-track");

const gallerySlides =
  document.querySelectorAll(".gallery-slide");

const prevButton =
  document.querySelector(".gallery-prev");

const nextButton =
  document.querySelector(".gallery-next");

const dotsContainer =
  document.getElementById("archive-gallery-dots");

const galleryCurrent =
  document.getElementById("gallery-current");

const galleryTotal =
  document.getElementById("gallery-total");


if (
  galleryViewport &&
  galleryTrack &&
  gallerySlides.length > 0 &&
  prevButton &&
  nextButton &&
  dotsContainer
) {

  let currentIndex = 0;

  let startX = 0;
  let startY = 0;
  let diffX = 0;

  let isDragging = false;
  let isHorizontal = null;


  /* 丸ポチを作成 */
  gallerySlides.forEach((slide, index) => {

    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "gallery-dot";
    dot.setAttribute(
      "aria-label",
      `${index + 1}枚目の画像`
    );

    dot.addEventListener("click", () => {
      currentIndex = index;
      updateGallery();
    });

    dotsContainer.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(
      "#archive-gallery-dots .gallery-dot"
    );


  function getSlideWidth() {
    return galleryViewport.clientWidth;
  }


  function getCurrentPosition() {
    return -(currentIndex * getSlideWidth());
  }


  function updateGallery(animate = true) {

    galleryTrack.style.transition =
      animate
        ? "transform 0.35s ease"
        : "none";

    galleryTrack.style.transform =
      `translate3d(${getCurrentPosition()}px, 0, 0)`;


    /* 丸ポチ */
    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === currentIndex
      );
    });


    /* 1 / 2 */
    if (galleryCurrent) {
      galleryCurrent.textContent =
        currentIndex + 1;
    }

    if (galleryTotal) {
      galleryTotal.textContent =
        gallerySlides.length;
    }

  }


  function showNext() {

    currentIndex =
      (currentIndex + 1) %
      gallerySlides.length;

    updateGallery();

  }


  function showPrevious() {

    currentIndex =
      (
        currentIndex -
        1 +
        gallerySlides.length
      ) %
      gallerySlides.length;

    updateGallery();

  }


  nextButton.addEventListener(
    "click",
    showNext
  );

  prevButton.addEventListener(
    "click",
    showPrevious
  );


  /* ========================================
     MOBILE SWIPE
  ======================================== */

  galleryViewport.addEventListener(
    "touchstart",
    (event) => {

      const touch =
        event.touches[0];

      startX = touch.clientX;
      startY = touch.clientY;

      diffX = 0;

      isDragging = true;
      isHorizontal = null;

      galleryTrack.style.transition =
        "none";

    },
    { passive: true }
  );


  galleryViewport.addEventListener(
    "touchmove",
    (event) => {

      if (!isDragging) return;

      const touch =
        event.touches[0];

      diffX =
        touch.clientX - startX;

      const diffY =
        touch.clientY - startY;


      if (isHorizontal === null) {

        isHorizontal =
          Math.abs(diffX) >
          Math.abs(diffY);

      }


      if (!isHorizontal) return;


      event.preventDefault();


      const position =
        getCurrentPosition() +
        diffX;

      galleryTrack.style.transform =
        `translate3d(${position}px, 0, 0)`;

    },
    { passive: false }
  );


  galleryViewport.addEventListener(
    "touchend",
    () => {

      if (!isDragging) return;

      isDragging = false;


      if (
        isHorizontal &&
        Math.abs(diffX) > 50
      ) {

        if (diffX < 0) {
          showNext();
        } else {
          showPrevious();
        }

      } else {

        updateGallery();

      }

      diffX = 0;
      isHorizontal = null;

    },
    { passive: true }
  );


  galleryViewport.addEventListener(
    "touchcancel",
    () => {

      isDragging = false;
      diffX = 0;
      isHorizontal = null;

      updateGallery();

    },
    { passive: true }
  );


  window.addEventListener(
    "resize",
    () => {
      updateGallery(false);
    }
  );


  /* 写真が1枚しかない場合 */
  if (gallerySlides.length === 1) {

    prevButton.style.display =
      "none";

    nextButton.style.display =
      "none";

  }


  updateGallery(false);

}