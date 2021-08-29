import PropTypes from 'prop-types'
import React from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const LoadingContainer = () => <div>Loading...</div>

const MapsGoogle = props => {
  const selectedPlace = {}

  function onMarkerClick() {
    alert("You clicked in this marker")
  }

  const Data = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
    },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Markers</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      style={{ width: "100%", height: "100%" }}
                      zoom={14}
                    >
                      <Marker
                        title={"The marker`s title will appear as a tooltip."}
                        name={"SOMA"}
                        position={{ lat: 37.778519, lng: -122.40564 }}
                      />
                      <Marker name={"Dolores park"} />
                      <InfoWindow>
                        <div>
                          <h1>{selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Overlays</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      zoom={14}
                      style={{ width: "100%", height: "100%" }}
                      initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807,
                      }}
                    >
                      <Marker
                        onClick={(a, b, c) => {
                          onMarkerClick(a, b, c)
                        }}
                      />
                      <InfoWindow>
                        <div>
                          <h1>{selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      zoom={14}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <InfoWindow>
                        <div>
                          <h1>{selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Ultra Light</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      zoom={14}
                      styles={Data}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Marker
                        onClick={(a, b, c) => {
                          onMarkerClick(a, b, c)
                        }}
                      />
                      <InfoWindow>
                        <div>
                          <h1>{selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

MapsGoogle.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(MapsGoogle)
)
