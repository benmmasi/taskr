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

   $(this).parents("li").fadeOut();
   conversation.done(onComplete);
   return false;
  };

  var onComplete = function(html) {
    var completeList = $("#complete-task-list");
    var completedItem = $(html).hide();
    completeList.append(completedItem);
    completedItem.fadeIn();
  };


  $("body").on("submit", "form.edit_task", updateTaskDataFromServer);

});
