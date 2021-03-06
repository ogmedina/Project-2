$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    const fullEmail = data.email;
    const userEmail = fullEmail.split("@")[0];
    $(".member-name").text(userEmail);
    $(".member-name").attr("data-id", data.id);
  });
});
