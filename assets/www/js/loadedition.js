var serviceURL = "http://172.16.22.91/movilx_prueba/layerx/";

var editions;

$('#editionListSwipePage').bind('pageinit', function(event) {
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

  var dateFromGetDate = "2013-02-20"; //getUrlVars()["date"];
  var dateFromGetSuplemento = "1746"; //getUrlVars()["suplemento"];
  //$('#pageScroller').html('');

  if(dateFromGetDate != '' && dateFromGetSuplemento != '') {
        console.log("Debug Edwin 001, date:  "+dateFromGetDate+", suplem: "+dateFromGetSuplemento);
        $.post("http://nuestrodiario.com/nuestrodiario/bin/getMobilexSupplement.php?method=login&returnformat=json", {issueDate:dateFromGetDate,issueIdSuplemento:dateFromGetSuplemento}, function(res) {
                 
          console.log("click baby");
          navigator.notification.alert("Edicion cargada!", function() {});
          editions = res.items;
          console.log("debug Eddy: "+editions);
          $.each(editions, function(index, edition) {
            $('#pageScroller').append(

            '<div class="page" > <hr/>' + 
                '<img src="http://nuestrodiario.com/nuestrodiario/pages/'+ edition.pathPage +'.jpg" width="100%"/>' + 
            '</div>'


            );
          });
          


          $('#pageScroller').listview('refresh');
                
          //$.mobile.changePage("editionlist-cards.html");
            
         
        },"json");
  }
  



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

