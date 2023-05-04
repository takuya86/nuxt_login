class ApplicationController < ActionController::API
	include DeviseTokenAuth::Concerns::SetUserByToken
	skip_before_action :verify_authenticity_token
	before_action :configure_permitted_parameters, if: :devise_controller?

	def configure_permitted_parameters
		devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password])
		devise_parameter_sanitizer.permit(:sign_in, keys: [:name, :name_kana, :email, :password])
	end
end
