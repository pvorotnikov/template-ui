import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Page, } from '../_components/Page'
import { AppState } from '../_reducers';

type Props = DispatchProp & {
  settingName: string,
}

class HomePage extends React.PureComponent<Props> {

  render() {
    return (
      <Page title='Home Page'>
        Home page content
      </Page>
    )
  }
}

function mapStateToProps(state: AppState) {
  const { settings } = state

  return {
    settingName: settings.settingName,
  }
}

export default connect(mapStateToProps)(HomePage)
