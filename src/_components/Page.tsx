import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Grid, Container, Dimmer, Loader } from 'semantic-ui-react'
import { AppState } from '../_reducers';
import { MainMenu } from './MainMenu';

type Props = DispatchProp & {
  title: string,
  loading?: boolean,
}

class Page extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    document.title = this.props.title
  }

  render() {
    return (
        <Container fluid>

          <MainMenu />

          <Grid centered>
            <Grid.Row>
              <Grid.Column computer={14} mobile={14} tablet={14}>

                <Dimmer active={this.props.loading} inverted>
                  <Loader inverted content='Loading' />
                </Dimmer>

                {this.props.children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

function mapStateToProps(state: AppState) {
  return { }
}

const connectedPage = connect(mapStateToProps)(Page)
export { connectedPage as Page }
