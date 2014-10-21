class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    @task = Task.new
  end

  def create
    @task = current_user.tasks.create(task_params)

    redirect_to tasks_path

  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :user_id)
  end
end
