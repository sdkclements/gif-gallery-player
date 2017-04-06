## Gif-Gallery-Player

Author: Sam Clements

#### About
This projects is designed to allow users to create custom combinations of gifs and images
as playlists that can be maximized as a background.


#### Tools Used
* Bootstrap

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">

##### Resources

ajax how to:

$.ajax({
    type: 'POST',
    url: 'http://upload.giphy.com/v1/gifs',
    data: {
        username: YOUR_USERNAME,
        api_key: YOUR_KEY,
        file: YOUR_FILE,
        source_image_url: YOUR_SOURCE_URL,
        tags: YOUR_TAGS
    },
    success: YOUR_SUCCESS_HANDLER,
    error: YOUR_ERROR_HANDLER
});  


{/*import * as firebase from 'firebase'

let config = {
    apiKey: " ",
    authDomain: "",
    databaseUrL: "",
    storageBucket: ""
}
firebase.initializeApp */}



#### firebase info
<script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5m7X21KTEs8VNxrSEL7sK8u_EXgnn1zs",
    authDomain: "giffy-gallery.firebaseapp.com",
    databaseURL: "https://giffy-gallery.firebaseio.com",
    projectId: "giffy-gallery",
    storageBucket: "giffy-gallery.appspot.com",
    messagingSenderId: "513689650622"
  };
  firebase.initializeApp(config);
</script>


downloaded private key:

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://giffy-gallery.firebaseio.com"
});


###Last thought:


 <NavItem  eventKey={2}><Link to="/gallery"> Gallery</Link></NavItem>
              <NavItem  eventKey={3}><Link to="/addFiles"> addFiles </Link></NavItem>
              <NavItem  eventKey={4}><Link to="/gifPlayer"> Gif Player </Link></NavItem>
              <NavItem  eventKey={5}><Link to="/gifsearch"> Gif Search </Link></NavItem>
 GiffySearch need to totally re work these.(after reading some of the solution) Almost there with understanding components the components chain. Downwards treee

Clean up the src folder add more folders and seperate components


readd this laster "homepage": "http://sdkclements.github.io/gif-gallery-player/home", in package
