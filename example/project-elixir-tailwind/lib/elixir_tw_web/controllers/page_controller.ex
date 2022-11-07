defmodule ElixirTwWeb.PageController do
  use ElixirTwWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
