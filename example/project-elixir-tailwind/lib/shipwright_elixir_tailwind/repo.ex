defmodule ShipwrightElixirTailwind.Repo do
  use Ecto.Repo,
    otp_app: :shipwright_elixir_tailwind,
    adapter: Ecto.Adapters.Postgres
end
