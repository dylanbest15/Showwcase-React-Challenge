import React from "react";
import { History } from "history";
import styled from "styled-components";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";

interface HomeProps {
  history: History
}

const Home: React.FC<HomeProps> = ({ history }) => {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  `

  const handleChange = (event : any) => {
    console.log(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    history.push("/education");
  }

  return (
    <>

      <Container className="container">

          <p>Hi there! Welcome to your education showcase.</p>
          <br />

          <p>Type your name and click "Enter" below to begin!</p>

          <Input placeholder={"Your Name"} onChange={handleChange} />
          <br />

          <Button text={"Enter"} onClick={handleSubmit} />

      </Container>

    </>
  )
}

export default Home;