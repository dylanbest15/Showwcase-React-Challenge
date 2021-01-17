import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import { addEducation } from "../../redux";
import { useDispatch } from "react-redux";

interface EduFormProps {
  suggestions: string[];
}

const EduForm: React.FC<EduFormProps> = ({ suggestions }: EduFormProps) => {

  const [education, setEducation] = useState<Object>({
    name: "",
    degree: "",
    field: "",
    start: 0,
    end: 0,
    description: ""
  })

  const [eduSelected, setEduSelected] = useState<boolean>(false);
  const [eduInput, setEduInput] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilteredSuggestions(suggestions.filter(suggestions =>
      suggestions.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    ))
  }

  const handleEducationClick = (event: any): void => {
    setEduSelected(true);
    setEduInput(event.target.value);
    setEducation({
      ...education,
      name: event.target.value
    })
    setFilteredSuggestions([]);
  }

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
    dispatch(addEducation(education));
  }

  return (
    <>

      <form className="modal-form" onSubmit={handleFormSubmit}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="form-group">

              {!eduSelected ?
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name of School *"
                  autoComplete="off"
                  onChange={handleEducationChange}
                  required
                />
                : <input
                  type="text"
                  name="name"
                  value={eduInput}
                  className="form-control"
                  onChange={handleEducationChange}
                  disabled required
                />}


              {filteredSuggestions ?
                filteredSuggestions.slice(0, 8).map(suggestion =>

                  <button className="btn" value={suggestion} onClick={handleEducationClick}>{suggestion}</button>

                )
                : null}

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
                maxLength={450}
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

export default EduForm;