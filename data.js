$(document).ready(function() {
    $('#example').DataTable({
        columnDefs: [
            {
                targets: 2, // Colonne index 2 (Date)
                type: "date-euro", // Utilisation d'un type personnalisé
                render: function(data, type, row) {
                    if (type === 'sort' || type === 'type') {
                        let parts = data.split('/');
                        return parts[2] + parts[1] + parts[0]; // Format AAAAMMJJ pour tri correct
                    }
                    return data;
                }
            }
        ]
    });
});
<table id="example" class="display">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Âge</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Jean</td>
            <td>30</td>
            <td data-order="2024-02-14">14/02/2024</td>
        </tr>
        <tr>
            <td>Marie</td>
            <td>25</td>
            <td data-order="2023-12-01">01/12/2023</td>
        </tr>
    </tbody>
</table>
