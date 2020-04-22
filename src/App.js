import React from 'react';
import './App.css';
import { Container, Row, Col, ListGroup, Alert } from 'react-bootstrap/';
import { Fragment } from 'react'


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
        this.state.statusCovid = this.setState({ statusCovid: d.results[16]});

        console.log("state", this.state.statusCovid)
      })
      .catch(error => console.log(error))




  }


  render() {
    [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        This is a {variant} alert with{' '}
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
        like.
      </Alert>
    ));

    setTimeout(() => {
      console.log('Hello, World!')
    }, 3000);

    return ( 
    <Fragment>

      <section >
        <Container className="section0" fluid>
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
                24
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Óbitos confirmados:
              <strong>
               3
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Índice de mortalidade:
              <strong>
                0.1%
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Dados atualizados:
              <strong className="green">
                 21/04/2020
              </strong>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
          <div className="mt-5 conteudo bord-text">
            <h3>#FiqueEmCasa</h3>
            <p>As atualizações dos dados desta página, são realizadas automaticamente assim que os dados são inseridos no banco de dados.</p>
            
          </div>
          
        </section>

      </section>
      <footer className="conteudo ">
        Copyright © 2020 | Desenvolvido por <a href="https://www.instagram.com/fabiano.antero/" target="_blank"> Fabiano Antero</a>
      </footer>
    </Fragment>
    );
  }
}


export default List;
