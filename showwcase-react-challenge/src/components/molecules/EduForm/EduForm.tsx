import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import { addEducation } from "../../../redux";
import { useDispatch } from "react-redux";

interface EduFormProps {
  suggestions: string[];
  counter: number;
  increaseCount: any;
}

const EduForm: React.FC<EduFormProps> = ({ suggestions, counter, increaseCount }: EduFormProps) => {

  const [education, setEducation] = useState<Object>({
    id: 0,
    name: "",
    degree: "",
    field: "",
    start: 0,
    end: 0,
    description: "",
  })

  // states used for autocomplete
  const [eduSelected, setEduSelected] = useState<boolean>(false);
  const [eduInput, setEduInput] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const dispatch = useDispatch();

  // whenever counter increases set next id
  useEffect(() => {
    setEducation({
      ...education,
      id: counter
    })
  }, [counter])

  // two event handlers for dealing with autocomplete
  // filters array passed from api call using user's search input
  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilteredSuggestions(suggestions.filter(suggestions =>
      suggestions.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    ))
  }

  // handles user's selection of a suggestion button
  const handleEducationClick = (event: any): void => {
    setEduSelected(true);
    setEduInput(event.target.value);
    setEducation({
      ...education,
      name: event.target.value
    })
    setFilteredSuggestions([]);
  }

  // uses event target name to update correct state property
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEducation({
      ...education,
      [event.target.name]: event.target.value
    })
  }

  // textarea event handler
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEducation({
      ...education,
      description: event.target.value
    })
  }

  // form submit
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(addEducation(education));
    increaseCount();
  }

  // a couple ternary functions in here to help with the autocomplete functionality
  // bootstrap grid layout for mobile formatting
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

                  <button
                    key={suggestion}
                    className="btn suggestion-button"
                    value={suggestion}
                    onClick={handleEducationClick}>
                    {suggestion}
                  </button>

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
                placeholder="Degree *"
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
                placeholder="End Year (or Expected)*"
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
                placeholder="Description - talk about minor degrees, extra-curriculars, and achievements here."
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