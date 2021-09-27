/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
import { CodeBlock, tomorrowNight } from 'react-code-blocks';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardTitle,
  Collapse,
} from 'reactstrap';

function JavaScript() {
  const [collapse, setCollapse] = useState(0);
  const cards = [1, 2, 3, 4, 5];

  const toggle = (e) => {
    let event = e.target.dataset.event;
    setCollapse(Number(event));
  };

  return (
    <>
      <div className="content">
        <Card>
          <CardHeader>
            <h5 className="card-category">Memos</h5>
            <CardTitle tag="h3">
              {' '}
              <i className="fab fa-js text-warning" /> JavaScript
            </CardTitle>
          </CardHeader>
        </Card>
        <Row>
          <Col md="12">
            {cards.map((index) => {
              return (
                <Card style={{ marginBottom: '1rem' }} key={index}>
                  <CardHeader onClick={toggle} className="nav-link">
                    <CardTitle data-event={index} tag="h5">
                      {' '}
                      Variables
                    </CardTitle>
                  </CardHeader>
                  <Collapse isOpen={collapse === index}>
                    <CardBody>
                      <CodeBlock
                        text={'var x=1;'}
                        language={'js'}
                        showLineNumbers={true}
                        theme={tomorrowNight}
                        codeBlock={true}
                      />
                    </CardBody>
                  </Collapse>
                </Card>
              );
            })}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default JavaScript;
