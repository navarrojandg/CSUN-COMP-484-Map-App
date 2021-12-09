// Dynamically Load Google Maps API manually
// https://developers.google.com/maps/documentation/javascript/overview#Loading_the_Maps_API

// Create script tag
const googleMapsApiScript = document.createElement("script");
googleMapsApiScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GCP_API_KEY}&callback=initMap&libraries=drawing`;
googleMapsApiScript.async = true;

// Attach callback function to the 'window' object
window.initMap = function () {
  // JS API is loaded and available
  console.log("Google maps loaded successfully");

  // main
  main();
};

document.head.appendChild(googleMapsApiScript);

// Our main entry point
function main() {
  // Markers are where the user clicks
  window.markers = [];

  // Drawings are where the rectangles are drawn
  window.drawings = [];

  // Initialize Locations
  window.assignedLocations = createAssignedLocations();
  window.randomLocations = createRandomLocations();

  // Initialize map
  window.map = createMap();

  $("#startQuiz").click(startQuiz);
  $("#resetQuiz").click(resetQuiz);
}

function addMarker({ latLng }) {
  const marker = new google.maps.Marker({
    position: latLng,
    map,
    icon: getMarkerIcon(markers.length),
  });
  marker.setMap(map);
  markers.push(marker);
}

function getMarkerIcon(index) {
  return `http://maps.google.com/mapfiles/kml/pal3/icon${index}.png`;
}

function showAllMarkers() {
  markers.forEach((marker) => {
    marker.setMap(map);
  });
}

function hideAllMarkers() {
  markers.forEach((marker) => {
    marker.setMap(null);
  });
}

function removeAllMarkers() {
  hideAllMarkers();
  markers = [];
}

function drawCorrectRectangle(bounds) {
  const rect = new google.maps.Rectangle({
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    map,
    bounds,
  });

  rect.setMap(map);
  drawings.push(rect);
}

function drawIncorrectRectangle(bounds) {
  const shadesOfRed = ["#ff0000", "#FFA500", "#954535", "#e0115f", "#AA336A"];
  const color = shadesOfRed[totalIncorrect % shadesOfRed.length];
  const rect = new google.maps.Rectangle({
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
    map,
    bounds,
  });

  rect.setMap(map);
  drawings.push(rect);
}

function showAllDrawings() {
  drawings.forEach((drawing) => {
    drawing.setMap(map);
  });
}

function hideAllDrawings() {
  drawings.forEach((drawing) => {
    drawing.setMap(null);
  });
}

function removeAllDrawings() {
  hideAllDrawings();
  drawings = [];
}

function createAssignedLocations() {
  return [
    {
      name: "Alumni Relations, Reseda Annex",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.2391376978759, -118.53383135379052),
        new google.maps.LatLng(34.240732914951, -118.53352684880817)
      ),
    },
  ];
}

