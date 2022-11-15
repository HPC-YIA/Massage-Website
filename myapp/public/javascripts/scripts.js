
// APPOINTMENT selection



// login pop up
document.getElementById("showlogin").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".popup .close-btn").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
})

// type-popup
document.getElementById("type-popup").addEventListener("click", function() {
  document.querySelector(".bookingtype-popup").style.display = "flex";
})


// document.querySelector(".booking-popup .close-btn").addEventListener("click", function() {
// document.querySelector(".booking-popup").style.display = "none";
// })


//
// document.getElementById("con-btn").addEventListener("click", function() {
//
//   document.querySelector(".bookingtype-popup").style.display = "none";
//
// })





// disabled past Date

var date = new Date();
var tdate = date.getDate();
if (tdate < 10) {
  tdate = '0' + tdate;
}
var month = date.getMonth() + 1;
if (month < 10) {
  month = '0' + month;
}
var year = date.getUTCFullYear();

var mindate = year + "-" + month + "-" + tdate;
document.getElementById("select-date").setAttribute('min', mindate);

// get day input value

var staffoption = ["Sunny Available : Mon, Thu, Sat, Sun",
  "Mary Available : Mon, Wed, Fri",
  "Apple Available : Tue, Wed, Thu",
  "Jane Available : Fri, Sat, Sun"
];
var staffinput = document.getElementById('select-staff');
// var option1 = new Option(staffoption[0], "Sunny");
// var option2 = new Option(staffoption[1], "Mary");
// var option3 = new Option(staffoption[2], "Apple");
// var option4 = new Option(staffoption[3], "Jane");


function showdate(getdate) {
  var selectdate = new Date(getdate);

  var display = selectdate.getDay();


  if (display === 0 || display === 1 || display === 4 ||
    display === 6) {
    // staffinput.appendChild(option1);
    // staffinput.appendChild(option2);
    // staffinput.removeChild(option3);

    staffinput.options[4].style.display = "block";
  } else {
    staffinput.options[4].style.display = "none";
  }

  if (display === 1 || display === 3 || display === 5) {
    staffinput.options[2].style.display = "block";
  } else {
    staffinput.options[2].style.display = "none";
  }

  if (display === 0 || display === 5 || display === 6) {
    staffinput.options[1].style.display = "block";
  } else {
    staffinput.options[1].style.display = "none";
  }

  if (display === 2 || display === 3 || display === 4) {
    staffinput.options[3].style.display = "block";
  } else {
    staffinput.options[3].style.display = "none";
  }


}

//




function showTimePeriod(s1, s2) {
  var s1 = document.getElementById("select-type");
  var s2 = document.getElementById("select-time");
  s2.innerHTML = "No Available";
  if (s1.value == "30 mins upper body remedial massage" || s1.value == "30-mins-foot") {
    var timeoutoption = ["30|09:00 am - 09:30 am", "30|09:15 am - 09:45 am", "30|10:00 am - 10:30 am", "30|10:45 am - 11:15 am",
      "30|11:30 am - 12:00 pm", "30| 12:15 pm - 12:45 pm", "30|1:00 pm - 1:30 pm"
    ];
  } else if (s1.value == "45 mins whole body remedial massage") {
    var timeoutoption = ["45|09:00 am - 09:45 am", "45|10:00 am - 10:45 am", "45|11:00 am - 11:45 am", "45|12:00 pm - 12:45 pm",
      "45|1:00 pm - 1:45 pm"
    ];
  } else if (s1.value == "60 mins whole body remedial massage") {
    var timeoutoption = ["60|09:00 am - 10:00 am", "60|10:15 am - 11:15 am", "60|11:30 am - 12:30 pm", "60|12:45 pm - 1:45 pm",
      "60|2:00 pm - 3:00 pm"
    ];
  } else if (s1.value == "90 mins whole body remedial massage") {
    var timeoutoption = ["90|09:00 am - 10:30 am", "90|10:45 am - 12:15 pm", "90|12:30 pm - 2:00 pm", "90|2:45 pm - 4:15 pm"];
  } else if (s1.value == "120 mins whole body remedial massage") {
    var timeoutoption = ["120|09:00 am - 11:00 am", "120|11:15 am - 1:15 pm", "120|1:30 pm - 3:30 pm"];
  }

  for (var option in timeoutoption) {
    var pair = timeoutoption[option].split("|");
    // create option element
    var newoption = document.createElement("option");

    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }


};
