import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import API from "../../utils/API";
import Button from "../../components/atoms/Button";
import Sidebar from "../../components/organisms/Sidebar";
import InfoCard from "../../components/organisms/InfoCard";
import EducationForm from "../../components/molecules/educationForm";
import "../styles.css";

const customStyles = {
  overlay: {
    backgroundColor: 'gray'
  },
  content: {
    top: '10%',
    left: '20%',
    right: '20%',
    height: '500px'
  }
}

Modal.setAppElement('#root');

interface user {
  user: {
    userName: string
  }
}

interface education {
  education: {
    educations: Object[]
  }
}

const Education: React.FC = () => {

  const userName: string = useSelector((state: user): string => { return state.user.userName });
  const educations: Object[] = useSelector((state: education): Object[] => {return state.education.educations});

  const [schools, setSchools] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentEdu, setCurrentEdu] = useState<Object>({});

  // make api call to server on load
  useEffect(() => {
    API.getSchools()
      .then((schools: any) => {
        setSchools(schools.map((schools: any) => schools.name));
      })
  }, [])

  // set displayed education to most recently added
  useEffect(() => {
    setCurrentEdu(educations[educations.length -1]);
    closeModal();
  }, [educations])

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
        <br />

        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <InfoCard education={currentEdu} />
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Education Modal"
        >

          <Button modal={true} width="4rem" text="back" onClick={closeModal}></Button>
          <h4>Add New Education</h4>
          <br />

          <EducationForm />

        </Modal>

      </div>

    </>
  )
}

export default Education;