import React, { Component } from "react";
import { render } from "react-dom";

import ModalImage from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-modal-image</h1>

        <p>
          Images for the demo are provided by{" "}
          <a href="https://picsum.photos/">https://picsum.photos/</a>.
        </p>

        <p>Example of a square image</p>

        <ModalImage
          alt="Here is the caption"
          preview="https://picsum.photos/100/100?image=0"
          fullscreen="https://picsum.photos/500/500?image=0"
          download="https://picsum.photos/1000/1000?image=0"
        />

        <p>Example of a vertical image</p>

        <ModalImage
          alt="Here is a caption too"
          preview="https://picsum.photos/20/100?image=3"
          fullscreen="https://picsum.photos/100/500?image=3"
          download="https://picsum.photos/200/1000?image=3"
        />

        <p>Example of a horizontal image</p>

        <ModalImage
          alt="This is the caption for the third image. This is a long one."
          preview="https://picsum.photos/100/20?image=2"
          fullscreen="https://picsum.photos/500/100?image=2"
          download="https://picsum.photos/1000/200?image=2"
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
