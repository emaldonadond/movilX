var serviceURL = "http://172.16.22.91/movilx_prueba/layerx/";

var editions;

$('#editionListPage').bind('pageinit', function(event) {
  getEditionList();
});

function getEditionList() {
  $.getJSON(serviceURL + 'geteditions.php', function(data) {
    $('#editionList li').remove();
    editions = data.items;
    $.each(editions, function(index, edition) {
      $('#editionList').append(
          '<li class="loc-image"> <div>' + 
          '<img src="http://nuestrodiario.com/nuestrodiario/pages/edicion/' + edition.fixed_slash_date + '/edicion_nacional/1.jpg"/>' + 
          '</div></li>' +

          '<li class="loc-credits">' + 
          '<img src="resources/images/profile-01.png"/>' +
          '<h3>' + edition.edition_publication_date + '</h3>' +
          '<p>by <a href="#">sandra</a>.</p>' +
          '</li>' +

          '<li class="loc-comments">' + 
          '<a href="loadeditionCarrousel.html?date=' + edition.fixed_dash_date + '&suplemento=1688"><p>2 comments, 4 likes</p></a>' +
          '</li>');
    });
    $('#editionList').listview('refresh');
  });
}