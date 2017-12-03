let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

renderAllPunshesInHTML(punshes);

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

        // Rendering the single Punsh
        renderSinglePunshInHTML(punshes, punshName);
    })
}

function attachBackEvents(punshes) {
    $('.content-heading').click(function (e) {
        e.preventDefault();

        // Clearing the data in .content
        $('.content').empty();

        renderAllPunshesInHTML(punshes);
    })
}