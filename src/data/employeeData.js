const _apiUrl = "/api/employees";

export const getEmployees = async () => {
  const response = await fetch(_apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get Employees List");
  }

  return response.json();
};

export const getEmployee = async (id) => {
  const response = await fetch(`${_apiUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get Employee Information");
  }

  return response.json();
};
