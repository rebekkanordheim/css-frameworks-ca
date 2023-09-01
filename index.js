
// Get a reference to the form element by its ID
  const form = document.getElementById("myForm");

  // Add an event listener for the form submission
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior, which would refresh the page
    event.preventDefault();

    // Redirect to the desired page (feed.html in this case)
    window.location.href = "feed.html";
  });
