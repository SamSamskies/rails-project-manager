const projectShowView = {

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
    return $('<li>').text(task.name);
  }

};

projectShowView.initialize()

export default projectShowView


