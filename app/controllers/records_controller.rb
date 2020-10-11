class RecordsController < ApplicationController
  def index
    @record = Record.new
    @duty = Duty.new
    @member = Member.new
    @record = Record.order(id: :asc)
    @member = Member.order(id: :asc)

    # 表示するページの番号を指定
    page = params[:page] || 1

    # １ページあたりの表示件数を指定
    per = params[:per] || 10

    # ページネーションで指定レコードを取得
    # books = Book.page(page).per(per)

    # ページネーションした時の全ページ数
    # total_pages = books.total_pages

    # レスポンスデータの定義
    response = {
 # bookレコードはidとnameフィールドのみ表示する
           # books: books.select(:id, :name),
           # total_pages: total_pages,
      }

    # json形式でレスポンスを返却
    render json: response
  end

  def create
    member_ids = params[:name].map(&:to_i)
    duty_ids = params[:title].map(&:to_i)
    duty_people_numbers = params[:people].map(&:to_i)

    # 「memberの人数」と 「people の人数の合計」が一致しているかどうかを確認
    if member_ids.size == duty_people_numbers.sum
      @members = Member.where(id: member_ids)
      @duties = Duty.where(id: duty_ids)
      # @duties = params[:title].shuffle!
      # @members = params[:name].shuffle!
    else
      redirect_to root_path
    end
  end

  private

  def record_params
    params.require(:record).permit(:member_id, :counter_id, :duty_id)
  end
end
