import { h, Component, render } from "preact";

import imagesArray from "../public/images";
import AppBar from "./Components/AppBar";
import ImageContainer from "./Components/ImageContainer";

class App extends Component {
    state = {
        images: imagesArray,
        activeImage: 3,
    };

    handleOnClick = (e) => {
        this.setState({
            activeImage: +e.target.id,
        });
    };

    viewNextImage = (e) => {
        const currentImageIndex = +e.target.id;

        // If we reached the last image in the gallery,
        // view rollbak to the first one,
        // otherwise, go to the next one
        const activeImage =
            currentImageIndex === this.state.images.length - 1
                ? 0
                : currentImageIndex + 1;

        this.setState({
            activeImage,
        });
    };

    componentDidMount() {}

    render() {
        return (
            <div className="view">
                <AppBar
                    images={this.state.images}
                    activeImage={this.state.activeImage}
                    onClickHandler={this.handleOnClick}
                />
                <ImageContainer
                    id={this.state.activeImage}
                    srcImage={this.state.images[this.state.activeImage].path}
                    srcImageAlt={this.state.images[this.state.activeImage].alt}
                    onClickHandler={this.viewNextImage}
                />
            </div>
        );
    }
}

const root = document.getElementById("root");

render(<App />, document.body, root);
