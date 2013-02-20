var serviceURL = "http://172.16.22.91/movilx_prueba/layerx/";

var editions;

$('#editionListPage').bind('pageinit', function(event) {
  getEditionList();
  $("#gotoGalleryBtn").click(function(){
        //var argValue = $("#argTxt").val();
        //$.mobile.changePage("page2.html",{data:{arg1:argValue}});
        //or you could pass parameters in the URL
        $.mobile.changePage("loadeditionCarrousel.html?date=2013-02-19&suplemento=1737");
      });
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
          '<a href="#" data-role="button" id="gotoGalleryBtn">AQUI</a><p>2 comments, 4 likes</p>' +
          '</li>');
    });
    $('#editionList').listview('refresh');

          $("#gotoGalleryBtn").click(function(){
        //var argValue = $("#argTxt").val();
        //$.mobile.changePage("page2.html",{data:{arg1:argValue}});
        //or you could pass parameters in the URL
        //alert("Give me your money foo!");
        $.mobile.changePage("loadeditionCarrousel.html?date=2013-02-19&suplemento=1737");
      });

  });
}