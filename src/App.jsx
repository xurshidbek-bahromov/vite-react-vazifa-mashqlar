import React from "react";
import "./App.css";

const Avatar = ({ src, alt }) => <img className="avatar" src={src} alt={alt} />;

const Greeting = ({ name = "Guest" }) => <h2 className="greeting">Hello, {name}!</h2>;

const Box = ({ width, height, color }) => (
  <div className="box" style={{ width, height, backgroundColor: color }}></div>
);

const Button = ({ onClick }) => <button className="button" onClick={onClick}>Click Me</button>;

const Card = ({ children }) => <div className="card">{children}</div>;

const List = ({ items }) => (
  <ul className="list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const StatusMessage = ({ isSuccess }) => <p className={isSuccess ? "success" : "error"}>{isSuccess ? "Success!" : "Error!"}</p>;

const Modal = ({ title, children }) => (
  <div className="modal">
    <h3>{title}</h3>
    {children}
  </div>
);

const IconButton = ({ icon, type }) => <button className="icon-button" type={type}>{icon}</button>;

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
