var vacationType;
var groupSize;
var result;
var city;
var travelSuggestion;

function myFunction() {
    var vacationType = prompt(" What kind of trip would you like to go on, musical, tropical, or adventurous?", "")

    if (vacationType.toLowerCase() == 'musical') {
        destination = 'New Orleans';
    } else if (vacationType.toLowerCase() == 'tropical') {
        destination = 'Beach Vacation in Mexico';
    } else if (vacationType.toLowerCase() == 'adventurous') {
        destination = 'Whitewater Rafting in the Grand Canyon';
    } else {
        window.alert('Invalid choice! Please refresh and start over!')
        console.log('Invalid choice! Please refresh and start over!')
        return;
    }

    if (vacationType != null) {
        var groupSize = prompt("How many people are in your group?", "")


        if (groupSize == 1 || groupSize == 2) {
            travelSuggestion = 'First Class';
        } else if (groupSize >= 3 && groupSize <= 5) {
            travelSuggestion = 'Helicopter';
        } else if (groupSize >= 6) {
            travelSuggestion = 'Charter Flight';
        } else {
            window.alert('Invalid choice! Please refresh and start over!')
            console.log('Invalid choice! Please refresh and start over!')
            return;
        }

    }

    result = 'Since you’re a group of ' + groupSize + ' going on a ' + vacationType + ' trip, you should take a ' + travelSuggestion + ' to a ' + destination + '.'

    console.log(result);
    window.alert(result);
}