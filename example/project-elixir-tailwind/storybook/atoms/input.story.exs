defmodule Storybook.Input do
  use PhoenixStorybook.Story, :component

  def function, do: &Components.Atoms.Input.input/1

  def variations do
    [
      %Variation{
        id: :default,
      },
    ]
  end
end
