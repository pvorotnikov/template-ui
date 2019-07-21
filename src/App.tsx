import './App.less';
import React from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom'
import { DispatchProp, connect } from 'react-redux';

import { history } from './_helpers/history'
import * as alertActions from  './_actions/alert.actions'
import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/SettingsPage';


type Props = DispatchProp & {

}

class App extends React.PureComponent<Props> {

  componentDidMount() {
    history.listen((location, action) => {
      this.props.dispatch(alertActions.clear())
    })
  }

  render() {
    return <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  }
}

export default connect()(App);
