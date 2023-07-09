class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :note, :user_organization_id

  belongs_to :user_organization
end
