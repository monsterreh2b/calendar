const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var startYear = 2000;
var endYear = 2020;
var month = 0;
var year = 0;

function loadCalendarYears() {
  document.getElementById("years").innerHTML = "";

  for (var i = startYear; i <= endYear; i++) {
    var doc = document.createElement("div");
    doc.innerHTML = i;
    doc.classList.add("dropdown-item");

    doc.onclick = (function () {
      var selectedYear = i;
      return function () {
        year = selectedYear;
        document.getElementById("curYear").innerHTML = year;
        loadCalendarDays();
        return year;
      };
    })();

    document.getElementById("years").appendChild(doc);
  }
}


//return # of day in a month given month and year e.g. 2022 and 06, for july 2022
function daysInMonth(month, year) {
    let d = new Date(year, month + 1, 0);
    return d.getDate();
}

function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}



function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();

    // create day prefixes
    for (var i = 0; i <= dayofweek; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    // render the rest of the days
    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + i;
        d.className = "day";
        d.innerHTML = tmp;
        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}



window.addEventListener("load", function () {
  var date = new Date();
  month = date.getMonth();
  year = date.getFullYear();
  document.getElementById("curMonth").innerHTML = months[month];
  document.getElementById("curYear").innerHTML = year;
  loadCalendarMonths();
  loadCalendarYears();
  loadCalendarDays();
});
