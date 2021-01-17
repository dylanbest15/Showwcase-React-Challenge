import React, { useState } from "react";
import { History } from "history";
import Button from "../../components/atoms/Button";
import { saveUser } from "../../redux";
import { useDispatch } from "react-redux";
import "../styles.css";

interface HomeProps {
  history: History
}

const Home: React.FC<HomeProps> = ({ history }) => {

  const [userName, setUserName] = useState<string>("");

  const dispatch = useDispatch();

  // form handlers
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  }

  // form submit with dispatch
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(saveUser(userName));
    history.push("/education");
  }

  return (
    <>

      <div className="container home-container">

        <p>Hi there! Welcome to your education showcase.</p>
        <br />

        <p>Type your name and click "Enter" below to begin!</p>

        <form className="form" onSubmit={handleFormSubmit}>
          <input className="form-control home-input" type="text" placeholder="Your Name" onChange={handleInputChange} required />

          <Button width="8rem" text={"Enter"} />
        </form>

      </div>

    </>
  )
}

export default Home;