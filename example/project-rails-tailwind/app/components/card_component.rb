# frozen_string_literal: true

class CardComponent < ViewComponent::Base
  attr_reader :image, :is_standard, :text, :title

  def initialize(image: '', is_standard: false, text: '', title: '')
    @image = image
    @is_standard = is_standard
    @text = text
    @title = title
  end
end
