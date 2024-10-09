import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 15px;
    box-shadow: none;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          query: '',
          message: '',
        });
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <Input name="query" value={formData.query} onChange={handleChange} placeholder="Query" />
        <TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required rows="4" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default BookingForm;
