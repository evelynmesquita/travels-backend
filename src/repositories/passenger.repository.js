import connection from "../database/database.js";

export async function getPassengersWithTravels(nameFilter, limit, offset) {
    const query = `
        SELECT p."fullName" AS passenger, CAST(COUNT(*) AS integer) AS travels FROM 
        passengers p LEFT JOIN passenger_travels pt ON p.id=pt."passengerId"
        WHERE p."fullName" ILIKE $1
        GROUP BY p."fullName" 
        ORDER BY travels DESC 
        LIMIT $2 OFFSET $3
    `;

    const result = await connection.query(query, [`%${nameFilter}%`, limit, offset]);
    const passengers = result.rows;
    return passengers;
}
