import React, { Component } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"

// Carousel images
import img3 from "../../../assets/images/small/img-3.jpg"
import img4 from "../../../assets/images/small/img-4.jpg"
import img5 from "../../../assets/images/small/img-5.jpg"

const items = [
  {
    src: img3,
    altText: "Slide 1",
    caption: "Slide 1",
    title: "First slide label",
    dascription: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    src: img4,
    altText: "Slide 2",
    caption: "Slide 2",
    title: "Second slide label",
    dascription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: img5,
    altText: "Slide 3",
    caption: "Slide 3",
    title: "Third slide label",
    dascription: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
]

class SlideDark extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          interval={1000}
        >
          <img
            src={item.src}
            className="d-block w-100"
            alt={item.altText}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{item.title}</h5>
            <p>{item.dascription}</p>
          </div>
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <div className="carousel-inner carousel-dark">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      </React.Fragment>
    )
  }
}

export default SlideDark
