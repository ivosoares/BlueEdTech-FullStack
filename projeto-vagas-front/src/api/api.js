const Api = {
  apiUrl: 'http://localhost:3001/vagas',
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (vaga) => {
    return fetch(Api.apiUrl, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(vaga)
    })
  },
  fetchPut: (vaga, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(vaga)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;