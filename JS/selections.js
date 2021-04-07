
    var landen = ['Kies een land', 'België', 'Duitsland','Duitsland','Frankrijk','Italië','Kroatië','Litouwen','Nederland','Spanje'];
    var option = "";
    for(var i =0; i<landen.length ; i++)
    {
        option += '<option value="' + landen[i] + '">' + landen[i]
    }
document.getElementById('landen').innerHTML = option

var provincies = ['Kies een provincie', 'Antwerpen', 'Limburg','Luik','Oost-Vlaanderen','Vlaams-Brabant','Waals-Brabant','West-Vlaanderen','Henegouwen'];
    var option = "";
    for(var i =0; i<provincies.length ; i++)
    {
        option += '<option value="' + provincies[i] + '">' + provincies[i]
    }
document.getElementById('provincie').innerHTML = option

// var postcodes = ['', '2440', '2018 ','7000 ','3500 ','4000 ','6700 ','5000 ','9000 '];
//     var option = "";
//     for(var i =0; i<postcodes.length ; i++)
//     {
//         option += '<option value="' + postcodes[i] + '">' + postcodes[i]
//     }
// document.getElementById('postcode').innerHTML = option