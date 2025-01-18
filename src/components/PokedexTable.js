import React from "react";

//Pass in pokemon cards
const PokedexTable = ({pokemonCards}) => {
    return (
        <table>
            <tbody>
                <th> Name </th>
                <th> Type </th>
                <th> Email </th>
            </tbody>
            <tr>
                {pokemonCards.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tr>
        </table>
    )
}

export default PokedexTable;