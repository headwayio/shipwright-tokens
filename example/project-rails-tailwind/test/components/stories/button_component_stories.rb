class ButtonComponentStories < ViewComponent::Storybook::Stories
  title 'Atoms'

  control :variant, as: :select, options: %w[fill outline ghost], default: 'fill',
                    description: 'selects styling of button.'
  control :label, as: :text, description: 'sets the label of the button.'
  def button(variant: :fill, label: 'Button')
    render(ButtonComponent.new(variant:).with_content(label))
  end
end
