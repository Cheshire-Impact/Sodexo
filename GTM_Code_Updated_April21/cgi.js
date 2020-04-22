// Retrieve the GA Variables from Tag Manager
ga(function () {
  var tracker = ga.getAll()[0];
  var trackingId = tracker.get("trackingId");
  var clientId = tracker.get("clientId");
});

//
$(document).ready(function () {
  $("#pardot_iFrame").attr("src", "http://www.example.com/");
});
