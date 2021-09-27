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
import React from 'react';

// reactstrap components
import { Card, CardHeader, Row, Col, CardTitle } from 'reactstrap';

function Angular() {
  return (
    <>
      <div className="content">
        <Card>
          <CardHeader>
            <h5 className="card-category">Memos</h5>
            <CardTitle tag="h3">
              {' '}
              <i className="fab fa-angular text-danger" /> Angular
            </CardTitle>
          </CardHeader>
        </Card>
        <Row>
          <Col md="12"></Col>
        </Row>
      </div>
    </>
  );
}

export default Angular;
