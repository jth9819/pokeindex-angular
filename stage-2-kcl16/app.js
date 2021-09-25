/** Global state */
let upcomingList = [];

/** Loads launches from the API */
const fetchUpcoming = () => {
  fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=10&offset=10")
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Houston, we have a problem. Status Code: ' +
            response.status);
          return;
        }

        //Examines the text in the response
        response.json().then((upcoming) => {

          console.log(upcoming.results);
          //Store launch results in the global list
          upcomingList = upcoming.results;
          //Passes list into function that will display list items
          displayUpcoming(upcomingList);
          details(upcomingList);

        });
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}

/** Outputs upcoming rocket launches from given list */
const displayUpcoming = (upcomingList) => {
  //Reference for list element in HTML
  let listElement = document.querySelector("#upcoming-list");
  listElement.innerHTML = '';

  for (let i = 1; i <= upcomingList.length; i++) {
    //Creates a li and adds a class to it
    let li = document.createElement('li');
    li.classList.add("list-group-item");
    //HTML to be dynamically generated
    li.innerHTML =
    `
    <div class="card">
      <img src="${upcomingList[i].image}" class="card-img-left" alt="${upcomingList[i].name} image">
      <div class="card-body">
        <h5 class="card-title">${upcomingList[i].name}</h5>
        <p class="card-text">Status: ${upcomingList[i].status.name}</p>
        <button id="detail-button" button type="button" class="btn btn-primary btn-lg">View Launch Details</button>
      </div> 
    </div>
    `;
    //Append the new list item to the referenced list
    listElement.appendChild(li);
  }
}

$(document).ready(function() {
  $('#details-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var title = button.data('launch-title');
    var content = button.data('launch-details');

    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body').text(content);

    modal.find('button');
  });
});

fetchUpcoming();
