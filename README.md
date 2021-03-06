<img src="epicodus.png" align="right" />

# Message Board

> **Technologies Used** - Javascript, HTML, Firebase API.
> **IDE Used** - Atom.

#### By _**Mara Timberlake**_

Application for a message board company called Ask Me Anything.

## Description

_This application allows users to ask a question, include their name, and any additional notes. Other users may choose to respond._

## Planning

1. Configuration/dependencies
  * Ember
  * Node
  * Firebase

2. Specs
  * Spec 1: User creates question post, User clicks 'New Question' button, New question post is created and added to 'Home Page'.
  * Spec 2: User comments on a post, User views question post and clicks 'New Answer', form appears and saves the new answer after user clicks 'Save'.

3. Integration
  * Routes for about, contact, index and question
  * Template/html page for about, contact, index and question
  * Display all question posts on home page
  * Display all answer posts on individual pages of each question
  * Integrate feature that allows users to provide answer to each question post

4. UX/UI
  * Include and modify bootstrap
  * Develop custom style

5. Polish
  * Clean up page layout with bootstrap
  * Delete unused ratings code
  * Update README.md with more details/logos

## What's included
Within the repository you'll find the following directories and files:

```
super-questions/
├── app/
|    └── adapters/
|    └── components/
|    └── controllers/
|    └── helpers/
|    └── models/
|    └── routes/
|    └── styles/
|    └── templates/
|    └── app.js
|    └── index.html
|    └── resolver.js
|    └── router.js
├── config/
|    └── environment.js
├── public/
|    └── crossdomain.xml
|    └── robots.txt
├── tests/
|    └── helpers/
|    └── integration/
|    └── unit/
|    └── .eshintrc
|    └── index.html
|    └── test-helper.js
├── vendor/
├── .gitignore
├── bower.json
├── package-lock.json
├── package.json
└── README.md

```

## Setup/Installation Requirements
To run this program:
* _LOCAL: Go to Terminal_
* `git clone https://github.com/Epicodus-MT/ember-message-board.git
* `cd ember-message-board`
* `npm install`
* `bower install`

## Running / Development
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators
Make use of the many generators for code, try `ember help generate` for more details

### Running Tests
* `ember test`
* `ember test --server`

### Building
* `ember build` (development)
* `ember build --environment production` (production)

## Known Bugs
_No known bugs at this time._

## Support and Contact Details
For questions or feedback, please contact [Mara Timberlake](<contact-info.md>).

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://opensource.org/licenses/MIT)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

Copyright (c) 2017 *_Mara Timberlake_*
