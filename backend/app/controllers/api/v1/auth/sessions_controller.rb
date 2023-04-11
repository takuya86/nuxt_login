class Api::V1::Auth::SessionsController < DeviseTokenAuth::SessionsController
  before_action :cookie_destroy
  before_action :configure_sign_in_params, only: [:create]

  def cookie_destroy
    request.session_options[:skip] = true
  end

  protected

    def configure_sign_in_params
      devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password, :name, :name_kana, session: [:name, :name_kana, :email, :password]])
      params.require(:session).permit(:name, :name_kana, :email, :password)
    end
end