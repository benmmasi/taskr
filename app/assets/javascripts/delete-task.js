$(function() {
  var deleteTaskForm = $("form.button_to");

  var deleteTaskDataFromServer = function() {
    var theElement = $(this);
    var taskData = $(this).serialize();
    var conversation = $.ajax({
        url: $(this).attr("action"),
        type: "DELETE",
        data: taskData
    });

   $(this).parents("li").fadeOut();
   return false

  };

  $("body").on("submit", "form.button_to", deleteTaskDataFromServer);

});
