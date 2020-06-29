import React from "react";
import ImageUploader from "react-images-upload";


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
        <h1>Cloud Computing Images Upload</h1>
        <div
          style={{
            display: "flex",
            border: "1px solid blue",

          }}
        >
          <div
            style={{
                display: "flex",
                height: "500px",
                width: "500px",
                margin:20
            }}
          >
            <ImageUploader
              withIcon={true}
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