require 'twilio-ruby'
class SendTextController < ApplicationController
  def queue_text
    # add job to delayed_jobs table
    puts text_param
    text_receiver = User.find_by_name(text_param[:user])
    SendSmsJob.perform_later(text_receiver[:name], text_receiver[:phone], text_param[:message])

    render json: {message: "queued text to phone number (#{text_receiver[:phone]}): #{text_receiver[:user]},#{text_param[:message]}"}
  end

  def unqueue_text
    # remove job from delayed_jobs table
  end

  private
  def text_param
    params.require(:text_info).permit(:user, :message)
  end
end
