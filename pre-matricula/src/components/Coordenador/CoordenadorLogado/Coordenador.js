import React from 'react';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import VerPreMatriculasBox from './VerPreMatriculasBox';
import EditarDisciplinasBox from './EditarDisciplinasBox';
import CadastrarDisciplinasBox from './CadastrarDisciplinasBox';
import FixedNavbar from '../../FixedNavbar';


export default class Coordenador extends React.Component {

render(){
  return(
      <div className="topo">
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Grid>
            <Grid.Row className="logadoText">
              <Header>
                Seja bem vindo Coordenador, aqui você pode escolher entre fazer sua matrícula ou ver as disciplinas disponíveis. No topo da página pode ver se há notificações ou sair da página.
              </Header>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column align="center">
                <VerPreMatriculasBox/>
              </Grid.Column>
              <Grid.Column align="center">
                <CadastrarDisciplinasBox/>
              </Grid.Column>
              <Grid.Column align="center">
                <EditarDisciplinasBox/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
    }
}
