// Actions types
const BUG_ADD = "bugAdded"
const BUG_REMOVED = "bugRemoved"
const BUG_RESOLVED = "bugResolved"

// Actions creator
export const bugAdded = description => ({
  type: BUG_ADD,
  payload: { description }
})
export const bugRemoved = id => ({
  type: BUG_REMOVED,
  payload: { id }
})
export const bugResolved = id => ({
  type: BUG_RESOLVED,
  payload: { id }
})

// Reducer
let lastId = 0
export default function (state = [], action) {
  switch (action.type) {
    case BUG_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ];
    case BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true });
    default:
      return state;
  }
}