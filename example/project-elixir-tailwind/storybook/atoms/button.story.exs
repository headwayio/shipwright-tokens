defmodule Storybook.Button do
  use PhoenixStorybook.Story, :component

  def function, do: &Components.Atoms.Button.button/1

  def variations do
    [
      %Variation{
        id: :default,
      },
    ]
  end
end
