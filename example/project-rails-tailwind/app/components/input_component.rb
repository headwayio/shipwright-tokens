# frozen_string_literal: true

class InputComponent < ViewComponent::Base
  attr_accessor :arrow, :disabled, :icon, :label, :name, :placeholder, :required, :rows, :successMessage, :type, :value,
                :variant

  def initialize(arrow: false, disabled: false, error_message: '', icon: 'search', label: '', name: '', placeholder: '', required: false,
                 rows: '4', success_message: '', type: 'text', value: '', variant: 'input')

    @arrow = arrow
    @disabled = disabled
    @error_message = error_message
    @icon = icon
    @label = label
    @name = name
    @placeholder = placeholder
    @required = required
    @rows = rows
    @success_message = success_message
    @type = type
    @value = value
    @variant = variant
  end
end
