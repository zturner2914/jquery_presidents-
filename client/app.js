$(function(){

    var masterArray = [];
    var winner;
    $('.getCandidates').on('click', function(){
    $.ajax({
        url:"/getDems"
    }).done(function(response) {
        //console to see if anything works
        console.log(response);
        var demsHeader = $("<h3>" + "Democrats Nominees" + "</h3>");
        $('.listOfCandidates').append(demsHeader);
        for (var i = 0; i < response.length; i++) {
            //console.log(response[i]);
           // console.log(response[i].name);
            var demsContent = $("<li>" + response[i].name + "</li>");
            $('.listOfCandidates').append(demsContent);
             masterArray[i] = response[i].name;
            // console.log(masterArray);

        }

    });

        $.ajax({
            url:"/getReps"
        }).done(function(response){
            //console.log(response);
            var repsHeader = $("<h3>" + "Republican Nominees" + "</h3>");
            $('.listOfCandidates').append(repsHeader);
            for (var i = 0; i < response.length; i++) {
                var repsContent = $("<li>" + response[i].name + "</li>");
                $('.listOfCandidates').append(repsContent);
                masterArray[i+5] = response[i].name;
                //console.log(masterArray);
               // winner = masterArray[Math.floor(Math.random() * masterArray.length)];
               // console.log(winner);
            }
        });

        $('.getWinner').on('click', function(){
            winner = masterArray[Math.floor(Math.random() * masterArray.length)];
            console.log(winner);
            $('.winner').append(winner);



        });



    });


});







