export const postUser = (user) =>
  fetch("http://localhost:6996/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());

export const patchUser = (id, user) =>
  fetch(`http://localhost:6996/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());

export const deleteUser = (id) =>
  fetch(`http://localhost:6996/users/${id}`, {
    method: "delete",
  }).then((res) => res.json());

export const getUsers = () =>
  fetch("http://localhost:6996/users").then((res) => res.json());

export const getUser = (id) =>
  fetch(`http://localhost:6996/users/${id}`).then((res) => res.json());
