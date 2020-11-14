class Member < ApplicationRecord
  has_many :records,  dependent: :destroy
end
