import React from 'react';
import './App.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap/';


class List extends React.Component {
  state = {
    statusCovid: {}

  };

  componentDidMount() {
    fetch('https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=PB')
      .then(res => {
        return res.json();
      })
      .then(d => {
        this.state.statusCovid = this.setState({ statusCovid: d.results[12] });

        console.log("state", this.state.statusCovid)
      })
      .catch(error => console.log(error))




  }


  render() {

    return (
      <section className="section0">
        <Container fluid>
          <Row>
            <Col sm={12} xs={12} md={12} lg={12} className="logo">
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={12} lg={12}>
              <h3 className="titulo">{this.state.statusCovid.city} Covid-19</h3>
            </Col>
          </Row>
        </Container>
        <section className="container01 cont-size bord-list" >

          <ListGroup variant="flush" className="conteudo bord-list">
            <ListGroup.Item>Casos confirmados:
              <strong className="red">
                {' ' + this.state.statusCovid.confirmed}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Óbitos confirmados:
              <strong>
                {' ' + this.state.statusCovid.deaths}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Índice de mortalidade:
              <strong>
                {' ' + this.state.statusCovid.death_rate + '%'}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Dados atualizados:
              <strong className="green">
                {' ' + this.state.statusCovid.date}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
          <div className="mt-5 conteudo">
            <h3>#FiqueEmCasa</h3>
            <p>O coronavírus não é brincadeira, não é uma gripe, não é um resfriado.</p>
            <p>O coronavírus mata!</p>          
          </div>
        </section>
        <footer className="conteudo ">
          Copyright © 2020 | Desenvolvido por <a href="https://www.instagram.com/fabiano.antero/" target="_blank"> Fabiano Antero</a>
        </footer>
      </section>

    );
  }
}


export default List;
