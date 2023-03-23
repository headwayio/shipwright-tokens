class TypographyComponentStories < ViewComponent::Storybook::Stories
  title 'Tokens'

  def typography
    render(TypographyComponent.new)
  end
end
