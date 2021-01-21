import React from "react";
import styled from "styled-components";

interface ButtonProps {
  width?: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  modal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ width, text, onClick, modal }: ButtonProps) => {

  const Button = styled.button`
  background: lightgray;
  border: 1px solid gray;
  color: black;
  padding: 3px;
  margin: 0 auto;
  display: block;
  width: ${width};

  &:hover {
    background-color: darkgray;
  }
  
  ${modal ? `
  float: right;
  ` : null}
`

  return (
    <>

      <Button className="btn" type="submit" onClick={onClick}>{text}</Button>

    </>
  )

}

export default Button;
