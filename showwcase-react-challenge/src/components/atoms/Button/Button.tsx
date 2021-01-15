import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }: ButtonProps) => {

  const Button = styled.button`
  background: lightgray;
  border: 1px solid gray;
  color: black;
  padding: 3px;
  width: 8rem;
`

  return (
    <>

      <Button type={"submit"} onClick={onClick}>{text}</Button>

    </>
  )

}

export default Button;
