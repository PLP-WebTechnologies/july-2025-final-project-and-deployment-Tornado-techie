// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Highlight active nav item
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".industry-progress");

  progressBars.forEach(bar => {
    let width = bar.style.width; // save target width
    bar.style.width = "0";       // reset to 0
    setTimeout(() => {
      bar.style.width = width;   // animate to target
    }, 300);
  });
});

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

  

   
       
       
       
       
