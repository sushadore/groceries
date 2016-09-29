//back end logic



$(document).ready(function() {
  $("#groceries form").submit(function(event) {
    var groceries = ["item1", "item2", "item3"];
    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      $("." + grocery).text(userInput);
    });

    $("#output").show();
    event.preventDefault();
  });
});
