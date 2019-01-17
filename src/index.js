import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
          date={faker.date.month()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
          date={faker.date.month()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
          date={faker.date.month()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
