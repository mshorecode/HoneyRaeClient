import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import {
  completeServiceTicket,
  deleteServiceTicket,
  getServiceTickets,
} from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);

  const deleteTicket = (id) => {
    if (window.confirm("Delete Ticket?")) {
      deleteServiceTicket(id).then(() => {
        setTickets((prevTickets) =>
          prevTickets.filter((ticket) => ticket.id !== id),
        );
      });
    }
  };

  const completeTicket = (id) => {
    if (window.confirm("Complete Service Ticket?")) {
      completeServiceTicket(id).then(() => {
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.id === id ? { ...ticket, completd: true } : ticket,
          ),
        );
        window.location.reload();
      });
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td className="buttons">
              <Button
                type="button"
                color="danger"
                onClick={() => deleteTicket(t.id)}
              >
                {" "}
                Delete{" "}
              </Button>
              {t.dateCompleted === null && (
                <Button
                  color="success"
                  id="complete"
                  onClick={() => completeTicket(t.id)}
                >
                  {" "}
                  Complete{" "}
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
