class Project < ApplicationRecord
  belongs_to :organization

  validates :name, :description, presence: true
  validates :description, length: { in: 50..250 }
end
