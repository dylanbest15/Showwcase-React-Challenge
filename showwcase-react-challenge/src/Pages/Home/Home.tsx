import React from "react";
import { History } from "history";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";

interface HomeProps {
  history: History
}

const Home: React.FC<HomeProps> = ({ history }) => {

  const handleChange = (event : any) => {
    console.log(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    history.push("/education");
  }

  return (
    <>

      <h2>Home</h2>

      <div className="container">
          <h4>Hi there! Welcome to your education showcase.</h4>
          <h4>Type your name and click "Enter" below to begin!</h4>

          <Input 
            onChange={handleChange}
          />
          
          <br />

          <Button
            text={"Enter"}
            onClick={handleSubmit}
          />

      </div>

    </>
  )
}

export default Home;