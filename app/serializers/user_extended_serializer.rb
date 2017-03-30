class UserExtendedSerializer < ActiveModel::Serializer
  attributes :email, :token, :id
end
