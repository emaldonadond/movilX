var serviceURL = "http://172.16.22.91/movilx_prueba/layerx/";

var editions;

$('#editionListPage').bind('pageinit', function(event) {
  loadEdition();
});

/*
* Descripcion: Esta funcion, nos devuelve las variables enviadas por GET a esta pagina.
*
*/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


function loadEdition(){
  var dateFromGetDate = getUrlVars()["date"];
  var dateFromGetSuplemento = getUrlVars()["suplemento"];

  $('#editionList').append('Details Edition, '+
    'Date: '+dateFromGetDate+
    'Suplemento: '+dateFromGetSuplemento
    );
  $('#editionList').listview('refresh');
 
}

function getEditionList() {
  $.getJSON(serviceURL + 'geteditions.php', function(data) {
    $('#editionList li').remove();
    editions = data.items;
    $.each(editions, function(index, edition) {
      $('#editionList').append(
          '<li class="loc-image"> <div>' + 
          '<img src="http://nuestrodiario.com/nuestrodiario/pages/edicion/2013/02/07/edicion_nacional/1.jpg"/>' + 
          '</div></li>' +

          '<li class="loc-credits">' + 
          '<img src="resources/images/profile-01.png"/>' +
          '<h3>' + edition.edition_publication_date + '</h3>' +
          '<p>by <a href="#">sandra</a>.</p>' +
          '</li>' +

          '<li class="loc-comments">' + 
          '<p>2 comments, 4 likes</p>' +
          '</li>');
    });
    $('#editionList').listview('refresh');
  });
}

