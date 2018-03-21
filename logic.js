  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-lrzI0hmaWJ6vuI4TnL7V2__mqEjMmDA",
    authDomain: "trainscheduler-16332.firebaseapp.com",
    databaseURL: "https://trainscheduler-16332.firebaseio.com",
    projectId: "trainscheduler-16332",
    storageBucket: "trainscheduler-16332.appspot.com",
    messagingSenderId: "834787134454"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  //Initial Values
  var name = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";

// Capture Button Click
$("#submit-train").on("click", function() {
    event.preventDefault();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    //firstTrain = parseInt($("#first-train-input").val().trim());
    //frequency = parseInt($("frequency-input").val().trim());

    console.log(name);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

    database.ref().set({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
      });

    //});

// Firebase watcher + initial loader
database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency); 


    // Change the HTML to reflect

    $("#name-display").text(snapshot.val().name);
    $("#destination-display").text(snapshot.val().destination);
    $("#frequency-display").text(snapshot.val().frequency); 
    //$("#next-arrival-display").(***math.val));
    //$("#minutes-away-display").text(***math.val) 

// Handle the errors
 //}, function(errorObject) {
    //console.log("Errors handled: " + errorObject.code);

});
});
