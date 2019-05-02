# LiriBot
## Like Siri but Liri 

# About

### What is this app exactly?

This is an app that takes in command line arguments and responds within the terminal with data pertaining to the specific command that it was given.

<img src="images\Screenshot (15).png" height= 600px width=1000px>

### How to use 

* In your termiinal type: node  *your_file_name* **command-argument** *argument*

* **command-arguments**
    
    * movie-this
    * concert-this
    * spotify-this-song
    * do-what-it-says

* **arguments**

    * For *movie-this* -- **movie title**
    * For *concert-this* -- **band/artist name**
    * For *spotify-this-song* -- **song name**
    * For *do-what-it-says* -- **this runs the argument thats held within a .txt file**

### What it does

### Movie-this

* **Returns** 

        Title
        Year released
        IMDB Rating
        Country
        Language
        Actors
        Plot

### Concert-this

* **Returns** 

        Venue
        Location of venue
        Date of concert

### Spotify-this-song

* **Returns** 

        Artist
        Album
        Song Name
        Song Preview

### Do-what-it-says

* **Takes the text from within random.txt**
    
    * **Returns**

        * *Data from any of the other functions depending on what is currently in the random.txt file*