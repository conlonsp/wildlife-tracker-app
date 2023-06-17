class OrganizationsController < ApplicationController
  def index
    render json: Organizations.all, status: :ok
  end
end
