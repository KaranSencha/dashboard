"use strict";

// Disable from drag images by user
const images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("dragstart", function (e) {
    e.preventDefault();
    return false;
  });
}
