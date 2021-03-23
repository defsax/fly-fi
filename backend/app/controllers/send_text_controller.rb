require 'twilio-ruby'
class SendTextController < ApplicationController
  def queue_text
    # add job to delayed_jobs table
    puts text_param
    
    SendSmsJob.perform_now(current_user[:phone], text_param[:message])
    render json: {message: "Queued text to phone number (#{current_user[:phone]}): #{text_param[:message]}"}
  end

  private
  def text_param
    params.require(:text_info).permit(:message)
  end
end