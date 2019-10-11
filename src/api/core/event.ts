type Event = {
  id: number
  maxCapacity: number
}

const events: Array<Event> = [
  {
    id: 1,
    maxCapacity: 1000,
  },
  {
    id: 2,
    maxCapacity: 5000,
  },
]

export default {
  listEvents: () => events,
}
