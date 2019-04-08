import { h } from "preact";
import ViewButton from "./ViewButton";

const AppBar = (props) => (
    <div className="row header">
        <header className="nav-bar-header">
            <nav>
                <ul className="container">
                    {props.images.map((image, index) => (
                        <li key={image.name}>
                            <ViewButton
                                onClickHandler={props.onClickHandler}
                                name={image.name}
                                id={index}
                                className={
                                    props.activeImage === index
                                        ? "active-button"
                                        : ""
                                }
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    </div>
);

export default AppBar;
