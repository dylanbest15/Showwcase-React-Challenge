import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }: ButtonProps) => {

  const Button = styled.button`
  background: darkgray;
  border-radius: 3px;
  border: 2px solid gray;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`

  return (
    <>

      <Button type={"submit"} onClick={onClick}>{text}</Button>

    </>
  )

}

export default Button;
