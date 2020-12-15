const dragStart = e => {
  // IE doesn't support text/plain
  e.dataTransfer.setData("Text", e.target.id);
};

const cancel = e => {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  return false;
};

const dropped = e => {
  let id;
  cancel(e);
  id = e.dataTransfer.setData("Text");
  e.target.appendChild(document.querySelector("#" + id));
};

let img = document.querySelector("#home-snapshot");
img.addEventListener("dragstart", dragStart, false);

let target = document.querySelector("#target-container");
target.addEventListener("drop", dropped, false);
target.addEventListener("dragenter", cancel, false);
target.addEventListener("dragover", cancel, false);
