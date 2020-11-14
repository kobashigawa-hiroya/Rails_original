ActiveAdmin.register Member do
  permit_params :name, :display
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :name, :display
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :display]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
