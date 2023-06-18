class ProjectsController < ApplicationController

  def index
    render json: Project.all, status: :ok
  end

  def show
    proj = Project.find(params[:id])
    render json: proj, status: :ok
  end

end
