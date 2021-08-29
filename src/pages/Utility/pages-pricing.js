import React from "react"
import { Container, Row, Col } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Pricing Cards
import CardPricing from "./card-pricing"

const PagesPricing = () => {
  const pricings = [
    {
      id: 1,
      title: "Starter",
      description: "Starter plans",
      icon: "edit",
      price: "19",
      duration: "Per month",
      link: "",
      features: [
        { title: "Users" , value: "1"},
        { title: "Storage" , value: "01 GB"},
        { title: "Domain" , value: "No"},
        { title: "Support", value: "No" },
        { title: "Setup", value: "No" },
      ],
    },
    {
      id: 2,
      title: "Professional",
      description: "Professional plans",
      icon: "medal",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { title: "Users" , value: "3"},
        { title: "Storage" , value: "10 GB"},
        { title: "Domain" , value: "1"},
        { title: "Support", value: "Yes" },
        { title: "Setup", value: "No" },
      ],
    },
    {
      id: 3,
      title: "Unlimited",
      description: "Unlimited plans",
      icon: "layer-group",
      price: "49",
      duration: "Per month",
      link: "",
      features: [
        { title: "Users" , value: "5"},
        { title: "Storage" , value: "40 GB"},
        { title: "Domain" , value: "4"},
        { title: "Support", value: "Yes" },
        { title: "Setup", value: "Yes" },
      ],
    },
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Pricing" />

          <Row className="justify-content-center">
            <Col lg={5}>
              <div className="text-center mb-5">
                <h4>Choose your Pricing plan</h4>
                <p className="text-muted mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={9}>
              <Row>
                {pricings.map((pricing, key) => (
                  <CardPricing pricing={pricing} key={"_pricing_" + key} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default PagesPricing
