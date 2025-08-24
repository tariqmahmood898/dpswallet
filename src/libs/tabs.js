

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Deactivate all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Hide all content
    tabContents.forEach((content) => (content.style.display = "none"));

    // Activate current
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).style.display = "block";

    if (tabId === "output") {
      const html = document.querySelector("#html textarea").value;
      const css = document.querySelector("#css textarea").value;
      const js = document.querySelector("#js textarea").value;

      const iframe = document.getElementById("livePreview");
      const content = `
        <html>
          <head><style>${css}</style></head>
          <body>${html}<script>${js}<\/script></body>
        </html>`;
      iframe.srcdoc = content;
    }
  });
});

