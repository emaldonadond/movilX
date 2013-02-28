var editions;

$('#userProfilePage').bind('pageinit', function(event) {
  loadUserProfile();
});


/*
* Descripcion: .
* Users Methods
*/

function updateUserProfile(){
  console.log("En funct para actualizar user");
  var form = $("#UpdateForm");    
  //disable the button so we can't resubmit while we wait
  $("#submitUpdateUserProfileButton",form).attr("disabled","disabled");
  var username = $("#username", form).val();
  var pass = $("#password", form).val();
  var email = $("#email", form).val();

  var userid = movilxUserId;
  //-----------
  if(username != '') {
        console.log("@updateUserProfile with, user:)  :"+username);
        $.post("http://www.nuestrodiario.com/MovilX/mobileOps/userUpdate.php?method=login&returnformat=json", {userid:userid, username:username, password:pass, email:email}, function(res) {
        navigator.notification.alert("Tus datos han sido actualizados!", function() {});
        console.log("-- Boom! tenemos respuesta de userUpdate.php");  
        //redirect to home
        $.mobile.changePage("editionlist-cards.html");
          
        },"json");
  }


}

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
                        '<div data-role="fieldcontain">'+
                            '<label for="username">Nombre Usuario:</label>' +
                            '<input type="text" name="username" id="username" value="'+user.userData.account_name+'" placeholder="Username" readonly/>' +
                        '</div>' +


                        '<div data-role="fieldcontain">' +
                            '<label for="email">E-mail:</label>' +
                            '<input type="email" name="email" id="email" value="'+user.userData.account_email+'" placeholder="Email" />' +
                        '</div>' +


                        '<div data-role="fieldcontain">' +
                            '<label for="password">Password:</label>' +
                            '<input type="password" name="password" id="password" value="'+user.userData.account_password+'" placeholder="Password" />' +
                        '</div>' +


                        '<div data-role="fieldcontain" class="ui-hide-label">' +
                            '<label for="parent">Parent?:</label>' +
                            '<input type="parent" name="parent" id="parent" value="'+user.userData.parent_id+'" placeholder="Parent" />' +
                        '</div>' +

                        '<input type="submit" value="Actualizar" id="submitUpdateUserProfileButton" onclick="updateUserProfile();">' +
                     '</form>'         
            ).trigger( "create" );
            
          });
          
        },"json");
  }
  
}


