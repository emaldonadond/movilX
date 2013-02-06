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
      $('#editionList').append('<li><a href="editiondetails.html?id=' + edition.id + '">' +
          '<img src="pics/' + edition.picture + '"/>' +
          '<h4>' + edition.firstName + ' ' + edition.lastName + '</h4>' +
          '<p>' + edition.title + '</p>' +
          '<span class="ui-li-count">' + edition.reportCount + '</span></a></li>');
    });
    $('#editionList').listview('refresh');
  });
}