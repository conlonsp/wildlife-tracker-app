class OrganizationsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :org_unprocessable

  def index
    render json: Organization.all, status: :ok
  end

  def show
    org = Organization.find(params[:id])
    render json: org, status: :ok
  end

  def create
    org = Organization.create!(org_params)
    render json: org, status: :created
  end

  private

  def org_params
    params.permit(:name, :mission, :location)
  end

  def org_unprocessable(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
end
