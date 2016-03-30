class TasksController < ApplicationController
  respond_to :html, :json

  def index
    @tasks = Task.all
    respond_with @tasks
  end

  def create
    task = Task.create task_params
    redirect_to project_path(task.project)
  end

  def destroy
    @project = Project.find params[:project_id]
    @task = Task.find params[:id]
    @task.destroy
    head :ok
  end

  private

    def task_params
      params.require(:task).permit(:project_id, :name, :status, :description)
    end
end
