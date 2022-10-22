export const post = (url, newBook) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  }).then((res) => res.json());
};

export const get = (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
