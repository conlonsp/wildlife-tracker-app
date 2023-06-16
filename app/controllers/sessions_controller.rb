class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    user&.authenticate(params[:password])
    session[:user_id] = user.id
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
