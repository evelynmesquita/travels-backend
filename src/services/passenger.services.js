import { getPassengersWithTravels } from "../repositories/passenger.repository.js";

export async function getPassengerTravels(nameFilter, page) {
  const limit = 25;
  const offset = (page - 1) * limit;
  const passengers = await getPassengersWithTravels(nameFilter, limit, offset);
  return passengers;
}

