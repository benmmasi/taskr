class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks.incomplete
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @tasks = current_user.tasks
    if @task.save
      current_user.tasks.create(task_params)
      redirect_to tasks_path
    else
      render :index
    end
  end



  private

  def task_params
    params.require(:task).permit(:title, :description, :user_id)
  end
end