function createRandomLocations() {
  return [
    {
      name: "Addie Klotz Student Health Center",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.237864767676506, -118.52669935063756),
        new google.maps.LatLng(34.23850899732018, -118.52580297466965)
      ),
    },
    {
      name: "Arbor Grill",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.240943816542284, -118.53011527303849),
        new google.maps.LatLng(34.24134060214873, -118.52953867938407)
      ),
    },
    {
      name: "Art and Design Center",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24296395777599, -118.53030827307114),
        new google.maps.LatLng(34.2442064493929, -118.52938819408588)
      ),
    },
    {
      name: "Bayramian Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.239908581113546, -118.5314578777683),
        new google.maps.LatLng(34.24071390729774, -118.53011841485248)
      ),
    },
    {
      name: "Bookstein Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24150335021813, -118.53107865153213),
        new google.maps.LatLng(34.24244508420423, -118.53027351924935)
      ),
    },
    {
      name: "Chaparral Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23789448920161, -118.52727925978489),
        new google.maps.LatLng(34.23860392157965, -118.5266999162683)
      ),
    },
    {
      name: "Charles H. Noski Auditorium",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24210792480264, -118.5314323324061),
        new google.maps.LatLng(34.24236215693092, -118.53113200577376)
      ),
    },
    {
      name: "Child and Family Studies Lab School",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24381929256342, -118.53369152058296),
        new google.maps.LatLng(34.24438599446837, -118.53279852531952)
      ),
    },
    {
      name: "Citrus Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23881951845458, -118.52891344613),
        new google.maps.LatLng(34.239156237227995, -118.52744674148214)
      ),
    },
    {
      name: "CSUN Art Galleries",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24294370895278, -118.52975613992783),
        new google.maps.LatLng(34.243551058329786, -118.5293551062637)
      ),
    },
    {
      name: "CSUN Bookstore",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23696965263106, -118.52883298526854),
        new google.maps.LatLng(34.23780556276163, -118.52758447375719)
      ),
    },
    {
      name: "CSUN Botanic Garden",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23857137585203, -118.52729428473279),
        new google.maps.LatLng(34.23916874065112, -118.5264590339832)
      ),
    },
    {
      name: "CSUN Children's Center",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24293568672043, -118.53360131122689),
        new google.maps.LatLng(34.24353967472043, -118.53304657962535)
      ),
    },
    {
      name: "CSUN Duck Pond",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23647143135077, -118.52643344700974),
        new google.maps.LatLng(34.23719351027536, -118.52575635535523)
      ),
    },
    {
      name: "CSUN Food Pantry",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24227497623127, -118.52911353038603),
        new google.maps.LatLng(34.24242223461462, -118.52884633196187)
      ),
    },
    {
      name: "CSUN Orange Grove",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23556521306399, -118.52727873961642),
        new google.maps.LatLng(34.236355302815056, -118.52473802309613)
      ),
    },
    {
      name: "CSUN Rainforest",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.238722727347, -118.5260065852216),
        new google.maps.LatLng(34.23915132470618, -118.52523552085218)
      ),
    },
    {
      name: "Cypress Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23600069557208, -118.53010985494414),
        new google.maps.LatLng(34.23672166874877, -118.52921265571266)
      ),
    },
    {
      name: "Delmar T. Oviatt Library",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.239168084905515, -118.53011255192945),
        new google.maps.LatLng(34.24093999374319, -118.52857327999084)
      ),
    },
    {
      name: "Education Administration",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24158302999579, -118.53159515978703),
        new google.maps.LatLng(34.24204922678605, -118.53123722923671)
      ),
    },
    {
      name: "Eucalyptus Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.238472829014995, -118.5289203197883),
        new google.maps.LatLng(34.23880350548117, -118.52744791002961)
      ),
    },
    {
      name: "Extended University Commons",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24048483350348, -118.53351473908752),
        new google.maps.LatLng(34.24073594200433, -118.53251241683157)
      ),
    },
    {
      name: "Grand Salon",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.239180392073834, -118.5272961466891),
        new google.maps.LatLng(34.23973753804377, -118.52667662048083)
      ),
    },
    {
      name: "Jacaranda Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.240951322188664, -118.52952995779204),
        new google.maps.LatLng(34.242196831794224, -118.52777400170163)
      ),
    },
    {
      name: "Jerome Richfield Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23858687983867, -118.53095003542506),
        new google.maps.LatLng(34.23907448642647, -118.530300572015)
      ),
    },
    {
      name: "Lilac Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24238771251823, -118.52973978389429),
        new google.maps.LatLng(34.242620107648186, -118.52921095191498)
      ),
    },
    {
      name: "Live Oak Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23814369975453, -118.52891782860493),
        new google.maps.LatLng(34.23845213402119, -118.52745328601587)
      ),
    },
    {
      name: "Magnolia Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23918734631592, -118.52858296465841),
        new google.maps.LatLng(34.23966153298631, -118.52815912289006)
      ),
    },
    {
      name: "Matador Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24339704817145, -118.52811021203316),
        new google.maps.LatLng(34.24381193649587, -118.52779421194496)
      ),
    },
    {
      name: "Matador Softball Field",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.243851205681814, -118.52577884626716),
        new google.maps.LatLng(34.24488111717699, -118.52479348027225)
      ),
    },
    {
      name: "Matador Tennis Complex",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24362382469471, -118.52461248560961),
        new google.maps.LatLng(34.244642561774654, -118.52339223648522)
      ),
    },
    {
      name: "Manzanita Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.236864570264544, -118.53057866608773),
        new google.maps.LatLng(34.23783384968837, -118.52947758896543)
      ),
    },
    {
      name: "Michael D. Eisner College of Education",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.2410274279355, -118.53143292496924),
        new google.maps.LatLng(34.24155323322318, -118.53044925363044)
      ),
    },
    {
      name: "Monterey Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23644825372017, -118.52465055623979),
        new google.maps.LatLng(34.23690202285693, -118.5232963501109)
      ),
    },
    {
      name: "National Center On Deafness (NCOD)",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23738423681827, -118.52632533682),
        new google.maps.LatLng(34.23778740072459, -118.52584549486456)
      ),
    },
    {
      name: "Nordhoff Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.235976950331406, -118.53096040179103),
        new google.maps.LatLng(34.236703864130284, -118.53009909578377)
      ),
    },
    {
      name: "North Field",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24277441226419, -118.52724309083156),
        new google.maps.LatLng(34.243713743132574, -118.52471734582986)
      ),
    },
    {
      name: "Oasis Wellness Center",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.239436280155466, -118.5258142353967),
        new google.maps.LatLng(34.23971163404376, -118.52528898544783)
      ),
    },
    {
      name: "Redwood Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24128055035257, -118.52728294837203),
        new google.maps.LatLng(34.242526397337684, -118.52535115278131)
      ),
    },
    {
      name: "Sagebrush Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24241763322411, -118.52878509856652),
        new google.maps.LatLng(34.24261551080856, -118.52827018274087)
      ),
    },
    {
      name: "Santa Susana Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.237361490248155, -118.52944230269551),
        new google.maps.LatLng(34.2378706837444, -118.52914296090844)
      ),
    },
    {
      name: "Sequoia Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.24011758145008, -118.52846248308555),
        new google.maps.LatLng(34.24078669943268, -118.52760249459998)
      ),
    },
    {
      name: "Sierra Center",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.238771562498634, -118.53142950042601),
        new google.maps.LatLng(34.239066318110474, -118.53094197817052)
      ),
    },
    {
      name: "Sierra Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23809237436892, -118.53139898973009),
        new google.maps.LatLng(34.238469630424426, -118.53002564542999)
      ),
    },
    {
      name: "Sierra Tower",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23844023936151, -118.53030507604058),
        new google.maps.LatLng(34.23910343244234, -118.5301213468547)
      ),
    },
    {
      name: "Student Recreation Center",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23925075841574, -118.52522425796396),
        new google.maps.LatLng(34.24062144235223, -118.52470945965145)
      ),
    },
    {
      name: "The Soraya",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23573537976935, -118.52916606144427),
        new google.maps.LatLng(34.23673868939436, -118.52746364118407)
      ),
    },
    {
      name: "University Hall",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23919172874835, -118.53241114274132),
        new google.maps.LatLng(34.24027561395158, -118.53182900660379)
      ),
    },
    {
      name: "University Student Union",
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.23977382999084, -118.52728907808333),
        new google.maps.LatLng(34.24044595433443, -118.52530517596364)
      ),
    },
  ];
}

