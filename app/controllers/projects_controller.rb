class ProjectsController < ApplicationController

  def index
    render json: Project.all, status: :ok
  end

  def show
    proj = Project.find(params[:id])
    render json: proj, status: :ok
  end

  def create
    proj = Project.create!(proj_params)
    render json: proj, status: :created
  end
  
end
