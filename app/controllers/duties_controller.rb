class DutiesController < ApplicationController
  def new
    @duty = Duty.new
  
  end

  def index
    @duties = Duty.new
    
  end

  def create
    array = duty_params.to_h
    duty = Duty.create!(duty_params)
    @duty = Duty.new
    redirect_to root_path 
    
  end

  def destroy
    duty = Duty.find(params[:id])
    duty.destroy!
    redirect_to root_path 

  end

end

private

def duty_params
  params.require(:duty).permit(:title)
end
