import {useState} from 'react';

const useContactForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    jobStatus: '',
    jobEnq: '',
  });

  const handleChange = (e) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default useContactForm;

