import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // a placeholder image
  static defaultProps = {
    images: ["http://pets-image.dev-apis.com/pets/none.jpg"],
  };

  //  use arrow function instead of function declaration to return the "this" properties correctly
  handleIndexClick = (e) => {
    // console.log(this);
    this.setState({
      active: +e.target.dataset.index, // turn whatever string into a number
    });
  };

  render() {
    //   cannot use hooks inside here (hooks; anything started with "use", eg. useQuery, useBreedList)
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

// important takeaway from this chapter on class component >> https://frontendmasters.com/courses/complete-react-v8/handling-events-in-class-components/ (skip to 0.55)
// just use function component over class component for most of the time. It makes no difference
