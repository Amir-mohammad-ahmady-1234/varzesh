import React from "react";
import Container from "../../components/common/Container";

function page() {
  return (
    <>
      <div className="flex flex-col">
        <Container>
          <div>
            {" "}
            <button className="button-primary sm rounded-2xl">Small</button>
            <button className="button-primary md w-100">Medium</button>
            <button className="button-primary lg">Large</button>
            <button className="button-primary xl">Click Me</button>
          </div>
        </Container>
        <div>
          {" "}
          <button className="button-secondary sm">Small</button>
          <button className="button-secondary md">Medium</button>
          <button className="button-secondary lg ">Large</button>
          <button className="button-secondary xl">Click Me</button>
        </div>
      </div>

      <h1>این یک عنوان h1 است</h1>
      <h2>این یک عنوان h2 است</h2>
      <h3>این یک عنوان h3 است</h3>
      <h4>این یک عنوان h4 است</h4>
      <h5>این یک عنوان h5 است</h5>
      <h6>این یک عنوان h6 است</h6>
    </>
  );
}

export default page;
