class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :user_unprocessable

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :avatar_url, :bio)
  end

  def user_unprocessable(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
end
