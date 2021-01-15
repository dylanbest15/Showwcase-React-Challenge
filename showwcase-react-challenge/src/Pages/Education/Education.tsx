import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import API from "../../utils/API";

const customStyles = {
  content: {
    top: '20%',
    left: '20%',
    right: '20%',
    bottom: '20%'
  }
}

Modal.setAppElement('#root');

interface user {
  userName: string
}

const Education: React.FC = () => {

  const userName: string = useSelector((state: user): string => { return state.userName });

  const [schools, setSchools] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(userName);
    API.getSchools("")
      .then((schools: any) => {
        console.log(schools.map((schools: any) => schools.name));
      })
  }, [])

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>

      <div className="container">

        <p>Welcome to {userName}'s education page.</p>
        <button onClick={openModal}>Add new education</button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Education Modal"
        >

          <h4>New Education Modal</h4>
          <button onClick={closeModal}>close</button>
        </Modal>

      </div>

    </>
  )
}

export default Education;