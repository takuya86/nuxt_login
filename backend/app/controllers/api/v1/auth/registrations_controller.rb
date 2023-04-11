class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  private

    def sign_up_params
      params.require(:registration).permit(:user_id, :name, :name_kana, :email, :password)
    end
end
