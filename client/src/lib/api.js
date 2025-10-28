export const postUser = (user) =>
  fetch("http://localhost:6996/users", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
