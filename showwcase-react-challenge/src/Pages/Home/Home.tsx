import React, { useState } from "react";
import { History } from "history";
import Button from "../../components/atoms/Button";
import { saveUser } from "../../redux";
import { useDispatch } from "react-redux";
import "./index.css";

interface HomeProps {
  history: History
}

const Home: React.FC<HomeProps> = ({ history }) => {

  const [userName, setUserName] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setUserName(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    // check for user input
    if (userName) {
      dispatch(saveUser(userName));
      history.push("/education");
    }
  }

  return (
    <>

      <div className="container home-container">

        <p>Hi there! Welcome to your education showcase.</p>
        <br />

        <p>Type your name and click "Enter" below to begin!</p>

        <form className="form" onSubmit={handleSubmit}>
          <input className="home-input" type="text" placeholder="Your Name" onChange={handleChange} required />

          <Button text={"Enter"} onClick={handleSubmit} />
        </form>

      </div>

    </>
  )
}

export default Home;