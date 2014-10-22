class TasksController < ApplicationController
  before_action :require_login
  def index
    @incomplete_tasks = current_user.tasks.incomplete
    @complete_tasks = current_user.tasks.complete
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @tasks = current_user.tasks
    if @task.save
      current_user.tasks.create(task_params)
      
      render @task
    else
      render :index
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    redirect_to tasks_path
  end



  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
