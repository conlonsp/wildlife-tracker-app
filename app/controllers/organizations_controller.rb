class OrganizationsController < ApplicationController
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
end
