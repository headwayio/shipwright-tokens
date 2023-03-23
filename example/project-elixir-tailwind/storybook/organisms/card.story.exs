defmodule Storybook.Card do
  use PhoenixStorybook.Story, :component

  def function, do: &Components.Organisms.Card.card/1

  def variations do
    [
      %Variation{
        id: :default,
      },
    ]
  end
end
