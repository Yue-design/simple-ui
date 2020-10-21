var now = moment();

var halloween = moment("Oct 31", "MMM DD");

if (halloween.isBefore(now, "days")) {
  halloween = halloween.add(1, "year");
}

var diff = halloween.diff(now, "days");

var counter = document.getElementById("countdown");

counter.innerHTML = diff;
