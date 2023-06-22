import { getPassengerTravels } from "../services/passenger.services.js"

export async function getPassengersTravels(req, res) {
  const page = parseInt(req.query.page) || 1;
  const nameFilter = req.query.name || '';

  if (page <= 0) {
    return res.status(400).send('Invalid page value');
  }

  try {
    const passengers = await getPassengerTravels(nameFilter, page);
    return res.send(passengers);
  } catch (error) {
    console.error('Error retrieving passenger travels:', error);
    return res.status(500).send({ error: 'Internal Server Error', message: 'Too many results' });
  }
}
