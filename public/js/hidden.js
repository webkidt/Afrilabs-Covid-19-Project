var work = document.getElementById("work");
var travel = document.getElementById("travel");
var health = document.getElementById("health");
var collab = document.getElementById("collab");
var videos = document.getElementById("conferencing");
var storage = document.getElementById("storage-services");
var sms = document.getElementById("sms");
var wellbeing = document.getElementById("wellbeing");
var security = document.getElementById("security");
var productivity = document.getElementById("personalprod");
var innovation = document.getElementById("responseTable");
var oppList = document.getElementById("oppList");
var webList = document.getElementById("webinars");
var hotlines = document.getElementById("hotlines");
var mapping = document.getElementById("mapping");
var twitter = document.getElementById("twitter-feed");
var twitterM = document.getElementById("twitter-feedMobile");
var twitterS = document.getElementById("twitter-feedSmaller");

function displayWork(){
    if (work.style.display === "none") {
        work.style.display = "block";
    } else {
        work.style.display = "none";
    }
}
function  displayTravel(){

    if (travel.style.display === "none") {
        travel.style.display = "block";
    } else {
        travel.style.display = "none";
    }
}

function  displayHealth(){

    if (health.style.display === "none") {
        health.style.display = "block";
    } else {
        health.style.display = "none";
    }
}

function  displayCollab(){

    if (collab.style.display === "none") {
        collab.style.display = "block";
    } else {
        collab.style.display = "none";
    }
}

function  displayVideos(){

    if (videos.style.display === "none") {
        videos.style.display = "block";
    } else {
        videos.style.display = "none";
    }
}

function  displayStorage(){

    if (storage.style.display === "none") {
        storage.style.display = "block";
    } else {
        storage.style.display = "none";
    }
}

function  displaySms(){

    if (sms.style.display === "none") {
        sms.style.display = "block";
    } else {
        sms.style.display = "none";
    }
}

function  displayWellbeing(){

    if (wellbeing.style.display === "none") {
        wellbeing.style.display = "block";
    } else {
        wellbeing.style.display = "none";
    }
}

function  displayCollab(){

    if (collab.style.display === "none") {
        collab.style.display = "block";
    } else {
        collab.style.display = "none";
    }
}

function  displaySecurity(){

    if (security.style.display === "none") {
        security.style.display = "block";
    } else {
        security.style.display = "none";
    }
}

function  displayProductivity(){

    if (productivity.style.display === "none") {
        productivity.style.display = "block";
    } else {
        productivity.style.display = "none";
    }
}

function  displayInnovation(){

    if (innovation.style.display === "none") {
        innovation.style.display = "block";
    } else {
        innovation.style.display = "none";
    }
}

function  displayOppList(){

    if (oppList.style.display === "none") {
        oppList.style.display = "block";
    } else {
        oppList.style.display = "none";
    }
}

function  displayWebList(){

    if (webList.style.display === "none") {
        webList.style.display = "block";
    } else {
        webList.style.display = "none";
    }
}

function  displayTable(){

    if (hotlines.style.display === "none") {
        hotlines.style.display = "block";
    } else {
        hotlines.style.display = "none";
    }
}

function  displayCardBody(){

    if (mapping.style.display === "none") {
        mapping.style.display = "block";
    } else {
        mapping.style.display = "none";
    }
}

function  displayFeed(){
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
        if (twitter.style.display === "none") {
            twitter.style.display = "block";
        } else {
            twitter.style.display = "none";
        }
    }

    if (window.matchMedia('screen and (max-width: 600px)').matches){
        if (twitterM.style.display === "none") {
            twitterM.style.display = "block";
        } else {
            twitterM.style.display = "none";
        }
    }

    if (window.matchMedia('screen and (max-width: 600px)').matches){
        if (twitterS.style.display === "none") {
            twitterS.style.display = "block";
        } else {
            twitterS.style.display = "none";
        }
    }

    
}




