const _apiUrl = "/api/servicetickets";

export const getServiceTickets = async () => {
  const response = await fetch(_apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get Service Tickets");
  }

  return response.json();
};

export const getServiceTicket = async (id) => {
  const response = await fetch(`${_apiUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get Service Ticket");
  }

  return response.json();
};

export const createServiceTicket = async (formInput) => {
  const response = await fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formInput),
  });

  if (!response.ok) {
    throw new Error("Service Ticket creation failed");
  }

  return response.json();
};

export const deleteServiceTicket = async (id) => {
  const response = await fetch(`${_apiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to Delete");
  }
};

export const completeServiceTicket = async (id) => {
  const response = await fetch(`${_apiUrl}/${id}/complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to Complete Service Ticket");
  }
};
