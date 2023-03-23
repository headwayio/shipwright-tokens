defmodule Storybook.Colors do
  use PhoenixStorybook.Story, :component

  def function, do: &Components.Tokens.Colors.render/1

  def variations do
    [
      %Variation{
        id: :default,
      },
    ]
  end
end

