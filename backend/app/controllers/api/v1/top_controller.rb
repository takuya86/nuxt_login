class Api::V1::TopController < ApplicationController
  def index
    if user_signed_in?
      user = current_api_v1_user
      render json: user
    else
      render json: { error: 'ログインしていません。' }
    end
  end
end
