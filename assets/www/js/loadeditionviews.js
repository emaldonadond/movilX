var serviceURL = "http://www.nuestrodiario.com/MovilX/mobileOps/layerx/";

var editions;

$('#list-of-cards').bind('pageinit', function(event) {
  loadEditionViews();
});




/*
* Descripcion: .
*
*/


function loadEditionViews(){

  var userId = movilxUserId;
  //-----------
  if(userId != '') {
        console.log("En Custom JS: Debug Params En funcion loadEditionViews, user:  "+userId);
        $.post("http://nuestrodiario.com/nuestrodiario/bin/getMobilexEditionView.php?method=login&returnformat=json", {uID:movilxUserId}, function(res) {

          editions = res.items;
          console.log("debug Lo que viene de server: "+editions);
          $.each(editions, function(index, edition) {
            $('#editionviewlist').append(
            '<li data-theme="c">' +
                '<ul data-role="listview" data-inset="true" class="loc-card">' +
                  '<li class="loc-image">' +
                    '<div>' +
                      '<a href="#" data-role="button" id="gotoGalleryBtnBoom" onclick="changePageWithArguments('+ "\'" + edition.fixed_dash_date + "\'" + ','+ edition.supplement_id +');">' +
                      '<img src="http://nuestrodiario.com/nuestrodiario/pages/'+ edition.pathPage +'" />' +
                      '</a> ' + 
                    '</div>' +
                  '</li>' +
                  '<li class="loc-credits">' +
                    '<img src="resources/images/profile-01.png"/>' +
                    '<h3>Porta tristique et in et</h3>' +
                    '<p>by <a href="#">sandra</a>.</p>' +
                  '</li>' +
                  '<li class="loc-comments">' +
                    '<p>2 comments, 4 likes</p>' +
                  '</li>' +
                '</ul>' +
            '</li>'            
            ).trigger( "create" );
          });
          
        },"json");
  }
  



}


