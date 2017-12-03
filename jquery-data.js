let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

// renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh - The American Pie");

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

            // If we found the name of the punsh, we don't have to continue the loop
            break;
        }
    }
}