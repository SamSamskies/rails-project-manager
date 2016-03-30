class TasksController < ApplicationController
  respond_to :html, :json

  def index
    @tasks = Task.all
    respond_with @tasks
  end

  def destroy
    @project = Project.find params[:project_id]
    @task = Task.find params[:id]
    @task.destroy
    head :ok
  end
end
