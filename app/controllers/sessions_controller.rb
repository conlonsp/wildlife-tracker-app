class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    user&.authenticate(params[:password])
    session[:user_id] = user.id
  end
end
