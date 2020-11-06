class HomesController < ApplicationController
  def index
    @record = Record.new
    @members = Member.order(id: :asc)
    @duties = Duty.order(id: :asc)
    @member = Member.new
    @duty = Duty.new
    gon.data = [ 
    ]
  end

  def create
    @duties = params[:title].shuffle!
    @members = params[:name].shuffle!
  end
end
