// Function to update meta tags dynamically
function updateMetaTags(title, description, imageUrl) {
  document.querySelector('meta[property="og:title"]').setAttribute("content", title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", description);
  document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl);
  
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", title);
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", description);
  document.querySelector('meta[name="twitter:image"]').setAttribute("content", imageUrl);
}

updateMetaTags(
  "RunWithSAI - Organizer Details",
  "Join RunWithSAI for marathons and charity runs across Cambodia.",
  "https://runwithsai.com/assets/img/logo/about_us1.jpg"
);

// Page loading effect
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".page-loading");
  if (preloader) {
    preloader.classList.remove("active");
    setTimeout(() => preloader.remove(), 1000);
  }
});

// Theme toggle functionality
const themeToggle = document.getElementById("theme-mode");
const logo = document.getElementById("logo");

function updateTheme(isDark) {
  logo.src = isDark ? "assets/svg/sai_logo_white.svg" : "assets/svg/sai_logo_black.svg";
  document.body.classList.toggle("dark-theme", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (localStorage.getItem("theme") === "dark") {
  themeToggle.checked = true;
  updateTheme(true);
}

themeToggle.addEventListener("change", () => updateTheme(themeToggle.checked));

// Reusable function to handle image galleries
function setupImageGallery(galleryId, imageArray) {
  let currentIndex = 0;
  const overlay = document.querySelector(`#${galleryId} .overlay`);
  const remainingCount = document.getElementById(`remainingCount${galleryId}`);
  const modal = new bootstrap.Modal(document.getElementById(`imageModal${galleryId}`));
  const modalImage = document.getElementById(`modalImage${galleryId}`);
  const imageCount = document.getElementById(`imageCount${galleryId}`);

  if (imageArray.length > 4) {
    remainingCount.innerText = `+${imageArray.length - 4}`;
  } else {
    overlay.style.display = "none";
  }

  function updateModalImage() {
    modalImage.src = imageArray[currentIndex];
    imageCount.innerText = `${currentIndex + 1} / ${imageArray.length}`;
  }

  window[`openImageModal${galleryId}`] = function (index) {
    currentIndex = index;
    updateModalImage();
    modal.show();
  };

  window[`prevImage${galleryId}`] = function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateModalImage();
    }
  };

  window[`nextImage${galleryId}`] = function () {
    if (currentIndex < imageArray.length - 1) {
      currentIndex++;
      updateModalImage();
    }
  };
}

// Setup all image galleries
setupImageGallery("RunByHeartUpcoming", [
  "media/events/run_by_heart/run_by_heart1.jpg",
  "media/events/run_by_heart/run_by_heart2.jpg",
  "media/events/run_by_heart/run_by_heart3.jpg",
  "media/events/run_by_heart/run_by_heart4.jpg",
  "media/events/run_by_heart/run_by_heart5.jpg",
  "media/events/run_by_heart/run_by_heart6.jpg",
  "media/events/run_by_heart/run_by_heart7.jpg",
  "media/events/run_by_heart/run_by_heart8.jpg",
  "media/events/run_by_heart/run_by_heart9.jpg"
]);

setupImageGallery("RunByHeartPast", [
  "media/events/run_by_heart/run_by_heart1.jpg",
  "media/events/run_by_heart/run_by_heart2.jpg",
  "media/events/run_by_heart/run_by_heart3.jpg",
  "media/events/run_by_heart/run_by_heart4.jpg",
  "media/events/run_by_heart/run_by_heart5.jpg",
  "media/events/run_by_heart/run_by_heart6.jpg",
  "media/events/run_by_heart/run_by_heart7.jpg",
  "media/events/run_by_heart/run_by_heart8.jpg",
  "media/events/run_by_heart/run_by_heart9.jpg"
]);

setupImageGallery("VirtualRun", [
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual1.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual2.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual3.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual4.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual5.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual6.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual7.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual8.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual9.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual10.jpg",
  "media/events/run_with_sai_virtual_run/run_with_sai_virtual11.jpg"
]);
