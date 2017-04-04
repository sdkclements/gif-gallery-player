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


###Last thought:
 GiffySearch need to totally re work these.(after reading some of the solution) Almost there with understanding components the components chain. Downwards treee

Clean up the src folder add more folders and seperate components
