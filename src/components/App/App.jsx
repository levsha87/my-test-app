import React from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Dialogs from './../Dialogs/Dialogs';
import Header from './../Header/Header';
import Navbar from './../Navbar/Navbar';
import Profile from './../Profile/Profile';
import Music from './../Music/Music';
import News from './../News/News';
import Settings from './../Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper_content'>
          <Route
            path='/profile'
            render={() => (
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path='/dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
