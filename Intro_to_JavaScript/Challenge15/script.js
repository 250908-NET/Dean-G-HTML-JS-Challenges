function changeImage() {
  const img =
    document.getElementById("mainImage") || document.querySelector("img");
  if (!img) {
    console.error("No image element found");
    return;
  }
  const srcA = img.dataset.srcA;
  const srcB = img.dataset.srcB;
  if (!srcA || !srcB) {
    console.error("data-src-a or data-src-b not set on image");
    return;
  }

  // resolve to absolute URLs for safe comparison
  let absA, absB;
  try {
    absA = new URL(srcA, document.baseURI).href;
    absB = new URL(srcB, document.baseURI).href;
  } catch (err) {
    absA = srcA;
    absB = srcB;
  }

  const current = img.src;
  const next = current === absA ? absB : absA;

  // preload next image to avoid flash
  const preloader = new Image();
  preloader.src = next;

  // simple fade transition (works even if no CSS present)
  const prevTransition = img.style.transition;
  img.style.transition = "opacity 220ms ease";
  img.style.opacity = "0";
  setTimeout(() => {
    img.src = next;
    img.style.opacity = "1";
    // restore inline transition after the animation
    setTimeout(() => {
      img.style.transition = prevTransition || "";
    }, 240);
  }, 240);
}

window.changeImage = changeImage;
