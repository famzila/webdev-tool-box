import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

function Home(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  {' '}
                  <i className="fab fa-js text-warning" /> JavaScript
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-atom text-info" /> React
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  <i className="fab fa-angular text-danger" /> Angular
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  <i className="fab fa-html5 text-info" /> HTML
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  <i className="fab fa-css3 text-primary" /> CSS
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  <i className="fab fa-vuejs text-success" /> VueJS
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Memos</h5>
                <CardTitle tag="h3">
                  <i className="fab fa-github" /> Git
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Posts</h5>
                <CardTitle tag="h3">
                  <i className="fas fa-laugh-squint text-warning" /> Coding
                  pause
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
