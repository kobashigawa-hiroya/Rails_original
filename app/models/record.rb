class Record < ApplicationRecord
  belongs_to :member
  belongs_to :counter
  belongs_to :duty
end
