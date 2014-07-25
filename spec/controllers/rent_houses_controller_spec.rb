# -*- encoding : utf-8 -*-
require 'spec_helper'
describe RentHousesController do

  before do
    @user = User.new
    @rent_house = RentHouse.new
    @rent_house.stub!(to_param: '1')
    controller.stub!(:authenticate_user!)
    controller.stub!(:current_user).and_return(@user)
  end

  let(:current_user) { @user }

  describe 'GET show' do
    it 'should render successful' do
      #RentHouse.should_receive(:find).with('1').and_return(@rent_house) 
      get :show, user_id: 1, id: 1
    end
  end

  describe 'GET new' do
    it 'should render successful' do
      RentHouse.should_receive(:new).and_return(@rent_house)
      get :new, user_id: 1
      assigns[:rent_house].should eq @rent_house
      response.should be_success
    end
  end


  describe 'POST create' do
    
  end

  describe 'GET edit' do

  end

  describe 'PUT update' do

  end

  describe 'DELETE destroy' do
    it 'should delete successful' do
      current_user.stub_chain(:rent_houses, :find).with('1').and_return(@rent_house)
      @rent_house.should_receive(:destroy)
      delete :destroy, user_id: 1, id: 1
      response.should be_redirect
    end 
  end

end
