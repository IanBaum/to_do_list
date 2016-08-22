$(document).ready(function(){

  function Task(name, details) {
    this.taskName = name;
    this.taskDetails = details;
  }

  $("#userInput").submit(function(event) {
    event.preventDefault();

    var taskName = $("#taskInput").val();
    var taskDetails = $("#detailsInput").val();

    var newTask = new Task(taskName, taskDetails);

    $("#tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>")
  })
});
