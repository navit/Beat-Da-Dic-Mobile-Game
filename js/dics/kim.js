var vars = {				
	playerScore : 0,
	computerScore : 0,
	playerMove : null,
	computerMove : null,
	timer : 6,
	winnerOfThisMatch : null,
	didPlayerMove : false
};
function requestDicHistScores() {        
           //DicHistScores will be the variable where the reply from php will be stored so that it can be used         
           var dicScoreHist = $.get("dicScoreHist.php",function(phpResponse) {
           		if(phpResponse["status"] == "okay") {
             	  // data.remove();
           		} //end if php response
                else {
				alert("THERE WAS AN ERROR");
				} //end else                  
			},"json"); //end $.get
			return false;
			console.log(DicHistScores);
       }; //end of RequestDicHistScores(

function sendMatchResults() {
       console.log('user facebook ID ' + vars.jsFb);
       var jsFb = vars.jsFb; //facebook ID of the person who is playing
       var jsDic = 'kim'; //num id of the dictator who they played against
       var jsWinner = vars.winnerOfThisMatch;        
       //the object data{} holds the information that javascript will send to php to query for the data it needs        
       var data = {}; 
       data["jsFb"] = jsFb;
       data["jsDic"] = jsDic;
       data["jsWinner"] = jsWinner;  
               //playerAgainstThisDicRecord will be the variable where the reply from php will be stored so that it can be used         
               var playerAgainstThisDicRecord = $.get("endGame.php", data, function(phpResponse) {
                       
                               if(phpResponse["status"] == "okay") {
                                       console.log('data sent');
                               }
                               else {
                               alert("THERE WAS AN ERROR");
                               } //end else
                               
               },"json"); //end $.get
               return false;
       };