function createMap() {
  return new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(34.2400695486868, -118.52931715944784),
    zoom: 11,
    restriction: {
      latLngBounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(34.235407371515194, -118.53399198855638),
        new google.maps.LatLng(34.24488087222004, -118.5232104128073)
      ),
      strictBounds: true,
    },
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  });
}

function createQuestions(count) {
  let questions = [];
  questions = [...assignedLocations];

  // Loop 4 times
  for (let i = 0; i < count - 1; i++) {
    let randomIndex = Math.floor(Math.random() * window.randomLocations.length);
    let [randomLocation] = window.randomLocations.splice(randomIndex, 1);
    questions.push(randomLocation);
  }
  // Reset once we are done picking random locations
  window.randomLocations = createRandomLocations();
  return questions;
}

function startQuiz() {
  if (window.isQuizStarted) {
    alert("Quiz has already started!");
    return;
  }
  window.isQuizStarted = true;
  let start = confirm("Start the quiz?");
  if (!start) return;

  // Create the questions
  window.questions = createQuestions(5);

  window.totalQuestions = questions.length;
  window.totalCorrect = 0;
  window.totalIncorrect = 0;

  $("#quiz").on("question", (e, question) => {
    if (!question) {
      $(e.currentTarget).append(
        `<div class="score">Score: ${totalCorrect}/${totalQuestions}</div>`
      );
      return;
    }
    window.listener = addDoubleClickListener(({ latLng }) => {
      addMarker({ latLng });
      const correct = question.bounds.contains(latLng);
      if (correct) {
        drawCorrectRectangle(question.bounds);
        $(e.currentTarget).append(`<div class="result correct">Correct!</div>`);
        totalCorrect++;
      } else {
        drawIncorrectRectangle(question.bounds);
        $(e.currentTarget).append(
          `<div class="result incorrect${totalIncorrect}">Incorrect!</div>`
        );
        totalIncorrect++;
      }

      removeDoubleClickListener();
      triggerQuestion();
    });

    $(e.currentTarget).append(
      `<div class="question">Double click on ${question.name}.</div>`
    );
  });

  triggerQuestion();
}

function triggerQuestion() {
  $("#quiz").trigger("question", questions.shift());
}

function resetQuiz() {
  let reset = confirm("Reset the quiz?");
  if (!reset) return;
  questions = [];
  $("#quiz").empty();
  // Remove event listeners
  $("#quiz").off();
  removeDoubleClickListener();
  removeAllMarkers();
  removeAllDrawings();
  isQuizStarted = false;
}

function addDoubleClickListener(callback) {
  return map.addListener("dblclick", callback);
}

function removeDoubleClickListener() {
  google.maps.event.removeListener(listener);
}

// window.removeAllDrawings = removeAllDrawings;

// window.showAllPossibleLocations = function () {
//   [...assignedLocations, ...randomLocations]
//     .map((location) => location.bounds)
//     .forEach(drawCorrectRectangle);
// };
