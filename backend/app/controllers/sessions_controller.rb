class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: session_params[:email])

    if @user && @user.authenticate(session_params[:password])
      login!

      flights = Flight.where(user_id: current_user[:id], notification: true)

      render json: {
        logged_in: true,
        user: @user,
        flights: flights
      }
    else
      render json: {
        status: 401,
        errors: ['Invalid email or password. Please try again.']
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      flights = Flight.where(user_id: current_user[:id], notification: true)
      render json: {
        logged_in: true,
        user: current_user,
        flights: flights
      }
    else
      render json: {
        logged_in: false,
        message: 'User not found.'
      }  
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private 

  def session_params
    params.require(:user).permit(:name, :email, :password)
  end
end
