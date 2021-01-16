import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import API from "../../utils/API";
import Button from "../../components/atoms/Button";
import Sidebar from "../../components/organisms/Sidebar";
import InfoCard from "../../components/organisms/InfoCard";
import "../styles.css";

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
  user: {
    userName: string
  }
}

const Education: React.FC = () => {

  const userName: string = useSelector((state: user): string => { return state.user.userName });

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

      <div className="container education-container">

        <p>Welcome to {userName}'s education page.</p>
        <Button width="12rem" text="Add new education" onClick={openModal}></Button>

        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <InfoCard />
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Education Modal"
        >

          <h4>New Education Modal</h4>
          <Button width="6rem" text="close" onClick={closeModal}></Button>
        </Modal>

      </div>

    </>
  )
}

export default Education;