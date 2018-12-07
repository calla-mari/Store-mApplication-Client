import apiUrl from '../apiConfig'

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
        store: grocery_list.store,
        // checkbox: grocery_list.checkbox,
        department: grocery_list.department,
        item: grocery_list.item,
        amount: grocery_list.amount
      }
    })
  })
}

export const onEditItem = (id, grocery_list, user) => {
  return fetch(apiUrl + `/grocery_lists/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      grocery_list
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

export const onDeleteItem = (id, user) => {
  return fetch(apiUrl + `/grocery_lists/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
