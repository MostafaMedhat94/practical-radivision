import { h } from "preact";

const ImageContainer = (props) => (
    <div className="image-container">
        <img
            id={props.id}
            src={props.srcImage}
            alt={props.srcImageAlt}
            onClick={props.onClickHandler}
        />
    </div>
);

export default ImageContainer;
