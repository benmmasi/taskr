$(function() {
  var completeTaskForm = $("form.edit_task");

  var updateTaskDataFromServer = function() {
    var theElement = $(this);
    var taskData = $(this).serialize();
    var conversation = $.ajax({
        url: $(this).attr("action"),
        type: "PATCH",
        data: taskData
    });

   $(this).parents("li").fadeOut().hide(400).appendTo("#complete-task-list").fadeIn();

   return false

  };

  $("body").on("submit", "form.edit_task", updateTaskDataFromServer);

});
