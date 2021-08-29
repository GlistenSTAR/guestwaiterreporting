import React from "react"

import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiVideo = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Video" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Ratio video 16:9</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
                    <iframe
                      title="test"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Ratio video 21:9</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="ratio ratio-21x9">
                    <iframe
                      title="YouTube video"
                      allowfullscreen
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Ratio video 4:3</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="ratio ratio-4x3">
                    <iframe
                      title="YouTube video"
                      allowfullscreen
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Ratio video 1:1</CardTitle>
                  <p className="card-title-desc">
                    Aspect ratios can be customized with modifier className.
                  </p>

                  <div className="ratio ratio-1x1">
                    <iframe
                      title="YouTube video"
                      allowfullscreen
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiVideo
