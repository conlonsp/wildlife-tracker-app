class UserOrganizationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :organization_id

  has_many :donations
  belongs_to :user
end
