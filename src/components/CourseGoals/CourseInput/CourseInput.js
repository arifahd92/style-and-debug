import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)
  const [btn, setbtn] = useState(true)
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
      setbtn(false)
    }
    if (event.target.value.trim().length == 0) {
      setbtn(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length == 0) {
      return
    }
    props.onAddGoal(enteredValue);
    setIsValid(true)


  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }} >Course Goal</label>
        <input type="text" style={{ color: !isValid ? "red" : "black" }} onChange={goalInputChangeHandler} />
      </div>
      <Button valid={btn} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
