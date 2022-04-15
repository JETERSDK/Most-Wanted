function app(people) {

    var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    switch (searchType) {
        case 'yes':
            searchByName(people);
            break;
        case 'no':
            searchByTraits(people);
            break;
        default:
            app(people);
            break;
    }
}

function mainMenu(person, people) {

    if (!person) {
        alert("Could not find that individual.");
        return app(people);
    }

    var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

    if (displayOption === null) {
        app(people);
    }
    else {
        displayOption = displayOption.toLowerCase();

        switch (displayOption) {
            case "info":
                displayPerson(person, people);
                break;
            case "family":
                displayFamily(person, people);
                break;
            case "descendants":
                displayDescendants(person, people);
                break;
            case "restart":
                app(people);
                break;
            case "quit":
                return;
            default:
                return mainMenu(person, people);
        }
    }
}

function searchByTraits(people) {

    var listed = "";
    var filteredList;

    filteredList = searchByHeight(filteredList);
    filteredList = searchByWeight(filteredList);
    filteredList = searchByOccupation(filteredList);
    filteredList = searchByEyeColor(filteredList);

    if (filteredList.length === 22) {
        alert("You said no to all filters, there is no one to display.");
    }
    else if (filteredList.length === 0) {
        alert("There is no one that meets your criteria.");
    }
    else {
        for (var i = 0; i < filteredList.length; i++) {
            listed += filteredList[i].firstName + " " + filteredList[i].lastName + ". ";
        }
        alert(listed);
    }

    app(people);
}

function searchByHeight(people) {
    var heightSearch = promptFor("Do you want to search by height? Enter yes or no.", yesNo).toLowerCase();

    switch (heightSearch) {
        case "yes":
            var findHeight = lookUpHeight(people);
            return findHeight;
        case "no":
            return people;
        default:
            searchByHeight(people);
            break;
    }
}

function searchByWeight(people) {
    var weightSearch = promptFor("Do you want to search by weight? Enter yes or no.", yesNo).toLowerCase();

    switch (weightSearch) {
        case "yes":
            var findWeight = lookUpWeight(people);
            return findWeight;
        case "no":
            return people;
        default:
            searchByWeight(people);
            break;
    }
}

function searchByOccupation(people) {
    var occupationSearch = promptFor("Do you want to search by occupation? Enter yes or no.", yesNo).toLowerCase();

    switch (occupationSearch) {
        case "yes":
            var findOccupation = lookUpOccupation(people);
            return findOccupation;
        case "no":
            return people;
        default:
            searchByOccupation(people);
            break;
    }
}

function searchByEyeColor(people) {
    var eyeColorSearch = promptFor("Do you want to search by eye color? Enter yes or no.", yesNo).toLowerCase();

    switch (eyeColorSearch) {
        case "yes":
            var findEyeColor = lookUpEyeColor(people);
            return findEyeColor;
        case "no":
            return people;
        default:
            searchByEyeColor(people);
            break;
    }
}

function lookUpOccupation(people) {

    var occupation = promptFor("What is the person's occupation?", chars);
    var occupationFilteredArray = people.filter(function (element) {

        if (element.occupation === occupation) {
            return true;
        }
    });

    return occupationFilteredArray;
}

