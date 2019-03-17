

$.ajax({
   method: "get",
   url: "https://randomuser.me/api",
   datatype: "json",
   data: { results: 1 },
   success: function(r) {
      $("#photo").append("<img src='" + r.results[0].picture.large +"'>");
      $("#firstname").text(r.results[0].name.first);
      $("#lastname").text(r.results[0].name.last);
      $("#email").text(r.results[0].email);
      $("#dob").text(r.results[0].dob.date);
      $("#location").text(r.results[0].location.street);
      $("#phone").text(r.results[0].phone);
      $("#password").text(r.results[0].login.password);
   },
   error: function() {
      alert("error");
   },
   complete: function(){
      $("#loadingtext").fadeOut();
   }
});