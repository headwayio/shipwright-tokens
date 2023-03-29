defmodule Storybook.Typography do
  use PhoenixStorybook.Story, :component

  def function, do: &Components.Tokens.Typography.render/1

  def variations do
    [
      %Variation{
        id: :default,
      },
    ]
  end
end

