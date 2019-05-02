"use strict";
const main = document.getElementById("results");
const url = "https://apis.is/concerts";


fetch(url)
    .then(function(results) {
        return results.json();
    })
    .then(function(results) {
        let concerts = [...results.results];
        console.log(concerts);
        return concerts.map(function(concert) {
            let div = document.createElement("div"),
                img = document.createElement("img"),
                pName = document.createElement("p"),
                pDate = document.createElement("p");
            img.src = concert.imageSource
            let date = concert.dateOfShow;
            let dateArray = date.split("T");
            let islDateArray = dateArray[0].split("-");
            let islclockArray = dateArray[1].split(":")

            function islDate(year, month, day) {
                return day +"/" + month + "/" + year;
            }
            
            function islclock(hours, minutes) {
                return hours + ":" + minutes;
            }

            console.log(islDateArray)
            pName.innerHTML = concert.eventDateName;
            pDate.innerHTML = islDate(islDateArray[0],islDateArray[1],islDateArray[2]) + " Kl: " + islclock(islclockArray[0], islclockArray[1]);
            div.appendChild(img);
            div.appendChild(pName);
            div.appendChild(pDate);
            main.appendChild(div);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
