var req = new XMLHttpRequest();
var method = "POST";
var url = "https://elevate-be-staging.azurewebsites.net/best-of-luck.php";

req.open(method, url);

var sub_code = [];
var sub_name = [];

req.onload = function () {
  var json_object = JSON.parse(JSON.parse(req.responseText));
  console.log(json_object);
  var i=0;
  var j=1;
  while(i<json_object.length-1){
    if(json_object[i].subCode_dept_sem==json_object[j].subCode_dept_sem){
      if((json_object[i].source="super") || (json_object[j].source=="super")){
        sub_name.push(json_object[i].subject_name);
        sub_code.push(json_object[i].subject_code);
      }
    }else{
      sub_name.push(json_object[i].subject_name);
      sub_code.push(json_object[i].subject_code);
    }
    i=i+1;
    j=j+1;
  };
  console.log(sub_name);
  console.log(sub_code);

  for (i = 0; i < sub_code.length; i++) {
    document.getElementById("subcode_drop").innerHTML += sub_code[i];
  }
  for (i = 0; i < sub_name.length; i++) {
    document.getElementById("subname_drop").innerHTML += sub_name[i];
  }
}
  


req.send();

// var ajax = new XMLHttpRequest();
// var method = "POST";
// var url = "https://elevate-be-staging.azurewebsites.net/best-of-luck.php";

// ajax.open(method, url);

// var subcode_array = [];
// var department_array = [];
// var semester_array = [];
// var subject_array = [];

// ajax.onload = () => {
//   var ourData = JSON.parse(JSON.parse(ajax.responseText));

//   for (var i in ourData) {
//     var subcode = ourData[i].subCode_dept_sem;
//     var source = ourData[i].source;

//     if (subcode_array.includes(subcode)) {
//       if (source == "super") {
//         subcode_array.push(subcode);
//         var department = ourData[i].department;
//         var semester = ourData[i].semester;
//         var subject = ourData[i].subject_name;

//         department_array.push(
//           '<a class="dropdown-item" href="#" id="' +
//             subcode +
//             '">' +
//             department +
//             "</a>"
//         );
//         semester_array.push(
//           '<a class="dropdown-item" href="#" id="' +
//             subcode +
//             '">' +
//             semester +
//             "</a>"
//         );
//         subject_array.push(
//           '<a class="dropdown-item" href="#" id="' +
//             subcode +
//             '">' +
//             subject +
//             "</a>"
//         );

//         subcode_array.some((element, index) => {
//           if (element == subcode) {
//             dropElement = index;

//             subcode_array.splice(dropElement, 1);
//             department_array.splice(dropElement, 1);
//             semester_array.splice(dropElement, 1);
//             subject_array.splice(dropElement, 1);
//             return true; // Inorder to break the 'some loop'
//           }
//         });
//       }
//     } else {
//       subcode_array.push(subcode);
//       var department = ourData[i].department;
//       var semester = ourData[i].semester;
//       var subject = ourData[i].subject_name;

//       department_array.push(
//         '<a class="dropdown-item" href="#" id="' +
//           subcode +
//           '">' +
//           department +
//           "</a>"
//       );
//       semester_array.push(
//         '<a class="dropdown-item" href="#" id="' +
//           subcode +
//           '">' +
//           semester +
//           "</a>"
//       );
//       subject_array.push(
//         '<a class="dropdown-item" href="#" id="' +
//           subcode +
//           '">' +
//           subject +
//           "</a>"
//       );
//     }
//   }
//   count = subcode_array.length - 1;

//   for (i = 0; i <= count; i++) {
//     document.getElementById("department_drop").innerHTML += department_array[i];
//     document.getElementById("semester_drop").innerHTML += semester_array[i];
//     document.getElementById("subject_drop").innerHTML += subject_array[i];
//   }
// };

// ajax.send();
