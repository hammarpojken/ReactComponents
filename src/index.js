import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail.js";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        name={faker.name.firstName()}
        avatar={faker.image.avatar()}
        text={faker.lorem.text()}
        date={faker.date.month()}
      />
      <CommentDetail
        name={faker.name.firstName()}
        avatar={faker.image.avatar()}
        text={faker.lorem.text()}
        date={faker.date.month()}
      />
      <CommentDetail
        name={faker.name.firstName()}
        avatar={faker.image.avatar()}
        text={faker.lorem.text()}
        date={faker.date.month()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
