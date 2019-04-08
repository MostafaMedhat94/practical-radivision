import { h } from "preact";

const ViewButton = (props) => (
    <button
        id={props.id}
        className={props.className}
        name={props.name}
        onClick={props.onClickHandler}
    >
        {props.name}
    </button>
);

export default ViewButton;
