import React from "react";
import styled from "styled-components";

interface ButtonProps {
  width?: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ width, text, onClick }: ButtonProps) => {

  const Button = styled.button`
  background: lightgray;
  border: 1px solid gray;
  color: black;
  padding: 3px;
  margin: 0 auto;
  display: block;
  width: ${width}
`

  return (
    <>

      <Button type={"submit"} onClick={onClick}>{text}</Button>

    </>
  )

}

export default Button;
