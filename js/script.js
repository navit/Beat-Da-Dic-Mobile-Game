/* Author: Mani - Uri - Navit - Isaac */
var vars = {
	playerScore : 0,
	computerScore : 0,
	playerMove : null,
	computerMove : null,
	timer : 6,
	didPlayerMove : false	
};
function randomizeInt(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkWinner(){
		if(vars.playerMove == vars.computerMove){
			console.log('Game is tied.');
		} else if(vars.playerMove == null){
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'rock' &&  vars.playerMove == 'scissors'){
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'paper' &&  vars.playerMove == 'rock'){
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'scissors' &&  vars.playerMove == 'paper'){
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'rock' &&  vars.playerMove == 'paper'){
			console.log('Player Won');
			vars.playerScore++;
		} else if(vars.computerMove == 'paper' &&  vars.playerMove == 'scissors'){
			console.log('Player Won');
			vars.playerScore++;
		} else if(vars.computerMove == 'scissors' &&  vars.playerMove == 'rock'){
			console.log('Player Won');
			vars.playerScore++;
			
		}
	console.log(vars.playerScore);
	console.log(vars.computerScore);
	if(vars.playerScore == 2 || vars.computerScore == 2) endMatch();
}
function endMatch(){
	if(vars.playerScore == 2) console.log('player wins the match');
	if(vars.computerScore == 2) console.log('computer wins the match');
	vars.computerScore = vars.playerScore = 0;
}
$(document).ready(function(){
	
	
	if ( Modernizr.csstransforms ) {
		var slider = new Swipe(document.getElementById('slider'),{
			startSlide: 0,
			speed: 400,
			auto: 3000
		});
	}
	$('#next').click(function(event){
		event.preventDefault();
		slider.next();
	});
	$('#prev').click(function(event){
		event.preventDefault();
		slider.prev();
	});
	$(document).keydown(function(e){
    	switch(e.keyCode){
       		case 37:
    			slider.prev();
    			break;
    			console.log(37);
    		case 39:
    			slider.next();
    			break;
    	}
    });
    $('.dictator').click(function(){
		var pageUrl = $(this).attr('id');
		pageUrl += '.html';
		window.location = pageUrl;
	});
	$('.ok').click(function(){
		vars.timer = 6;
		vars.didPlayerMove = false;
		$('.modal').fadeOut(300,function(){
			var currentDic = $('body').attr('id'),
			computerMoveIndex = randomizeInt(0,dictators.hitler.choices.length-1);
			vars.computerMove = dictators.hitler.choices[computerMoveIndex];
			$('h1#computerMove>span').text(vars.computerMove);
			console.log(vars.computerMove);	
			var countDown = setInterval(function(){
				if(vars.timer > 0){
					vars.timer--;
					$('h3#timer').text(vars.timer);
					$('#weapons>li').click(function(){
						if(vars.didPlayerMove == false){
							vars.playerMove = $(this).attr('id');
							vars.didPlayerMove = true;
							vars.timer = 0;
							$('h3#timer').text(vars.timer);
								rock(kimJongIl);
						}	
					});
					console.log(vars.playerMove);
				} else {
					checkWinner();
					vars.computerMove = vars.playerMove = null;
					clearInterval(countDown);
					$('.modal').fadeIn(300);
				}
			},1000); 
			
		});
	});
    
});


