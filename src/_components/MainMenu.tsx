import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, DispatchProp } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'
import { AppState } from '../_reducers';

type Props = DispatchProp & RouteComponentProps & {

}

class MainMenu extends React.PureComponent<Props> {

  render() {
    const { pathname } = this.props.history.location

    return (
      <Menu pointing secondary stackable>

        <Menu.Item name='home' active={pathname === "/"} as={Link} to='/'>
          <Icon name='home' /> Home
        </Menu.Item>

        <Menu.Item name='settings' active={pathname === "/settings"} as={Link} to='/settings'>
          <Icon name='settings' /> Settings
        </Menu.Item>

      </Menu>
    )
  }
}

function mapStateToProps(state: AppState) {
  return { }
}

const withRouterMainMenu = connect(mapStateToProps)(withRouter(MainMenu))
export { withRouterMainMenu as MainMenu }
