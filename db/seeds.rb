# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#product = Product.create!(
# [
#   {group: "Blended", name: "Painters", color: "Various", style: "Crew", size: "S", quantity: "20", price: "$15", image: "http://ecx.images-amazon.com/images/I/91-M8oHN-TL._UX679_.jpg", material: "Cotton/Polyester/Polyurethane"}
# ]
# )

require 'csv'

CSV.foreach(File.join(Rails.root, "lib", "Copy of Sockorama Inventory"), headers: true, header_converters: :symbol)
   .each do |product|
     sock = Product.create(
       name: product[:name],
       sock_type: product[:type],
       color: product[:primary_color],
       style: product[:style],
       price: product[:price_per_pair].slice!(1..-1),
       image: product[:images],
       materials: product[:materials],
       description: product[:description]
     )
     product[:quantity_per_size].split(", ").each do |s|
       inv = Inventory.create(
         size: s.split(": ")[0],
         quantity: s.split(": ")[1],
         product_id: sock.id
       )
     end
   end

30.times do
  user = User.create!(
    email: { Faker::Internet.safe_email }
  )
end
