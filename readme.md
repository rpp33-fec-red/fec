# RED ATELIER

## Table of Contents
- [Overview](#overview)
- [Description](#description)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)

## Overview
Red Atelier is a front end redesign of an retail application, built with React.

## Description
Red Atelier

- [Product Overview](#product-overview)
- [Related Products & My Outfit](#related-products-&-your-outfit)
- [Questions & Answers](#questions-&-answers)
- [Ratings & Reviews](#ratings-&-reviews)

### Product Overview
_Developed by Grant Mitchell_

### Related Products & Your Outfit
_Developed by Thao Nguyen_

The Related Product presents the users with a set of products that are similar to the currently selected product, provided by the external API.

This section shows a list of product cards that sit on a horizontally scrolling carousel. The amount of cards showed depends on the current screen width. If there is more cards to show, right arrow will appear to let user click on it. When reaching the end of the list, left arrow will appear to let user going back to the previous set.

![products-carousel](https://user-images.githubusercontent.com/88979402/157744146-2a1eace6-4ba9-4b8c-95e1-7e8edc680a18.gif)


Each product card displays the essential information for a single product such as category, name, price, photo and ratings. The card is clickable. Clicking the card will navigate to the detail page for that product. Consequently, a new set of products relating to the clicked product will now be displayed.

![products click](https://user-images.githubusercontent.com/88979402/157744177-c32a0ab7-19ea-4a77-9f2b-7beeecda76ee.gif)


Each product card has a star icon in the upper righthand corner, that allows user to compare the current product with the clicked related product. A modal will pop up and display a table with the features line up for both products.

![compare modal](https://user-images.githubusercontent.com/88979402/157744208-22dbc2b8-c5d8-4b2e-826f-6046f0c87e97.gif)

Your Outfit provides users a way to select and group products together as an outfit. This list has the same format as the related products section. If users want to add the current product to their outfit, they can select the "+" button. To remove an outfit item, users can simply click the X on the outfit card. Product can only be add to Outfit list once.

Each customer will have their own outfit list. The list will remain the same regardless of which product detail page they are viewing. The list is also persistent, allowing user to exit and return to the same list at later time.

![outfit list](https://user-images.githubusercontent.com/88979402/157753274-7b09df39-971a-488c-959d-0f166b00d66d.gif)


### Questions & Answers
_Developed by Nick Gerrard_

The Questions & Answers section provides a space for the community to discuss and learn about each product through first-hand experiences. The entire section fits nicely within one screen and any overflow will scroll through the listed questions. All answers provided by the community are also easily visible. Questions and answers can be upvoted based on their helpfulness so that the most valuable questions and answers appear first providing clarity and guidance around purchase decisions.

While questions are sorted by the number of helpfulness votes they recieve, users can also use the search bar to filter for specific questions based off of keywords and phrases. If there are no questions in reference to what the user is looking for, the button to 'ADD A QUESTION +' provides a simple way to submit a new question for the current product. Each question can also receive new answers in a similar fashion by any user.

Similar to questions, answers are organized by the amount of helpfulness votes they receive. Any answers provided by the Seller are automatically bumped to the top of the list. Any answers that aren't appropriate can be reported and will be taken down immediately until further review. The full list of answers are expandable and collapsable and will only take up half of the screen with any overflow becoming scrollable.

Submitting new questions and answers is simple! Click on the appropriate button and a modal form will appear. Enter the question or answer body, a username, and an email to submit your question or answer. Answers can also be submitted with up to five photo uploads.

### Ratings & Reviews
_Developed by Alysha Gilliard_

The Ratings and Reviews widget allows users to view and add new reviews to the selected product.

This widget has the following features:

Reviews List:

The reviews list allows users to view all reviews for the selected product. The reviews list is comprised of individual review tiles that include components such as review photo thumbnails, modal window when review photos are clicked, stars that represent the product rating, and a voting feature for users to vote if they found a review helpful.

![Review List Demo](https://i.imgur.com/pKSST6y.gif)

Write new review:

This feature allows users to submit a new review for the selected product. The user can rate the product and its characteristics, write about their reasoning for the rating and can optionally add up to 5 photos to their submission.

![Add Review Demo](https://i.imgur.com/zundmvC.gif)

Sorting:

The sorting feature allows reviews to be sorted by relevancy, helpfulness or newest.
![Sorting Demo](https://i.imgur.com/UhLBNCL.gif)

Rating Breakdown:

The ratings breakdown displays the average rating for the product as well as the percentage of reviews that recommended the product. This feature also includes bars that break down the distribution of the review ratings. These rating bars also act as a filter. If a rating bar is clicked, the reviews will be filtered with only those ratings. A "remove all filters" link will also appear when reviews list is filtered.

![Sorting Demo](https://i.imgur.com/6JnhWYD.gif)

Product Breakdown:
The product breakdown displays the average feedback recieved for each applicable product characteristic (shown below in red).

![Product Breakdown](https://i.imgur.com/sR6e1zD.png)

## Getting Started
This project can be run by executing the following steps:
### Installation
1. Download or clone this git repository onto your local machine
2. Navigate to the root directory and run `npm install`

### Build
3. In same directory, run `npm run build`

### Start Server
4. In same directory, run `npm run start`

## File Structure
- Client [Folder]
    - Compile [Folder]
        - Overview [Foler]
        - Questions [Folder]
        - RatingsWidget [Folder]
        - RelatedItems [Folder]
        - app.js
    - Public [Folder]
        - index.html
- Server [Folder]
    - server.js
- .gitignore
- (Config Files)
- package.json
- package-lock.json
