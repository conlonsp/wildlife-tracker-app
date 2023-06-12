class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :note, :user_organization_id
end
