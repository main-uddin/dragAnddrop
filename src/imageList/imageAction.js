export const SUCCESS = 'SUCCESS'
export const FAILED = 'FAILED'
export const DRAG__LIST = 'DRAG__LIST'

export const getImageAction = () => dispatch => {
  window
    .fetch(`https://www.breakingbadapi.com/api/characters?limit=20.`)
    .then(r => {
      if (r.ok) return r.json()
      throw new Error('something happened')
    })
    .then(res => dispatch({ type: SUCCESS, payload: res }))
    .catch(e => {
      dispatch({ type: FAILED, payload: [] })
    })
}

export const dragAction = data => ({
  type: DRAG__LIST,
  payload: data
})
