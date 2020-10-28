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
    member_ids = params[:name].map(&:to_i).shuffle
    duty_ids = params[:title].map(&:to_i)
    duty_people_numbers = params[:people].map(&:to_i)

    # 「memberの人数」と 「people の人数の合計」が一致しているかどうかを確認
    unless member_ids.size == duty_people_numbers.sum && duty_ids.size == duty_people_numbers.size
      redirect_to root_path and return 
    end

    datetime = Time.current
    @record_list = []
    duty_people_numbers.each_with_index do |people_number, index|
      member_ids.pop(people_number).each do |member_id|
        @record_list << {
          member_id: member_id,
          duty_id: duty_ids[index],
          datetime: datetime
        }
      end
    end
    Record.create!(@record_list)

    ordered_member_ids = @record_list.map { |record| record[:member_id] }
    ordered_duty_ids = @record_list.map { |record| record[:duty_id] }

    @members = Member.find(ordered_member_ids).sort_by{ |o| ordered_member_ids.index(o.id)}
    @duties = ordered_duty_ids.map { |duty_id| Duty.find(duty_id) }
  end

  private

  def record_params
    params.require(:record).permit(:member_id, :datetime, :duty_id)
  end
end
