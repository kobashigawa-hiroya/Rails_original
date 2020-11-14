class MembersController < ApplicationController

  def new
    @member = Member.new
  end

  def index
    
  end

  def create
    member = Member.create!(member_params)
    # duty = Duty.create!(duty_params)
    redirect_to root_path  
  end

  def show
    # @member = Member.find(params[:id])
  end

  def destroy
    @member = Member.find(params[:id])
    # params[:member][:name]
    @member.destroy!
    redirect_to root_path alert: "削除しました！"
  end

  def update
    @member = Member.find(params[:id])
    @member.update!(member_params)
    redirect_to root_path notice: "更新しました"
  end

  def edit
    @member = Member.find(params[:id])
  end

  private

  def member_params
    params.require(:member).permit(:name)
  end

  def doty_params
    params.require(:doty).permit(:title)
  end
  
end
