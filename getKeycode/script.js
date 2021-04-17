const logKey = (e) => {
  const log = document.querySelector('.log');
  log.textContent += e.code;
}

const getKeycode = (e) => {
  // let keycode;
  // if (window.event) {
  //   keycode += window.event.keycode;
  // } else if (e) {
  //   keycode = e.which;
  // }
  alert("keycode: " + e.which);
}

document.onkeyup = logKey;
document.onkeydown = getKeycode;