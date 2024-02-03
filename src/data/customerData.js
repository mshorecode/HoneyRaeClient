const _apiUrl = "/api/customers";

export const getCustomers = async () => {
  const response = await fetch(_apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get Customer List");
  }

  return response.json();
};

export const getCustomer = async (id) => {
  const response = await fetch(`${_apiUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get Customer Information");
  }

  return response.json();
};
