class DutiesController < ApplicationController
  def index
    @duties = Duty.new
  end

  def create
    array = duty_params.to_a
    doty = Duty.create!(doty_params)
  end
end

private

def doty_params
  params.require(:doty).permit(:title)
end
