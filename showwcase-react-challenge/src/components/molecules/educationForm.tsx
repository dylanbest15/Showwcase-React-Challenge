import React, { useState } from "react";
import Button from "../atoms/Button";
import { addEducation } from "../../redux";
import { useDispatch } from "react-redux";

const EducationForm: React.FC = () => {

  const [education, setEducation] = useState<Object>({
    name: "",
    degree: "",
    field: "",
    start: 0,
    end: 0,
    description: ""
  })

  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEducation({
      ...education,
      [event.target.name]: event.target.value
    })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEducation({
      ...education,
      description: event.target.value
    })
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(education);
    dispatch(addEducation(education));
  }

  return (
    <>

      <form className="modal-form" onSubmit={handleFormSubmit}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name of School *"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="form-group">
              <input
                type="text"
                name="degree"
                className="form-control"
                placeholder="Degree (Bachelor's, Master's, PHD, etc.) *"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="form-group">
              <input
                type="text"
                name="field"
                className="form-control"
                placeholder="Field of Study *"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="form-group">
              <input
                type="text"
                name="start"
                className="form-control"
                placeholder="Start Year *"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="form-group">
              <input
                type="text"
                name="end"
                className="form-control"
                placeholder="End Year (or expected if currently enrolled) *"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="form-group">
              <textarea 
                name="description" 
                className="form-control"
                maxLength = {450}
                placeholder="Description - briefly talk about minor degrees, extra-curriculars, and achievements here." 
                onChange={handleDescriptionChange}></textarea>
            </div>
          </div>
        </div>

        <br />
        <Button width="12rem" text="Save Education"></Button>

      </form>

    </>
  )
}

export default EducationForm;