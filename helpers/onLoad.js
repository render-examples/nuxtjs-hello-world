export const onLoad = (callback, delay = 1) => {
  // missed the load event, run now
  if (document.readyState === "complete") {
    setTimeout(() => callback(), delay);
  } else {
    window.addEventListener("load", function() {
      setTimeout(() => callback(), delay);
    });
  }
};