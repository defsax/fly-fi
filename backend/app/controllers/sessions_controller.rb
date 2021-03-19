class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: session_params[:email])

    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
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
      #get user's flights
      flights = Flight.find_by(user_id: current_user[:id])
      puts flights
      puts "logged in? method"
      render json: {
        logged_in: true,
        user: current_user,
        
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
