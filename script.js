    const form = document.getElementById("signupForm");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");

    // Show modal on form submit
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent real form submission
      modal.style.display = "block";

      form.reset();
    });

    // Close modal when clicking the X
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });

    // Close modal when clicking outside modal content
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });