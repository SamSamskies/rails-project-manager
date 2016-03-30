export const projectShowView = {

  initialize() {
    this.$el = $('#project-show-container')
    this.$viewTasksButton = $('#view-tasks-button')
    this.$tasksContainer = $('#tasks-container')

    var projectId = this.$el.data('project-id')

    this.tasksUrl = Routes.project_tasks_path(projectId)
    this.initializeListeners()
  },

  initializeListeners() {
    this.$viewTasksButton.click(e => this.handleViewTasksClick(e))
    this.$el.delegate('.delete-task', 'click', e => this.handleDeleteTask(e))
  },

  handleDeleteTask(e) {
    var $taskButton = $(e.target)
    var taskId = $taskButton.data('task-id')

    $taskButton.closest('.task').remove()
    $.ajax({
      url: `${this.tasksUrl}/${taskId}`,
      type: 'DELETE',
      data: { id: taskId }
    })
  },

  handleViewTasksClick(e) {
    e.preventDefault()
    $.getJSON(this.tasksUrl)
      .done(tasks => this.renderTasks(tasks))
  },

  renderTasks(tasks) {
    tasks.forEach(t => this.$tasksContainer.append(this.buildTaskNode(t)))
  },

  buildTaskNode(task) {
    var $name = $('<span>').text(task.name)
    var $deleteButton = $('<button class="btn btn-danger delete-task">').text('Delete')
      .data('task-id', task.id)

    return $('<li class="task">').append($name)
      .append($deleteButton)
  }

};

