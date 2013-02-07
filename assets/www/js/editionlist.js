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
      $('#editionList').append('<li><a href="editiondetails.html?id=' + edition.edition_id + '">' +
          '<h4>' + edition.edition_number + ' ' + edition.edition_year + '</h4>' +
          '<p>' + edition.edition_publication_date + '</p>' +
          '<span class="ui-li-count">' + edition.edition_number + '</span></a></li>');
    });
    $('#editionList').listview('refresh');
  });
}