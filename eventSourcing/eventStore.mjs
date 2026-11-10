export const eventList = [];

export function addEvent(event) {
  eventList.push(event);
  return event;
}