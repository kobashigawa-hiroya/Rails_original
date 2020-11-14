require 'test_helper'

class DutiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get duties_index_url
    assert_response :success
  end

  test "should get create" do
    get duties_create_url
    assert_response :success
  end

end
