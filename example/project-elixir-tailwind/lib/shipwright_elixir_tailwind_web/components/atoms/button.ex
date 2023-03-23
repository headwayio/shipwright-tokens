defmodule Components.Atoms.Button do
  use Phoenix.Component

  attr :variant, :string, default: "fill"
  attr :label, :string, default: "Button"

  def button(assigns) do
    assigns
    |> render()
  end

  defp render(assigns) do
    ~H"""
      <button class={[
        base_class(),
        variant_class(@variant),
      ]}>
        <div class="flex items-center justify-center">
          <Heroicons.arrow_left class="w-5 h-5 mr-[8px]" />
          <p class="caption">
            <%= @label %>
          </p>
          <Heroicons.arrow_right class="w-5 h-5 ml-[8px]" />
        </div>
      </button>
    """
  end

  defp base_class do
    "flex justify-center items-center rounded-full py-[16px] px-[24px]"
  end

  defp variant_class(variant) do
    fill_classes = "text-type-white-primary bg-button-active hover:bg-button-hover disabled:text-type-white-primary disabled:bg-button-deactivated"
    outline_classes = "text-button-active border-button-active border hover:text-button-hover hover:border-button-hover disabled:text-button-deactivated disabled:border-button-deactivated"
    ghost_classes = "text-button-active hover:text-button-hover disabled:text-button-deactivated"

    case variant do
      "fill" -> fill_classes
      "outline" -> outline_classes
      "ghost" -> ghost_classes
      _ -> fill_classes
    end
  end
end
