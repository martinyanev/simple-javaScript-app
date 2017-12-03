function renderAllPunshesInHTML(punshes) {

    // Creating navbar-items
    let navbarItems = $('<div>').addClass('navbar-items');

    for(let key in punshes){
        let punsh = punshes[key];

        // Creating navbar-item for every one punsh, which append to the navbar
        let navbarItem = $('<div>').addClass('navbar-item');
        // Creating h4 for every one punsh, which append to the navbar-item up
        let h4PunshName = $('<h4>').text(punsh['name']);

        // Appending everything to the navbar-items
        navbarItem.append(h4PunshName);
        navbarItems.append(navbarItem);
    }
    $('.navbar').append(navbarItems);
    attachPunshesEvents(punshes);
}

function renderSinglePunshInHTML(punshes, punshName) {
    for(let key in punshes){
        let punsh = punshes[key];

        if (punsh['name'] === punshName){
            // Creating content-header and content-heading which have to be appended to the .content
            let contentHeader = $('<div>').addClass('content-header');
            let contentHeading = $('<div>').addClass('content-heading').text(punsh['name']).css('cursor', 'pointer');
            contentHeader.append(contentHeading);

            // Creating punsh-data which have to be appended to the .content and contains .punsh-type,
            // punsh-contents, .punsh-description,
            let punshData = $('<div>').addClass('punsh-data');

            // Creating punsh-type which is appended to punsh-data
            let punshType = $('<div>').addClass('punsh-type');
            // Appending directly the label and the h6
            punshType.append('<label>Type: </label>');
            punshType.append('<h6>' + punsh['type'] + '</h6>');

            // Creating punsh-contents which is appended to punsh-data
            let punshContents = $('<div>').addClass('punsh-contents');
            // Appending directly the label and the paragraph
            punshContents.append('<label>Contents: </label>');
            punshContents.append('<p>' + punsh['contents'] + '</p>');

            // Creating punsh-description which is appended to punsh-data
            let punshDescription = $('<div>').addClass('punsh-description');
            // Appending directly label and the paragraph
            punshDescription.append('<label>Description: </label>');
            punshDescription.append('<p>' + punsh['description'] + '</p>');

            // Appending everything to punsh-data
            punshData.append(punshType)
                .append(punshContents)
                .append(punshDescription);

            // Appending contentHeader and punshData to the .content
            $('.content').append(contentHeader)
                .append(punshData);

            attachBackEvents(punshes);

            // If we found the name of the punsh, we don't have to continue the loop
            break;
        }
    }
}

function attachPunshesEvents(punshes) {
    $('.navbar-item').click(function (e) {
        e.preventDefault();

        // Removing the whole .navbar-items
        $('.navbar-items').remove();

        // Geting the name of the clicked punsh
        let punshName = $(this).children().text();

        // get request from Data
        getPunshesOnPunshClicked(punshName);
    })
}

function attachBackEvents(punshes) {
    $('.content-heading').click(function (e) {
        e.preventDefault();

        // Clearing the data in .content
        $('.content').empty();

        getAllPunshes();
    })
}

function getAllPunshes() {
    let requstedURL = 'https://punsh-master.firebaseio.com/data/punshes.json';

    $.ajax(requstedURL, {
        method: 'GET',
        success: function (response) {
            renderAllPunshesInHTML(response);
        }
    })
}

function getPunshesOnPunshClicked(punshName) {
    let requstedURL = 'https://punsh-master.firebaseio.com/data/punshes.json';

    $.ajax(requstedURL, {
        method: 'GET',
        success: function (response) {
            renderSinglePunshInHTML(response, punshName);
        }
    })
}

getAllPunshes();