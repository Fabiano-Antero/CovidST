import React from 'react';
import './App.css';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap/';
import { Fragment } from 'react'



class List extends React.Component {



  state = {
    statusCovid: [],
    boletin: []
  };

  componentDidMount() {


    fetch('https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=PB')
      .then(res => {
        return res.json();
      })
      .then(d => {
        this.setState({
          statusCovid: d.results.find(

            cidade => cidade.city === 'Santa Rita'

          )
        });
        console.log("state", this.state.statusCovid)
      })
      .catch(error => console.log(error))


    fetch('https://brasil.io/api/dataset/covid19/boletim/data?state=PB')
      .then(res => {
        return res.json();
      })
      .then(b => {
        let dataValue = new Date();
        this.setState({
          boletin: b.results.find(
            dataAt => dataAt.date === '2020-04-21'
          )
        });
        console.log("state", this.state.boletin)
      })
      .catch(error => console.log(error))

  }





  render() {
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

            <ListGroup variant="flush" className=" conteudo conteudo-lef bord-list">
              <ListGroup.Item>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.imgur.com/EhoBGQy.png"></img>&nbsp;&nbsp;&nbsp;Casos confirmados:&nbsp;&nbsp;
              <strong className="red">
                  {' ' + this.state.statusCovid.confirmed }
                </strong> 
              </ListGroup.Item>
              <ListGroup.Item>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.imgur.com/0bYvAFM.png"></img>&nbsp;&nbsp;&nbsp;Óbitos confirmados:&nbsp;&nbsp;
              <strong>
                  3 
              </strong>
              </ListGroup.Item>
              <ListGroup.Item>&nbsp;&nbsp;&nbsp;<img src="https://i.imgur.com/ApVlTed.png"></img>&nbsp;&nbsp;&nbsp;Índice de mortalidade:&nbsp;&nbsp;
              <strong>
                  {' ' + this.state.statusCovid.death_rate}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>&nbsp;&nbsp;&nbsp;<img src="https://i.imgur.com/w38bJkC.png"></img>&nbsp;&nbsp;&nbsp;Dados atualizados:&nbsp;&nbsp;
              <strong className="green">
                  {' ' + this.state.statusCovid.date}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="mt-5 conteudo bord-text">

                  <Card style={{ height: '11rem' }}>

                    <Card.Header>Boletim do governo da Paraíba</Card.Header>
                    <Card.Text>
                      <br></br>
                      <p>Atualização COVID-19 21/04/2020</p>
                      <a href={this.state.boletin.url}>www.paraiba.pb.gov.br</a>

                    </Card.Text>

                  </Card>
                </div>
              </ListGroup.Item>
            </ListGroup>


          </section>

        </section>
        <footer className="conteudo ">
          Copyright © 2020 | Desenvolvido por <a href="https://brasil.io/home/" target="_blank"> Fabiano Antero</a>
          <p>API útilizada no desenvolvimento: <a href="https://www.instagram.com/fabiano.antero/" target="_blank">www.brasil.io</a></p>
        </footer>
      </Fragment>
    );
  }
}


export default List;
