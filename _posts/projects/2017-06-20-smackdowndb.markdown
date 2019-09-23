---
layout: post
# About
title:  "SmackDown DB"
permalink: /:year/:title/
head: -head.jpg
thumb: -thumb.jpg
# Info
published: true
comments: false
# Author
author: shaun_skeen
---


## What is the SmackDown DB?
<br>
The SmackDown DB is a website which strives to serve the Wrestling Video Game community. Users can look up the attributes of characters from a history of games and view the progression of different skills and abilities. The database can also be used as a reference tool for future games with an ever expanding list of characters and a community that continues to grow.   
<br>
This web application will give fans of wrestling video games access to information from game ten+ years old through a search tool.   
<br>
<div class="videoWrapper">
  <iframe src="https://player.vimeo.com/video/224630234" frameborder="0" allowfullscreen></iframe>
</div>
<br>

### The Database structure
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/database-structure.png" data-lightbox="image-1" data-title="Database structure" class="img-responsive" style="float:right; margin-left: 1em;">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/database-structure.png" alt="{{page.title}}">
</a>

During the the initial creation of the application, I was aware that the core of this web app would be its database - most importantly the structure of how it works.
Because of the large amount of data that this web application would handle, I needed to split the data off into different tables which would then join together to output the character and game complete data. Tables such as wrestlers and games contain the basic information such as names, years and link to other tables which makes for more expanded information.   
<br>
The wrestlers_* tables control everything that is assisted with a single wrestler. Each character is not required to have all of these tables as the website will check for their id and if the table is empty, it will not output that select table. This was needed as games and technology have evolved, more ‘character stats’ have been created so a character from 2017 won’t have the same profile as someone from 2001 due to the limitation of the release time.   
<br>
Tables such as brands, heights, reactions, skills (skill_levels), abilities (ability_levels) and attributes (attributes_points) contain the very important data which populates the character profiles and will make up the majority of the websites data output.   
<br>
### Character profiles
<br>
The wrestlers profile page is the focus and the really reason you would use the application. Users can see a range of different data associated with the specific character. The images will change to meet the specific characters and games.  
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/character-profile-view.png" data-lightbox="image-2" data-title="Character profile" class="img-responsive" style="text-align: center">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/character-profile-view.png" alt="{{page.title}}">
</a>
<br>
One major feature of the site is to view the data in a visual form. The wrestlers characters re made up of numbers and to just view numbers would get very boring and unappealing but by making attributes, hit points and personalty a visual aspect, it offers a form of game culture to the user.  
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/attributes-style-change.jpg" data-lightbox="image-3" data-title="Attribute Change" class="img-responsive" style="text-align: center">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/attributes-style-change.jpg" alt="{{page.title}}">
</a>
<br>
### Familiar visuals
<br>
Something I was after myself was a sense of connection between the source and the website. Taking the information from the games and putting it into an organised and maintained website is one things, but I wanted to also bring the visual representatives that would would find in the games to the website.  
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/personality-visuals.jpg" data-lightbox="image-4" data-title="Personalty" class="img-responsive" style="text-align: center">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/personality-visuals.jpg" alt="{{page.title}}">
</a>
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/hp-visuals.jpg" data-lightbox="image-5" data-title="Profile view" class="img-responsive">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/hp-visuals.jpg" alt="{{page.title}}">
</a>
<br>
### Search function
<br>
A key feature of the website is being able to get around. The users will need to be able to look up whatever character they want in a quick and easy fashion. To meet these goals, I decided to make use of a search function which would look through my database and output relevant information.  
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/search-function.jpg" data-lightbox="image-6" data-title="Search" class="img-responsive" style="text-align: center">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/search-function.jpg" alt="{{page.title}}">
</a>
<br>
Users can can search for a specific wrestler and view the results of all the wrestlers who match the search term, their overall rating and the game they are included in.  
<br>
### Game navigation
<br>
More than likely, some users are not going to know or remember the correct spelling of the wrestler that they’re looking for. So you’re able to look by game. What this will do is allow the user to navigate through each iteration of WWE game and view the roster which will then link then link to the correct wrestlers page.  
<br>
<a href="{{site.baseurl}}/assets/post-assets/smackdowndb/game-library.jpg" data-lightbox="image-7" data-title="Game selection" class="img-responsive" style="text-align: center">
  <img src="{{site.baseurl}}/assets/post-assets/smackdowndb/game-library.jpg" alt="{{page.title}}">
</a>
