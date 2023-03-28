class InputComponentStories < ViewComponent::Storybook::Stories
  title 'Atoms'

  control :label, as: :text, description: 'label for input.'
  control :hint_text, as: :text, description: 'hint text for input.'
  control :disabled, as: :boolean, description: 'attribute for disabled field.'
  control :arrow, as: :boolean,
                  description: 'display arrow at end of input. available if `variant` is `input`.'
  control :error_message, as: :text,
                          description: 'error message for input.message informing user of invalid input.'
  control :icon, as: :select, options: %w[search],
                 description: 'feather icon name to place on left-hand side of input. you can use any feather icon name in this field, but the most common have been added as options to storybook. available if `variant` is `input`.'
  control :name, as: :text, description: 'form input name.'
  control :placeholder, as: :text, description: 'attribute for placeholder that appears within input.'
  control :required, as: :boolean, description: 'attribute for required field.'
  control :rows, as: :text,
                 description: 'number of rows passed to textarea. available if `variant` is `textarea`.'
  control :success_message, as: :text, description: 'message informing user of valid input.'
  control :type, as: :text,
                 description: 'form input type (i.e. email, password, text, etc.). available if `variant` is `input`.'
  control :value, as: :text,
                  description: 'value of the input. useful for filling in form with previously submitted fields.'
  control :variant, as: :select, options: %w[input],
                    description: 'either input field, select, or textarea.'
  def input(label: '', hint_text: '', disabled: false, arrow: false, error_message: '', icon: 'search', name: '', placeholder: 'Placeholder Text',
            required: false, rows: '4', success_message: '', type: 'text', value: '', variant: 'input')
    render(InputComponent.new(label:, hint_text:, disabled:, arrow:, error_message:, icon:, name:, placeholder:, required:, rows:,
                              success_message:, type:, value:, variant:))
  end
end
