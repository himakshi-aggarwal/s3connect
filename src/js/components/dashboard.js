import React from "react";
//import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";
//import { Input } from "antd";

//import "./styles.css";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Images Upload Demo</h1>
        <div
          style={{
            display: "flex",
            border: "1px solid red"
          }}
        >
          <div style={{ marginRight: "15px" }}>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              label=""
              buttonText="Upload Images"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            />
          </div>

        </div>
      </div>
    );
  }
}