class UserController < ApplicationController

  def index
    @users = User.order("created_at DESC")

    if @users.length != 0
      render json: { 
        users: @users
      }
    else
      render json: {
        status: 500,
        errors: ['No users.']
      }
    end
  end

  def show 
    @user = User.find(params[:id])
    if @user
      render json: {
        user: @user
      }
    else
      render json: {
        status: 500,
        errors: ['User not found']
      }
    end
  end

  def create
    @user = User.new(user_param)

    if @user.save
      login!
      render json: {
        status: :created,
        user: @user
      }
    else
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  # def update
  #   user = User.find(params[:id])
  #   user.update_attributes(user_param)
  #   render json: user
  # end

  # def destroy
  #   user = User.find(params[:id])
  #   user.destroy
  #   head :no_content, status: :ok
  # end

  private

  def user_param
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone)
  end
end