function randomizeInt(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkWinner(){
		if(vars.playerMove == vars.computerMove){
			console.log('Game is tied.');
			$('.inGameModal p').text('The Game is Tied');
		} else if(vars.playerMove == null){
			console.log('Computer Won');
			$('.inGameModal p').text('The Dictator Wins!');
			vars.computerScore++;
		} else if(vars.computerMove == 'rock' &&  vars.playerMove == 'scissors'){
			$('.inGameModal p').text('The Dictator Wins!');
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'paper' &&  vars.playerMove == 'rock'){
			$('.inGameModal p').text('The Dictator Wins!');
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'scissors' &&  vars.playerMove == 'paper'){
			$('.inGameModal p').text('The Dictator Wins!');
			console.log('Computer Won');
			vars.computerScore++;
		} else if(vars.computerMove == 'rock' &&  vars.playerMove == 'paper'){
			$('.inGameModal p').text('The Playe Wins!');
			console.log('Player Won');
			loseGameKim();
			vars.playerScore++;
		} else if(vars.computerMove == 'paper' &&  vars.playerMove == 'scissors'){
			$('.inGameModal p').text('The Player Wins!');
			console.log('Player Won');
			loseGameKim();
			vars.playerScore++;
		} else if(vars.computerMove == 'scissors' &&  vars.playerMove == 'rock'){
			$('.inGameModal p').text('The Player Wins!');
			console.log('Player Won');
			loseGameKim();
			vars.playerScore++;
			
		}
	console.log(vars.playerScore);
	console.log(vars.computerScore);
	if(vars.playerScore == 2 || vars.computerScore == 2) endMatch();
}
function endMatch(){
	if(vars.playerScore == 2){
		vars.winnerOfThisMatch = 'player';
		loseMatchKim();
		console.log('player wins the match');
		sendMatchResults();
	}
	if(vars.computerScore == 2){
		vars.winnerOfThisMatch = 'dictator';
		console.log('computer wins the match');
		sendMatchResults();
		dicWin(kimJongIl);
	} 
	
}

$(document).ready(function(){
//vars.requestDicHistScores();


var kimJongIl;
/* attrs -------------------------------------------------------------------------------	*/	
	var stroke={'stroke':'#000','stroke-width':'5'},
		fill={'fill':'#000'},
		speechAttr={'fill':'#000','stroke-width':'.3','stroke':'#fff'};
/* ----------------------------------------------------------------------------------------	*/
	var canvas = new ScaleRaphael('canvas', 800, 800); // initiate scalable canvas
	// to randomize speech texts
	function randomizeInt(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
/* Kim Jong Il ---------------------------------------------------------------------------	*/
	kimJongIl={
			'body'			: canvas.path(paths.common.body).attr(fill),
			'face'			: canvas.path(paths.common.face).attr(stroke),
			'hair'			: canvas.path(paths.kimJongIl.hair).attr(fill),
			'mouth'			: canvas.path(paths.common.mouth).attr(stroke),
			'happyMouth'	: [{path:paths.common.mouthHappy},{path:paths.common.mouth}],
			'glassesLeft'	: canvas.path(paths.kimJongIl.glasses.left).attr(stroke),
			'glassesRight'	: canvas.path(paths.kimJongIl.glasses.right).attr(stroke),
			'glassesBridge' : canvas.path(paths.kimJongIl.glasses.bridge).attr(fill),
			'leftEye'		: canvas.path(paths.kimJongIl.leftEye).attr(fill),
			'rightEye' 		: canvas.path(paths.kimJongIl.rightEye).attr(fill),
			'leftBrow' 		: canvas.path(paths.kimJongIl.brows.left).attr(fill),
			'rightBrow' 	: canvas.path(paths.kimJongIl.brows.right).attr(fill),
			'angryLeftBrow'	: [{path:paths.kimJongIl.brows.leftAngry},{path:paths.kimJongIl.brows.left}],
			'angryRightBrow': [{path:paths.kimJongIl.brows.rightAngry},{path:paths.kimJongIl.brows.right}],
			'rightLeg'		: canvas.path(paths.common.legs.right).attr(fill),
			'leftLeg'		: canvas.path(paths.common.legs.left).attr(fill),
			'rightArm'		: canvas.path(paths.common.arms.right).attr(fill),
			'leftArm'		: canvas.path(paths.common.arms.left).attr(fill),
			'leftArmHappy'	: [{path:paths.common.arms.happyLeft},{path:paths.common.arms.left}],
			'rightArmHappy'	: [{path:paths.common.arms.happyRight},{path:paths.common.arms.right}],
			'scissors'		: [{path:paths.common.arms.scissor},{path:paths.common.arms.left}],
			'rock'			: [{path:paths.common.arms.rock},{path:paths.common.arms.left}],
			'paper'			: [{path:paths.common.arms.paper},{path:paths.common.arms.left}],
			'grenade'		: [{path:paths.common.arms.grenade},{path:paths.common.arms.left}],
			'loseSpeech'	: canvas.path(paths.kimJongIl.speech.lose[randomizeInt(0,paths.kimJongIl.speech.lose.length)]).transform('t-300 -700').attr(speechAttr),
			'winSpeech'		: canvas.path(paths.kimJongIl.speech.win[randomizeInt(0,paths.kimJongIl.speech.win.length)]).transform('t-300 -700').attr(speechAttr)
		}
/* ----------------------------------------------------------------------------------------	*/
var redFace = Raphael.animation({'fill':'#FF4848','opacity':'1'},200,'ease'),
	normalFace = Raphael.animation({'fill':'none'},200,'ease');
/* responsive -----------------------------------------------------------------------------	*/
function resizePaper(){
	var win = $(this);
	canvas.changeSize(win.width(), win.height(), true, false);
}
resizePaper();
$(window).resize(resizePaper);
/* ----------------------------------------------------------------------------------------	*/
/* rock, paper, scissor, happy functions --------------------------------------------------	*/
function scissors(dicName){
	dicName.leftArm.stop().animate(dicName.scissors[+(now = !now)],100,'bounce', function(){
		dicName.leftArm.stop().animate(dicName.paper[+(now = !now)],100,'linear');
	}); 
};
function rock(dicName){
	dicName.leftArm.stop().animate(dicName.rock[+(now = !now)],100,'bounce',function(){
		dicName.leftArm.stop().animate(dicName.paper[+(now = !now)],100,'linear');
	}); 
}; 
function paper(dicName){
	dicName.leftArm.stop().animate(dicName.paper[+(now = !now)],100,'bounce',function(){
		vars.playerDidPaper = true;
		dicName.leftArm.stop().animate(dicName.paper[+(now = !now)],100,'linear');
	});
}; 
// defining happy arm animations:
function dicWin(dicName){
	var leftArmAnim = Raphael.animation(dicName.leftArmHappy[+(happyArmsCounter = !happyArmsCounter)],1000,'bounce').repeat(10);
	var rightArmAnim = Raphael.animation(dicName.rightArmHappy[+(happyArmsCounter = happyArmsCounter)],1000,'bounce').repeat(10);
	dicName.mouth.stop().animate(dicName.happyMouth[+(mouthCounter = !mouthCounter)],400,'backOut',function(){
		kimJongIl.winSpeech.animate({'transform':'t-300 0'},300,'backOut',function(){
			dicName.rightArm.stop().animate(rightArmAnim);
			dicName.leftArm.stop().animate(leftArmAnim);
		});
	});
};
/* ----------------------------------------------------------------------------------------	*/	
/* Weapon functions --------------------------------------------------------------------	*/
function grenade(dicName){
	
	dicName.leftArm.stop().animate(dicName.grenade[+(now = !now)],100,'bounce',function(){
		var drawGrenade = canvas.path(paths.grenade).attr(fill).animate({'transform':'s7 7 r -30 t-5 20 '},900,'bounce',function(){
			drawGrenade.animate({'transform':'s-500 -500','fill':'#FF0000'},100,'linear',function(){
				console.log('oh shit we\'re dead.');
			});				
		});
	}); 
}
/* ----------------------------------------------------------------------------------------	*/	
/* Kim Jong Il looses a whole match  ------------------------------------------------------	*/
function loseMatchKim(){
	kimJongIl.leftBrow.stop().animate(kimJongIl.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
	kimJongIl.rightBrow.stop().animate(kimJongIl.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
	kimJongIl.face.animate(redFace)
	kimJongIl.mouth.animate({'stroke-width':'15'},2000,'ease',function(){
		kimJongIl.loseSpeech.animate({'transform':'t-300 0'},300,'backOut',setTimeout(function(){
			grenade(kimJongIl);
		},2000));
		
	});
};
/* Kim Jong Il looses one game  ----------------------------------------------------------	*/
function loseGameKim(){
	kimJongIl.leftBrow.stop().animate(kimJongIl.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
	kimJongIl.rightBrow.stop().animate(kimJongIl.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
	kimJongIl.face.animate(redFace);
	kimJongIl.mouth.animate({'stroke-width':'15'},500,'ease',function(){
		kimJongIl.leftBrow.stop().animate(kimJongIl.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
		kimJongIl.rightBrow.stop().animate(kimJongIl.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
		kimJongIl.mouth.animate({'stroke-width':'5'},500,'ease', function(){
			kimJongIl.face.animate(normalFace);
		});
		
	});		
};
/* ----------------------------------------------------------------------------------------	*/	
	// counter variables for animation	    
    var now = 1,
    	browsCounter = 1,
    	mouthCounter = 1,
    	happyArmsCounter = 1;
    console.log('Press "r" for Rock, "p" for Paper and "s" for Scissors\nPress any other key and piss Kim off!');
    $('html').keypress(function(event){
    	switch(event.which){
       		case 114:
    			rock(kimJongIl);
    			console.log('rock');
    			break;
    		case 112:
    			paper(kimJongIl);
    			console.log('paper');
    			break;
    		case 115:
    			scissors(kimJongIl);
    			console.log('scissors');
    			break;
			case 32:
				dicWin(kimJongIl);
				console.log('Kim wins!');
				break;
    		default:
    			loseMatchKim();
    			console.log('Kim loses the whole game. You\'re done for!');	
    	}
    });
    $('.inGameModal .ok').click(function(){
    	$('.inGameModal').fadeOut(200);
    });
    $('span.next1').click(function(){
		console.log('test');
		$('.bubble p').html('Here are the rules: Once the game begins, you will have 5 seconds to make a move.<br>');
		$(this).fadeOut(200);
		$('.next2').fadeIn(200);
		console.log($(this).attr('class'));
	});
	$('span.next2').click(function(){
		console.log('test');
		$('.bubble p').html('Tap to choose your weapon.<br>');
		$(this).fadeOut(200);
		$('.next3').fadeIn(200);
		$('#weapons').animate({opacity:1},300);
		console.log($(this).attr('class'));
	});
	$('span.next3').click(function(){
		console.log('test');
		$('.bubble p').html('You must win two out of three games to win the match.<br>');
		$(this).fadeOut(200);
		$('.next4').fadeIn(200);
		console.log($(this).attr('class'));
	});
	$('span.next4').click(function(){
		console.log('test');
		$('.bubble p').html('No crying allowed!<br>');
		$(this).fadeOut(200);
		$('.ok').fadeIn(200);
		console.log($(this).attr('class'));
	});
    
    
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
		console.log('s');
		vars.timer = 6;
		vars.didPlayerMove = false;
		$('.bubble').fadeOut(300,function(){
			var currentDic = $('body').attr('id'),
			computerMoveIndex = randomizeInt(0,dictators.kim.choices.length-1);
			vars.computerMove = dictators.kim.choices[computerMoveIndex];
			$('h1#computerMove>span').text(vars.computerMove);
			console.log(vars.computerMove);	
			var countDown = setInterval(function(){
				if(vars.timer > 0){
					vars.timer--;
					$('h3#timer').text(vars.timer);
					$('#weapons>li').click(function(){
						console.log('clicked');
						if(vars.didPlayerMove == false){
							vars.playerMove = $(this).attr('id');
							vars.didPlayerMove = true;
							vars.timer = 0;
							$('h3#timer').text(vars.timer);
							if(vars.computerMove === 'rock'){
								rock(kimJongIl);
							} else if(vars.computerMove === 'paper'){
								paper(kimJongIl);
							} else{
								scissors(kimJongIl);
							}
						}	
					});
					console.log(vars.playerMove);
				} else {
					$('.inGameModal').fadeIn(300);
					checkWinner();
					
					vars.computerMove = vars.playerMove = null;
					clearInterval(countDown);
				}
			},1000); 
			
		});
	});    
});
	