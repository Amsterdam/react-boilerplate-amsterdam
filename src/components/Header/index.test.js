import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('<Header />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const wrapper = shallow(
        <Header />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render correctly when logged in', () => {
    const wrapper = shallow(
      <Header isAuthenticated />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('events', () => {
    it('should log in', () => {
      const onLoginLogoutButtonClick = jest.fn();

      const wrapper = shallow(
        <Header
          onLoginLogoutButtonClick={onLoginLogoutButtonClick}
        />
      );

      wrapper.find('.header-component__login').simulate('click');
      expect(onLoginLogoutButtonClick).toHaveBeenCalledWith(undefined, 'datapunt');
    });
  });

  it('should log in adw', () => {
    const onLoginLogoutButtonClick = jest.fn();

    const wrapper = shallow(
      <Header
        onLoginLogoutButtonClick={onLoginLogoutButtonClick}
      />
    );

    wrapper.find('.header-component__login-adw').simulate('click');
    expect(onLoginLogoutButtonClick).toHaveBeenCalledWith(undefined, 'grip');
  });

  it('should render correctly when logged in', () => {
    const onLoginLogoutButtonClick = jest.fn();

    const wrapper = shallow(
      <Header
        isAuthenticated
        onLoginLogoutButtonClick={onLoginLogoutButtonClick}
      />
    );

    wrapper.find('.header-component__logout').simulate('click');
    expect(onLoginLogoutButtonClick).toHaveBeenCalled();
  });
});
