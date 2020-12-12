const { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } = require("./eventConstants")

const createEvent = (events) => {
    return {
        type: CREATE_EVENT,
        payload: events
    }
}

const updateEvent = (events) => {
    return {
        type: UPDATE_EVENT,
        payload: events
    }
}

const deleteEvent = (eventsID) => {
    return {
        type: DELETE_EVENT,
        payload: eventsID
    }
}

export {
    createEvent,
    updateEvent,
    deleteEvent
}