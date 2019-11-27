

//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


/*a standard GET request*/
function Get(url){
    let Httppreq = new XMLHttpRequest();
    Httppreq.open("GET", url, false)
    Httppreq.send(null)
    return Httppreq.responseText;
}

let quiz = JSON.parse(
    Get("https://opentdb.com/api.php?amount=25&category=25")
    )

    for (i = 0; i < 25; i++) {
        console.log(i + " " + quiz.results[i].question + "\n");
        var body = document.getElementById('body');
        body.innerHTML += quiz.results[i].question + "<br>"
        console.log(quiz.results[0].question);  //go to result and then go to question
    }
