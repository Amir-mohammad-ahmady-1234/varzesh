import React from "react";
import Container from "../../../components/common/Container";
import GetProfileDataUser from "../../../server/user/paneluser/GetProfileDataUser";
import Button from "../../../styles/ui/Button";
import InputDesign from "../../../styles/ui/Input";

async function page() {
  const user = await GetProfileDataUser(1);
  console.log(user);

  return (
    <>
      <div className="flex flex-col">
        <Container>
          <div>
            {" "}
            {/* <button className="button-primary sm rounded-2xl">Small</button> */}
            <Button size="sm" className="rounded-2xl">
              Small
            </Button>
            {/* <button className="button-primary md w-100">Medium</button> */}
            <Button size="md" className="w-100">
              Medium
            </Button>
            {/* <button className="button-primary lg">Large</button> */}
            <Button size="lg">Large</Button>
            {/* <button className="button-primary xl">Click Me</button> */}
            <Button size="xl">Click Me</Button>
          </div>
        </Container>
        <div>
          {" "}
          {/* <button className="button-secondary sm">Small</button>
          <button className="button-secondary md">Medium</button>
          <button className="button-secondary lg ">Large</button>
          <button className="button-secondary xl">Click Me</button> */}
          <Button variant="secondary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="md">
            Medium
          </Button>
          <Button variant="secondary" size="lg">
            Large
          </Button>
          <Button variant="secondary" size="xl">
            Click Me
          </Button>
        </div>
      </div>

      <h1>این یک عنوان h1 است</h1>
      <h2>این یک عنوان h2 است</h2>
      <h3>این یک عنوان h3 است</h3>
      <h4>این یک عنوان h4 است</h4>
      <h5>این یک عنوان h5 است</h5>
      <h6>این یک عنوان h6 است</h6>

      <InputDesign type="text" placeholder="ad" />
    </>
  );
}

export default page;
