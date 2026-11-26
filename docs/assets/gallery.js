const dialog = document.querySelector(".photo-dialog");
const frame = dialog.querySelector(".photo-frame");
const caption = dialog.querySelector("#pildi-pealkiri");

document.addEventListener("click", (event) => {
  const link = event.target.closest(".photo-link");
  if (!link || event.defaultPrevented || event.ctrlKey || event.metaKey ||
      event.shiftKey || event.altKey || typeof dialog.showModal !== "function") {
    return;
  }

  event.preventDefault();
  const photo = document.createElement("img");
  photo.src = link.href;
  photo.alt = link.querySelector("img").alt;
  caption.textContent = link.nextElementSibling.textContent;
  frame.replaceChildren(photo);
  dialog.showModal();
});
