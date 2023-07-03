class UserOrganizationsController < ApplicationController
  
  def index
    render json: UserOrganization.all, status: :ok
  end

end
