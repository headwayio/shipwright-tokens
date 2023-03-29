# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  attr_accessor :variant

  FILL_CLASSES = %w[
    text-type-white-primary
    bg-button-active
    hover:bg-button-hover
    disabled:text-type-white-primary
    disabled:bg-button-deactivated
  ].freeze
  OUTLINE_CLASSES = %w[
    text-button-active
    border-button-active
    border
    hover:text-button-hover
    hover:border-button-hover
    disabled:text-button-deactivated
    disabled:border-button-deactivated
  ].freeze
  GHOST_CLASSES = %w[
    text-button-active
    hover:text-button-hover
    disabled:text-button-deactivated
  ].freeze
  BASE_CLASSES = %w[
    flex
    justify-center
    items-center
    rounded-full
    py-[16px]
    px-[24px]
  ].freeze

  BUTTON_TYPE_MAPPINGS = {
    fill: FILL_CLASSES,
    outline: OUTLINE_CLASSES,
    ghost: GHOST_CLASSES
  }.freeze

  def initialize(variant: :fill)
    @variant = variant.to_sym
  end

  def classes
    (BUTTON_TYPE_MAPPINGS[@variant] + BASE_CLASSES).join(' ')
  end
end
