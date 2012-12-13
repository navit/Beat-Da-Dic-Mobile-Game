var saddamHussein;
$(document).ready(function(){

/* attrs -------------------------------------------------------------------------------	*/	
	var stroke={'stroke':'#000','stroke-width':'5'},
		fill={'fill':'#000'},
		speechAttr={'fill':'#000','stroke-width':'.3','stroke':'#fff'};
/* ----------------------------------------------------------------------------------------	*/

	var canvas = new ScaleRaphael('canvasSaddam', 800, 800); // initiate scalable canvas
	// to randomize speech texts
	function randomizeInt(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
/* Kim Jong Il ---------------------------------------------------------------------------	*/
	saddamHussein={
	
			'body'			: canvas.path(paths.common.body).attr(fill),
			'face'			: canvas.path(paths.common.face).attr(stroke),
			'hair'			: canvas.path(paths.saddamHussein.hair).attr(fill),
			'mouth'			: canvas.path(paths.common.mouth).attr(stroke),
			'happyMouth'	: [{path:paths.common.mouthHappy},{path:paths.common.mouth}],
			'leftEye'		: canvas.path(paths.saddamHussein.leftEye).attr(fill),
			'rightEye' 		: canvas.path(paths.saddamHussein.rightEye).attr(fill),
			'leftBrow' 		: canvas.path(paths.saddamHussein.brows.left).attr(fill),
			'rightBrow' 	: canvas.path(paths.saddamHussein.brows.right).attr(fill),
			'angryLeftBrow'	: [{path:paths.saddamHussein.brows.leftAngry},{path:paths.saddamHussein.brows.left}],
			'angryRightBrow': [{path:paths.saddamHussein.brows.rightAngry},{path:paths.saddamHussein.brows.right}],
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
			'loseSpeech'	: canvas.path(paths.saddamHussein.speech.lose[randomizeInt(0,paths.saddamHussein.speech.lose.length)]).transform('t-300 -700').attr(speechAttr),
			'winSpeech'		: canvas.path(paths.saddamHussein.speech.win[randomizeInt(0,paths.saddamHussein.speech.win.length)]).transform('t-300 -700').attr(speechAttr)
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
	dicName.leftArm.stop().animate(dicName.scissors[+(now = !now)],100,'bounce'); 
};
function rock(dicName){
	dicName.leftArm.stop().animate(dicName.rock[+(now = !now)],100,'bounce'); 
}; 
function paper(dicName){
	dicName.leftArm.stop().animate(dicName.paper[+(now = !now)],100,'bounce'); 
}; 
// defining happy arm animations:

function dicWin(dicName){
	var leftArmAnim = Raphael.animation(dicName.leftArmHappy[+(happyArmsCounter = !happyArmsCounter)],1000,'bounce').repeat(10);
	var rightArmAnim = Raphael.animation(dicName.rightArmHappy[+(happyArmsCounter = happyArmsCounter)],1000,'bounce').repeat(10);
	dicName.mouth.stop().animate(dicName.happyMouth[+(mouthCounter = !mouthCounter)],400,'backOut',function(){
		saddamHussein.winSpeech.animate({'transform':'t-300 0'},300,'backOut',function(){
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
function loseMatchSaddam(){
	saddamHussein.leftBrow.stop().animate(saddamHussein.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
	saddamHussein.rightBrow.stop().animate(saddamHussein.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
	saddamHussein.face.animate(redFace)
	saddamHussein.mouth.animate({'stroke-width':'15'},2000,'ease',function(){
		saddamHussein.loseSpeech.animate({'transform':'t-300 0'},300,'backOut',setTimeout(function(){
			grenade(saddamHussein);
		},2000));
		
	});
	

	
};
/* Kim Jong Il looses one game  ----------------------------------------------------------	*/
function loseGameSaddam(){
	saddamHussein.leftBrow.stop().animate(saddamHussein.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
	saddamHussein.rightBrow.stop().animate(saddamHussein.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
	saddamHussein.face.animate(redFace);
	saddamHussein.mouth.animate({'stroke-width':'15'},500,'ease',function(){
		saddamHussein.leftBrow.stop().animate(saddamHussein.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
		saddamHussein.rightBrow.stop().animate(saddamHussein.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
		saddamHussein.mouth.animate({'stroke-width':'5'},500,'ease', function(){
			saddamHussein.face.animate(normalFace);
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
    			rock(saddamHussein);
    			console.log('rock');
    			break;
    		case 112:
    			paper(saddamHussein);
    			console.log('paper');
    			break;
    		case 115:
    			scissors(saddamHussein);
    			console.log('scissors');
    			break;
			case 32:
				dicWin(saddamHussein);
				console.log('Kim wins!');
				break;
			
    		default:
    			loseMatchSaddam();
    			console.log('Kim loses the whole game. You\'re done for!');	
    	}
    });
});
	