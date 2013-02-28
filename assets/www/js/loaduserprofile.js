var serviceURL = "http://www.nuestrodiario.com/MovilX/mobileOps/layerx/";

var editions;

$('#userProfilePage').bind('pageinit', function(event) {
  loadUserProfile();
});


/*
* Descripcion: .
*
*/

function loadUserProfile(){

  var username = movilxUserId;
  //-----------
  if(username != '') {
        console.log("@loaduserprofile.js with, user:)  :"+username);
        $.post("http://www.nuestrodiario.com/MovilX/mobileOps/userProfile.php?method=login&returnformat=json", {username:movilxUserId}, function(res) {
        console.log("Boom! tenemos respuesta de userProfile.php");  
         users = res.items;
          $.each(users, function(index, user) {
            $('#userList').append(
                      '<form id="UpdateForm">' +
                        '<div data-role="fieldcontain" class="ui-hide-label">'+
                            '<label for="username">Username:</label>' +
                            '<input type="text" name="username" id="username" value="'+user.userData.account_name+'" placeholder="Username" />' +
                        '</div>' +


                        '<div data-role="fieldcontain" class="ui-hide-label">' +
                            '<label for="email">Email:</label>' +
                            '<input type="email" name="email" id="email" value="'+user.userData.account_email+'" placeholder="Email" />' +
                        '</div>' +


                        '<div data-role="fieldcontain" class="ui-hide-label">' +
                            '<label for="password">Password:</label>' +
                            '<input type="password" name="password" id="password" value="'+user.userData.account_password+'" placeholder="Password" />' +
                        '</div>' +


                        '<div data-role="fieldcontain" class="ui-hide-label">' +
                            '<label for="parent">Parent?:</label>' +
                            '<input type="parent" name="parent" id="parent" value="'+user.userData.parent_id+'" placeholder="Parent" />' +
                        '</div>' +

                        '<input type="submit" value="UpdateUser" id="submitButton">' +
                     '</form>'         
            );
          });
          
        },"json");
  }
  
}


