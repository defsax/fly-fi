class UserController < ApplicationController
  def index
    users = User.order("created_at DESC")
    render json: users
  end

  def create
    user = User.create(user_param)
    render json: user
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_param)
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content, status: :ok
  end

  private

  def user_param
    params.require(:user).permit(:name, :email, :password, :phone)
  end
end
