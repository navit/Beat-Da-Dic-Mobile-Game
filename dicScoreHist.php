<?php

$connection = new Mongo(); //this is the connection to mongo
$db = $connection->game; //this is the name of the database we want to look in
$collection = $db->dictators; //this is the name of the collection inside the database


////////////////// HITLER
//searching for one record in dictators collection with the num of 1 (id)
//once this record is found, it is stored to $data
$data = $collection->findOne(array('num'=> 1));

//creating a variable to store hitlers wins 
$hitlerWins = $data['wins'];

//creating a variable to store hitlers losses 
$hitlerLosses = $data['losses'];

	
	////////////////// STALIN
//searching for one record in dictators collection with the num of 2 (id)
//once this record is found, it is stored to $data
$data = $collection->findOne(array('num'=> 2));

//creating a variable to store hitlers wins 
$stalinWins = $data['wins'];

//creating a variable to store hitlers losses 
$stalinLosses = $data['losses'];

	
	////////////////// KIM
//searching for one record in dictators collection with the num of 3 (id)
//once this record is found, it is stored to $data
$data = $collection->findOne(array('num'=> 3));

//creating a variable to store hitlers wins 
$kimWins = $data['wins'];

//creating a variable to store hitlers losses 
$kimLosses = $data['losses'];

	
	////////////////// PINOCHET
//searching for one record in dictators collection with the num of 4 (id)
//once this record is found, it is stored to $data
$data = $collection->findOne(array('num'=> 4));

//creating a variable to store hitlers wins 
$pinochetWins = $data['wins'];

//creating a variable to store hitlers losses 
$pinochetLosses = $data['losses'];

	
	////////////////// HUSSEIN
//searching for one record in dictators collection with the num of 5 (id)
//once this record is found, it is stored to $data
$data = $collection->findOne(array('num'=> 5));

//creating a variable to store hitlers wins 
$husseinWins = $data['wins'];

//creating a variable to store hitlers losses 
$husseinLosses = $data['losses'];


	////////////////// CHAVEZ
//searching for one record in dictators collection with the num of 6 (id)
//once this record is found, it is stored to $data
$data = $collection->findOne(array('num'=> 6));

//creating a variable to store hitlers wins 
$chavezWins = $data['wins'];

//creating a variable to store hitlers losses 
$chavezLosses = $data['losses'];



///////////CREATE AN ARRAY TO RETURN DATA TO JAVASCRIPT
$response = array(); //create an array 

//populate the array with all the variables we created before this section
$response['hitlerWins'] = $hitlerWins; 
$response['hitlerLosses'] = $hitlerLosses; 
$response['stalinWins'] = $stalinWins; 
$response['stalinLosses'] = $stalinLosses; 
$response['kimWins'] = $kimWins; 
$response['kimLosses'] = $kimLosses; 
$response['pinochetWins'] = $pinochetWins; 
$response['pinochetLosses'] = $pinochetLosses; 
$response['husseinWins'] = $husseinWins; 
$response['husseinLosses'] = $husseinLosses; 
$response['chavezWins'] = $chavezWins; 
$response['chavezLosses'] = $chavezLosses; 
$response['status'] = "okay";



///////////SEND BACK TO JAVASCRIPT IN A JSON ARRAY
echo json_encode($response);



?>