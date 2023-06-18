class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :proj_unprocessable
  rescue_from ActiveRecord::RecordNotFound, with: :proj_not_found

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

  private

  def proj_params
    params.permit(:name, :description, :start_date, :end_date, :location, :organization_id)
  end

  def proj_unprocessable(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def proj_not_found
    render json: { errors: ["Project not found"] }, status: :not_found
  end

end
