class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :mission, :location
end
