import React from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"

// Carousel
import Slide from "./CarouselTypes/slide"
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol"
import Slidewithindicator from "./CarouselTypes/slidewithindicator"
import Slidewithcaption from "./CarouselTypes/slidewithcaption"
import Slidewithfade from "./CarouselTypes/slidewithfade"
import Slideindividual from "./CarouselTypes/slideindividual"
import SlideDark from "./CarouselTypes/slidedark"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiCarousel = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Carousel" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4"> Slides only</CardTitle>
                  <p className="card-title-desc">
                    Here’s a carousel with slides only. Note the presence of the{" "}
                    <code>.d-block</code> and <code>.img-fluid</code> on
                    carousel images to prevent browser default image alignment.
                  </p>
                  <Slide />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">With controls</CardTitle>
                  <p className="card-title-desc">
                    Adding in the previous and next controls:
                  </p>
                  <Slidewithcontrol />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">With indicators</CardTitle>
                  <p className="card-title-desc">
                    You can also add the indicators to the carousel, alongside
                    the controls, too.
                  </p>
                  <Slidewithindicator />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">With captions</CardTitle>
                  <p className="card-title-desc">
                    Add captions to your slides easily with the{" "}
                    <code>.carousel-caption</code> element within any{" "}
                    <code>.carousel-item</code>.
                  </p>
                  <Slidewithcaption />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Crossfade</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.carousel-fade</code> to your carousel to animate
                    slides with a fade transition instead of a slide.
                  </p>
                  <Slidewithfade />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Individual .carousel-item interval</CardTitle>
                  <p className="card-title-desc">Add <code>interval=""</code> to a <code>.carousel-item</code> to change the amount of time to delay between automatically cycling to the next item.</p>
                  <Slideindividual />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dark variant</CardTitle>
                  <p className="card-title-desc">Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the <code>filter</code> CSS property. Captions and controls have additional Sass variables
                    =that customize the <code>color</code> and <code>background-color</code>.</p>
                  <SlideDark />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiCarousel
