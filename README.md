# New Features in Stage 4
Our plan for this stage included the ability to create a team that is specific to ther user. After the user logs in, they would then be able to add pokemon to their team from the search and browse pages. We would've had the team data stored in Firebase in relation to the user that created it. We also had created a *Team* page that would be accessible from the navbar. This would allow the user to view their team (pull user's team information from Firebase).

We were not able to complete these tasks on time. We were, however, able to connect to Firebase and store **user information** once they log in. After the login, they will then see an "Add to team" button on each Pokemon card in the browse page. 

Things we did accomplish:
- Connection to Firebase (deployed)
- Login function (adds user to Firebase)
- Fixed bugs from previous stages
- Cleaned up the site.

# About the Project
The name of our application is *PokeIndex*. The idea of this application is to allow users to search for Pokemon and view general information about them. Secondly, as a new feature we have added the ability to browse Pokemon by pages in a list view. Our *home page* has one main card that directs the user to the *search page* & *browse page*. An *about page* is included as well in case the user wants more info about *PokeIndex*.

# Contributions
**Implemented aspects from our stage 2 submissions**:
* We have implemented the core subject/idea & design of the application from jth46 (Justin Harrison)'s stage-2. The home page, about page, and *some* aspects of the search page have all been kept the same, including the minimal design/UI. 

* After close consideration, we decided to scrap klc16 (Keith Lahmann)'s subject/idea. In order to integrate our projects together, we decided to take Keith's browse feature (browses a list of rockets) that pulls information from an API and displays it in a list view. This, along with the search page from Justin's stage-2, worked together nicely.

* In general, we (Justin & Keith) worked together for the majority of the sprint in order to understand all of the code and how it functions in the program. We stayed in close communication and updated each other on new ideas/implementations/pushes in order to stay organized and release a well made application.

# Course Project Details
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.
This repository contains code for an interactive web app, created for the _Client-Side Programming_ course at UWF.
The site can be viewed at <https://github.com/uwf-cop4864-sp2021/project-jth46>

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.