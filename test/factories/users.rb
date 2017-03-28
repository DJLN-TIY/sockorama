FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.safe_email }
    password_digest "MyString"
    address "MyString"
  end
end
