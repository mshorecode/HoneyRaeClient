import { useEffect, useState } from "react";
import { getCustomers } from "../../data/customerData";
import { getEmployees } from "../../data/employeeData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createServiceTicket } from "../../data/serviceTicketsData";
import { useNavigate } from "react-router-dom";

const initialState = {
  CustomerId: "",
  EmployeeId: "",
  Description: "",
  Emergency: false,
};

export default function CreateTicket() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
    getEmployees().then(setEmployees);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createServiceTicket(formInput).then(() => {
      navigate("/tickets");
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="Description"
          id="description"
          onChange={handleChange}
          value={formInput.Description}
        />
      </FormGroup>
      <FormGroup>
        <Label for="customerId">Customer</Label>
        <Input
          type="select"
          name="CustomerId"
          id="customerId"
          onChange={handleChange}
          value={formInput.CustomerId}
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="employeeId">Employee</Label>
        <Input
          type="select"
          name="EmployeeId"
          id="employeeId"
          onChange={handleChange}
          value={formInput.EmployeeId}
        >
          <option value="" disabled>
            Select a customer
          </option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="Emergency"
            id="emergency"
            onChange={handleChange}
            checked={formInput.Emergency}
          />{" "}
          Emergency
        </Label>
      </FormGroup>
      <Button type="submit">Create Service Ticket</Button>
    </Form>
  );
}
