class UserExtendedSerializer < ActiveModel::Serializer
  attributes :email, :token, :name
end
