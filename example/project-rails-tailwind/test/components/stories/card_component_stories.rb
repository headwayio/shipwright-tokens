class CardComponentStories < ViewComponent::Storybook::Stories
  title 'Organisms'

  control :is_standard, as: :boolean, description: 'ensure card has standardized height, regardless of content.'
  control :title, as: :text, description: 'add title to card. title appears above text.'
  control :text, as: :text, description: 'add text to card. text appears below title.'
  control :image, as: :text, description: 'add image to card, enter path to image.'
  def card(is_standard: false, image: 'https://investorplace.com/wp-content/uploads/2019/07/tech1600a-768x432.jpg',
           text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', title: 'Card Title')

    render(CardComponent.new(title:, text:, image:, is_standard:))
  end
end
