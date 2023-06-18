class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

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

end
