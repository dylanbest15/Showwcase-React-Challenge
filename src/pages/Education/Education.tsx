import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import API from "../../utils/API";
import Button from "../../components/atoms/Button";
import Sidebar from "../../components/organisms/Sidebar";
import InfoCard from "../../components/organisms/InfoCard";
import EduForm from "../../components/molecules/EduForm";
import "../styles.css";

const customStyles = {
  overlay: {
    backgroundColor: 'gray'
  },
  content: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%'
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

  // selector hooks for getting global state from redux
  const userName: string = useSelector((state: user): string => { return state.user.userName });
  const educations: Object[] = useSelector((state: education): Object[] => { return state.education.educations });

  const [schools, setSchools] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentEdu, setCurrentEdu] = useState<Object>({});
  // counter to give index value to each education added
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // make api call once and set state to increase performance
  useEffect(() => {
    API.getSchools()
      .then((schools: any) => {
        setSchools(schools.map((schools: any) => schools.name));
        setLoading(false);
      })
  }, [])

  // set displayed education to most recently added
  useEffect(() => {
    setCurrentEdu(educations[educations.length - 1]);
    closeModal();
  }, [educations])

  // modal handlers
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // handle counter after submit
  function increaseCount() {
    setCounter(counter + 1);
  }

  // sidebar is only displayed if user has entered an education
  // grid layout for mobile responsiveness
  return (
    <>

      <div className="container education-container">

        <p>Welcome to {userName}'s education page.</p>
        <Button width="12rem" text="Add new education" onClick={openModal}></Button>
        <br />

        <div className="row">

          {currentEdu && !loading ?
            <>

              <div className="col-12 col-md-4">
                <Sidebar educations={educations} currentEdu={currentEdu} setCurrentEdu={setCurrentEdu} />
              </div>
              <div className="col-12 col-md-8">
                <InfoCard education={currentEdu} />
              </div>

            </> 
            : null}

        </div>


        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Education Modal"
        >

          <Button modal={true} width="4rem" text="cancel" onClick={closeModal}></Button>
          <h4>Add New Education</h4>
          <br />

          <EduForm suggestions={schools} counter={counter} increaseCount={increaseCount} />

        </Modal>

      </div>

    </>
  )
}

export default Education;