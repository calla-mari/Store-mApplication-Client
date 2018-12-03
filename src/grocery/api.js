const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const addItem = (grocery_list, user) => {
  return fetch(apiUrl + '/grocery_lists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      grocery_list: {
        checkbox: grocery_list.checkbox,
        item: grocery_list.item,
        amount: grocery_list.amount
      }
    })
  })
}

export const editItem = (grocery_list, user) => {
  return fetch(apiUrl + '/grocery_lists', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      grocery_list: {
        checkbox: grocery_list.checkbox,
        item: grocery_list.item,
        amount: grocery_list.amount
      }
    })
  })
}

export const showAllItem = user => {
  return fetch(apiUrl + '/grocery_lists', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const deleteItem = user => {
  return fetch(apiUrl + '/grocery_lists', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}