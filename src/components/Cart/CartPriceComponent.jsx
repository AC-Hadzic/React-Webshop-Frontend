function CartPriceComponent({ kolicina, total, popust }) {
    return (
        <div className="info_cijena">
            <table>
                <tbody>
                    <tr>
                        <th> Redovna cijena: </th>
                        <td> {kolicina >= 5 ? (total / (1 - popust)).toFixed(2) : total} EUR</td>
                    </tr>

                    <tr>
                        <th> Popusti: </th>
                        <td><b>{kolicina >= 5 ? popust * 100 : 0}% </b> - {kolicina >= 5 ? (total / (1 - popust) * popust).toFixed(2) : 0} EUR</td>
                    </tr>

                    <tr>
                        <th> Kod za popust: </th>
                        <td> <input type="text" name="kod" id="kod" placeholder=" haha ne postoji kod" /> </td>
                    </tr>

                    <tr>
                        <th> Dodatni troškovi, kamate, carine i reket: </th>
                        <td> 0,00 EUR </td>
                    </tr>
                </tbody>
            </table>

            <br /><br />

            <span> Sveukupno: </span>
            <span> {total?.toFixed(2)} EUR </span>
        </div>
    )
}

export { CartPriceComponent };