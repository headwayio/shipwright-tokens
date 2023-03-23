defmodule Components.Atoms.Input do
  require Logger
  use Phoenix.Component
  attr :arrow, :boolean, default: false
  attr :disabled, :boolean, default: false
  attr :error_message, :string, default: ""
  attr :icon, :string, default: "magnifying_glass"
  attr :label, :string, default: ""
  attr :name, :string, default: ""
  attr :placeholder, :string, default: "Placeholder text"
  attr :required, :boolean, default: false
  attr :success_message, :string, default: ""
  attr :type, :string, default: "text"
  attr :hintText, :string, default: ""


  def input(assigns) do
    assigns
    |> assign_new(:borderColor, fn -> if !string_empty?(assigns[:error_message]), do: "border-error-dark", else: "border-background-black-line" end)
    |> assign_new(:fontColor, fn -> if !string_empty?(assigns[:error_message]), do: "text-error-dark", else: "text-type-black-primary" end)
    |> assign_new(:iconPresent, fn -> !string_empty?(assigns[:icon]) end)
    |> assign_new(:type, fn -> assigns[:value] end)
    |> assign_new(:value, fn -> assigns[:value] end)
    |> render
  end

  defp render(assigns) do
    ~H"""
    <div class="flex flex-col align-start gap-[8px]">
      <div class="flex flex-row items-center justify-between">
        <!-- Label -->
        <label
          for={@name}
          class={[
            "flex flex-row items-center p-0 text-base font-normal",
            @disabled && "text-type-black-deactivated"
          ]}
        >
          <%= @label %>
          <span aria-label="required">
            <%= if @required do %>
              "*"
            <% end %>
          </span>
        </label>

        <!-- Hint Text -->
        <%= if @hintText do %>
          <p
            class={[
              "paragraph-2",
              @disabled && "text-type-black-deactivated",
              !@disabled && "text-type-black-secondary"
            ]}
          >
            <%= @hintText %>
          </p>
        <% end %>
      </div>

      <div
        class={[
          "flex flex-row relative border focus-within:border-button-active focus-within:w-full",
          @borderColor,
          !string_empty?(@error_message) && "border-error-dark",
          (if @disabled, do: "bg-button-deactivatedBackground border-type-black-deactivated", else: "text-type-black-primary")
        ]}
      >
        <!-- Input / Text Area -->
        <input
          class={[
            "peer focus:outline-none text-sm py-[14px] px-[16px] w-full",
            @iconPresent && "pl-[48px]",
          ]}
          disabled={@disabled}
          placeholder={@placeholder}
          name={@name}
          required={@required}
          type={@type}
        />

        <!-- Icon -->
        <%= if @iconPresent do %>
          <Heroicons.magnifying_glass class="absolute pointer-events-none w-5 h-5 left-[16px] top-[14px] peer-disabled:text-type-black-deactivated text-type-black-primary" />
        <% end %>

        <!-- Arrow -->
        <%= if @arrow do %>
          <Heroicons.arrow_right class="absolute pointer-events-none w-5 h-5 right-[16px] top-[14px] peer-disabled:text-type-black-deactivated text-type-black-primary" />
        <% end %>
      </div>  

      <%# Error Message %>
      <%= if !string_empty?(@error_message) do %>
        <span class="flex items-center paragraph-2 text-error-dark">
          <i class="pr-[4px]" />
          <%= @error_message %>
        </span>
      <% end %>

      <%# Success Message %>
      <%= if @success_message do %>
        <span class="flex items-center paragraph-2 text-success-dark">
          <i class="pr-[4px]" />
          <%= @success_message %>
        </span>
      <% end %>
    </div>
    """
  end

  defp string_empty?(string) do
    String.length(String.trim(string)) == 0
  end
end
