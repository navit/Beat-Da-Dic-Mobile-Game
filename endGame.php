<?php


///////////// {{FAKE}} VARIABLES COMING FROM JAVASCRIPT (FOR TESTING PURPOSES)
/*
$jsFb =12; //facebook ID of the person who is playing
$jsDic = 'hitler'; //num id of the dictator who they played against
$jsWinner ='player'; //who is the winner of the match?
*/


//////////VARIABLES COMING FROM JAVASCRIPT. JAVASCRIPT SENDS THEM WITH $.GET
$jsFb =$_GET['jsFb']; //facebook ID of the person who is playing
$jsDic = $_GET['jsDic']; //num id of the dictator who they played against
$jsWinner =$_GET['jsWinner']; //who is the winner of the match?



//HERE IS WHERE WE CREATE THE CONNECTION TO MONGO, AND SET UP VARIABLES TO NAVIGATE OUR PATHS
$connection = new Mongo(); //this is the connection to mongo
$db = $connection->game; //this is the name of the DB we want to look in. its called 'game'
$playerCol = $db->player; //this is the collection inside the DB that holds all the players' data 
$dictatorCol = $db->dictators; //this is the collection inside the DB that holds all the dictators' data


//$data stores the DB 'row' (object) of the current player
$data = $playerCol->findOne(array('fbid'=> $jsFb));


//We check to see if there is anything stored to this facebook user's object (data) in the database. 
//If there is nothing stored, this must mean this user does not exist! 
if (!$data){ //If he doesn't exist, we will create a new object (set of data) for him:
	
	//create an array that will hold all the fields for this *new* user
	$newUserRecord = array( 
		"fbid"=> $jsFb, //the field fbid is the 'key' to this user. it hold's the user's facebook ID
		"hitler" => array( "wins"=> 0, "losses" => 0 ), //stats for hitler
		"stalin" => array( "wins" => 0, "losses" => 0 ), //stats for stalin 
		"kim" => array( "wins" => 0, "losses" => 0 ), //stats for kim
		"pinochet" => array( "wins" => 0, "losses" => 0 ), //stats for pinochet
		"hussein" => array( "wins" => 0, "losses" => 0 ), //stats for hussein
		"chavez" => array( "wins" => 0, "losses" => 0 ) //stats for chavez
	);
	
	$playerCol->insert($newUserRecord); //take the array we just created, and insert it into the database 
	echo "new User created in Database!";

} //end of: if (!$data['hitler']['wins'])

else if ($data){ //else if the user does exist in the database, 
	//dont do anything
} //end of: else if ($data['hitler']['wins'])



//if JS told us player won the match,
if ($jsWinner == 'player'){	
	
	$whatToModify = $jsDic.".wins";
	$newdata = array('$inc' => array($whatToModify=>1));// only in nested array the . works
	$playerCol->update(
		array("fbid" => "0123"), $newdata);
	
	//db.player.update({"fbid":"123456"},{'$set':{"fbid":"6789"}})
	

} //end of if ($jsWinner == 'player')

//if JS told us dictator won the match,
else if ($jsWinner == 'dictator'){
		
	echo 'dictator wins!';

	$whatToModify = $jsDic.".losses";
	$newdata = array('$inc' => array($whatToModify=>1));// only in nested array the . works
	$playerCol->update(
		array("fbid" => "0123"), $newdata);
	
	$dictatorCol->update(
		array ('last' => $jsDic), //look for this dictator
		array ('$inc'=>array('wins'=>1)) //add one win to his total wins
	);

} //end of else if ($jsWinner == 'dictator')
 
//we store the playerWinCount of this player against this dictator so we can return it to JS to be displayed in match results screen
$playerWinCount = $data[$jsDic]['wins'];

//we store the playerLossCount of this player against this dictator so we can return it to JS to be displayed in match results screen
$playerLossCount = $data[$jsDic]['losses'];


///////////CREATE AN ARRAY TO RETURN DATA TO JAVASCRIPT
$response = array(); //create an array 
$response['winCountAgainstThisDic'] = $playerWinCount; //insert winCount into it
$response['lossCountAgainstThisDic'] = $playerLossCount; //insert lossCount into it

///////////SEND BACK TO JAVASCRIPT IN A JSON ARRAY
echo json_encode($response);

?>