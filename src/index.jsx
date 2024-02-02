import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceTickets from "./components/tickets/ServiceTickets";
import TicketsList from "./components/tickets/TicketsList";
import TicketDetails from "./components/tickets/TicketDetails";
import CreateTicket from "./components/tickets/CreateTicket";
import Employees from "./components/employees/Employees";
import EmployeeList from "./components/employees/EmployeesList";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import CustomerList from "./components/customers/CustomersList";
import Customers from "./components/customers/Customers";
import CustomerDetails from "./components/customers/CustomerDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tickets" element={<ServiceTickets />}>
          <Route index element={<TicketsList />} />
          <Route path=":id" element={<TicketDetails />} />
          <Route path="create" element={<CreateTicket />} />
        </Route>
      </Route>
      <Route path="/" element={<App />}>
        <Route path="employees" element={<Employees />}>
          <Route index element={<EmployeeList />} />
          <Route path=":id" element={<EmployeeDetails />} />
          {/* <Route path="create" element={<CreateEmployee />} />  */}
        </Route>
      </Route>
      <Route path="/" element={<App />}>
        <Route path="customers" element={<Customers />}>
          <Route index element={<CustomerList />} />
          <Route path=":id" element={<CustomerDetails />} />
          {/* <Route path="create" element={<CreateEmployee />} />  */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
