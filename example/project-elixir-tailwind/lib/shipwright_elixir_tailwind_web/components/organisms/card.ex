defmodule Components.Organisms.Card do
  use Phoenix.Component
  attr :image, :string, default: "https://investorplace.com/wp-content/uploads/2019/07/tech1600a-768x432.jpg"
  attr :is_standard, :boolean, default: true
  attr :text, :string, default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  attr :title, :string, default: "Card Title"
  

  def card(assigns) do
    ~H"""
    <div
      class={[
        "flex flex-col gap-y-[16px] p-[16px] w-[295px] bg-background-white-base rounded-lg shadow-large"
      ]}
    >
      <%= if @image do %>
        <img
          src={@image}
          class="w-[263px] max-h-[160px] rounded-lg shadow-inner"
        />
      <% end %>

      <div class="mb-[16px]">
        <h6 class="h6 h6-400 pb-[4px]"><%= @title %></h6>
        <p class="paragraph-2 text-type-black-secondary"><%= @text %></p>
      </div>

      <div class="w-full h-[1px] mb-[16px] bg-background-white-line"></div>
      <div class="flex flex-row justify-end">
        <Components.Atoms.Button.button variant="fill" label="Button" />
      </div>
    </div>
    """
  end
end
