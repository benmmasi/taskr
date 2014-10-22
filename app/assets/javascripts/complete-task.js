$(function() {
  var completeTaskForm = $("form.edit_task");

  var completeTaskDataFromServer = function() {
    var theElement = $(this);
    var taskData = $(this).serialize();
    var conversation = $.ajax({
        url: $(this).attr("action"),
        type: "PATCH",
        data: taskData
    });

   $(this).parents("li").fadeOut();
   return false

  };

  $("body").on("submit", "form.edit_task", completeTaskDataFromServer);

});
