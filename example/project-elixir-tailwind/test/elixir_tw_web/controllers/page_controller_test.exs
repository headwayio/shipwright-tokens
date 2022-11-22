defmodule ElixirTwWeb.PageControllerTest do
  use ElixirTwWeb.ConnCase

  test "Renders a header", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Shipwright Tokens - Elixir & Tailwind CSS"
  end

  test "Renders typography", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Typography"
  end

  test "Renders colors", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Colors"
  end
end
