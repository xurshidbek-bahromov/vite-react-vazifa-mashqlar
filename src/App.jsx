import React from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Greeting from "./components/Greeting";
import Box from "./components/Box";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";
import StatusMessage from "./components/StatusMessage";
import Modal from "./components/Modal";
import IconButton from "./components/IconButton";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Props va Children Mashqlari</h1>
      <h2>1. Avatar</h2>
      <Avatar src="https://via.placeholder.com/150" alt="User Profile" />
      <h2>2. Greeting</h2>
      <Greeting />
      <Greeting name="Xurshid" />
      <h2>3. Box</h2>
      <Box width="200px" height="100px" color="blue" />
      <h2>4. Button</h2>
      <Button onClick={() => alert("Clicked!")} />
      <h2>5. Card</h2>
      <Card>
        <h3>Card Title</h3>
        <p>This is a card component.</p>
      </Card>
      <h2>6. List</h2>
      <List items={["Apple", "Banana", "Cherry"]} />
      <h2>7. Status Message</h2>
      <StatusMessage isSuccess={true} />
      <StatusMessage isSuccess={false} />
      <h2>8. Modal</h2>
      <Modal title="Delete Confirmation">
        <p>Are you sure you want to delete?</p>
        <button onClick={() => alert("Deleted!")}>Yes</button> <button onClick={() => alert("Cancelled!")}>No</button>
      </Modal>
      <h2>9. IconButton</h2>
      <IconButton icon="✅" type="submit" />
      <IconButton icon="❌" type="reset" />
    </div>
  );
}

export default App;
