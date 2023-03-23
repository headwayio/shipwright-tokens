class ColorsComponentStories < ViewComponent::Storybook::Stories
  title 'Tokens'

  def colors
    render(ColorsComponent.new)
  end
end
