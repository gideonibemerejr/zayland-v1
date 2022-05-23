import React, { Component } from 'react';

import { Nav, Footer, Menu, Home } from '../../Components';
import { Login } from '../../Pages';
import { Switch, Route, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
class HomePage extends Component {
  state = {
    isMenuOpen: false,
    currentPage: 'HOME',
    user: null,
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
      this.rotateIcon();
    });
  };
  setCurrentPage = (currentPage) => {
    this.setState({ currentPage });
  };
  rotateIcon = () => {
    const plus = document.querySelector('#menu-icon');

    if (this.state.isMenuOpen) {
      plus.classList.add('rotate');
    } else {
      plus.classList.remove('rotate');
    }
  };

  renderMenu = () => {
    return <Menu toggleMenu={this.toggleMenu} />;
  };

  async componentDidMount() {
    const user = await userService.getUser();

    if (user && user.firstName) {
      this.setState({ user: user.firstName });
    }
    // userService.getUser().then((res) => {
    // 	if (res.firstName) {
    // 		this.setState({ user: res.firstName });
    // 	}
    // });
  }

  setUser = (firstName) => {
    this.setState({ user: firstName });
  };
  render() {
    return (
      <>
        {/* {this.state.isMenuOpen && this.renderMenu()} */}

        <div
          className={`homepage--container bg-wish-we-had-a-chance
           pa2 flex flex-column items-center w-100`}
        >
          <Nav toggleMenu={this.toggleMenu} user={this.state.user} />
          <Switch>
            <Route
              exact
              path='/'
              render={({ history }) => (
                <Home
                  setCurrentPage={this.setCurrentPage}
                  history={history}
                  // user={this.state.user}
                  // setUser={this.setUser}
                />
              )}
            />
            <Route
              path='/login'
              render={() => <Login setCurrentPage={this.setCurrentPage} />}
            />
            {/* <Route
              path='/nobody-knows'
              render={() => (
                <NobodyKnows setCurrentPage={this.setCurrentPage} />
              )}
            />
            <Route
              path='/credits'
              render={() => <Credits setCurrentPage={this.setCurrentPage} />}
            /> */}
            {/* <Route
							path="/watch"
							render={() => <Watch setCurrentPage={this.setCurrentPage} />}
						/> */}

            <Redirect to='/' />
          </Switch>
          {this.state.user && <Footer />}
        </div>
      </>
    );
  }
}

export default HomePage;
