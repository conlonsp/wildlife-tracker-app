class Donation < ApplicationRecord
  belongs_to :user_organization

  validates :amount, presence: true
  validates :amount, numericality: { only_integer: true }
end
