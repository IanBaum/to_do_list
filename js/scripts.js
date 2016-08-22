$(document).ready(function(){

  function Task(name, details) {
    this.taskName = name;
    this.taskDetails = details;
    this.isDone = false;
  }
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var taskName = $("#taskInput").val();
    var taskDetails = $("#detailsInput").val();

    var newTask = new Task(taskName, taskDetails);

    $("#tasks").append("<div class='checkbox'><input type='checkbox'><label class='task'>" + newTask.taskName + "</label></div>")

    $("#taskInput").val("");
    $("#detailsInput").val("");

    $(".task").last().click(function() {
      $("#show-details").show();
      $("#show-details h2").text(newTask.taskName);
      $("#show-details p").text(newTask.taskDetails);
    });
  });

  $("#tasks").submit(function(event) {
    event.preventDefault();
    $(".checkbox input:checked").parent().remove();
  });
});
