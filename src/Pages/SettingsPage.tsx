import React, { ChangeEvent } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Page, } from '../_components/Page'
import { AppState } from '../_reducers';
import { Table, Form, InputOnChangeData } from 'semantic-ui-react';
import * as settingActions from '../_actions/setting.actions'

type Props = DispatchProp & {
  settingName: string,
}

class SettingsPage extends React.PureComponent<Props> {

  onChange(e: ChangeEvent, data: InputOnChangeData) {
    const { dispatch } = this.props
    const { name, value } = data
    dispatch(settingActions.update(name, value))
  }

  render() {
    return (
      <Page title='Settings'>

        <Form>
          <Table celled columns={2}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Setting</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Form.Field>
                    <label>Refresh rate</label>
                    <Form.Input
                      defaultValue={this.props.settingName}
                      onChange={this.onChange.bind(this)}
                      name='settingName'
                      placeholder='Refresh rate' />
                  </Form.Field>
                </Table.Cell>
                <Table.Cell>Data refresh rate.</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

        </Form>

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

export default connect(mapStateToProps)(SettingsPage)
