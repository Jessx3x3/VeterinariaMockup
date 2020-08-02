$(document).ready(function(){
    $('#rowNota').hide();
    $('.comentarioArticulo').hide();
    $('.addArticulo').hide();

    $('#read').click(function(){
        $('#rowNota').toggle();
        $('.comentarioArticulo').toggle();
    });

    $('.btnAddArticulo').click(function(){
        $('.addArticulo').toggle();
    });
    
});

function getData(){

    var nombre_comment = $('#nombre_comment').val();
    var comment = $('#comment').val();
    var selectedVal = $("#places option:selected").text();

    if(nombre_comment == null || nombre_comment.length == 0 || /^\s+$/.test(nombre_comment)){
        return alert('Ingrese nombre');
    }
    if(comment == null || comment.length == 0 || /^\s+$/.test(comment) || comment.length > 200){
        return alert('Ingrese comentario hasta 200 caracteres');
    }

    const commentTemplate = (nombreComment,coment) =>
        `<div class="col-lg-3 postComment">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative uno">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-danger"> ${nombreComment} </strong>
                    <h5 class="mb-0"> ${coment} </h5>
                    <p class="card-text mb-auto"></p>
                </div>
            </div>
        </div>`;
    
    $(commentTemplate(nombre_comment,comment,selectedVal)).replaceAll('#comments');

}
