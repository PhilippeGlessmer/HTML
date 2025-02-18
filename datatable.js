$(document).ready(function() {
    let table = $('#example').DataTable({
        dom: 'frti', // On garde la structure actuelle
        language: {
            search: "Rechercher :"
        }
    });

    // Ajouter les boutons à côté de la barre de recherche
    $('.dataTables_filter').append(`
        <div class="dt-buttons" style="display:inline-block; margin-left:10px;">
            <button id="btn1" class="btn btn-primary btn-sm">Bouton 1</button>
            <button id="btn2" class="btn btn-secondary btn-sm">Bouton 2</button>
            <button id="btn3" class="btn btn-success btn-sm">Bouton 3</button>
        </div>
    `);

    // Ajouter les événements des boutons
    $('#btn1').on('click', function() {
        alert('Bouton 1 cliqué');
    });

    $('#btn2').on('click', function() {
        alert('Bouton 2 cliqué');
    });

    $('#btn3').on('click', function() {
        alert('Bouton 3 cliqué');
    });
});
