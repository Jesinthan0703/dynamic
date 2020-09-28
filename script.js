var req = new XMLHttpRequest();
var method = "POST";
var url = "https://elevate-be-staging.azurewebsites.net/instafeed.php";

req.open(method, url);

req.onload = function () {
  var json_object = JSON.parse(JSON.parse(req.responseText));
  console.log(json_object);
};

req.send();
