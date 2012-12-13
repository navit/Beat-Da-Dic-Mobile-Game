//////////////////
/////////////////THIS ARRAY HOLDS ALL THE DICS INFO/////////////////// 
////////////////
var dictators = {
	
	hitler: 
	{
		id: 1,
		firstName: "Adolf",
		lastName: "Hitler",
		wins: 0,
		losses: 0,
		choices: ['rock','rock','rock','rock', 'rock','paper','paper','paper','scissors','scissors'],
		chatter: 
			{
				win: 
					[
						"hail hitler!", 
						"Mein Kempf is better than your kempf!", 
						"I do not see why man should not be just as cruel as nature", 
						"It is not truth that matters, but victory", 
						"Humanitarianism is the expression of stupidity and cowardice"
					],
				lose:
					[
						"damn yew!!!",
						"Arians shall reign soon!!", 
						"to the camps thou shalt go!", 
						"fall 7 times, stand up 8!", 
						"purge purge purge!"
					], 
				
				waiting: "WÃ¤hle mich!"		
			}
	},
	
	
	stalin: 
	{
		id: 2,
		firstName: "Joseph",
		lastName: "Stalin",
		wins: 0,
		losses: 0,
		choices: ['rock', 'rock', 'rock', 'rock', 'paper','paper', 'paper', 'scissors', 'scissors', 'scissors'],
		chatter: 
			{
				win: 
					[
						"One death is a tragedy; one million is a statistic!", 
						"Death solves all problems - no man, no problem!", 
						"You cannot make a revolution with silk gloves", 
						"I believe in one thing only, the power of human will", 
						"Stalinist oppression on the march."
					],
				lose:
					[
						"This is a great mistake!",
						"I trust no one, not even myself!", 
						"good use of it against the Japanese", 
						"Die, but do not retreat!", 
					], 
				
				waiting: "Ð·Ð°Ð±Ñ€Ð°Ñ‚ÑŒ Ð¼ÐµÐ½Ñ!"		
			}
	},
	
	kim: 
	{
		id: 3,
		firstName: "Jong-il",
		lastName: "Kim",
		wins: 0,
		losses: 0,
		choices: ['rock', 'rock', 'rock', 'paper','paper', 'paper', 'paper', 'paper', 'scissors', 'scissors'],
		chatter: 
			{
				win: 
					[
						"The revolution is carried out by means of one's thought, not through one's family background", 
						"Great ideology creates great times!", 
						"I'm an Internet expert too..", 
						"Glory to the heroic soldiers of the Korean People's Army!", 
					],
				lose:
					[
						"The liquidation of colonialism is a trend of the times which no force can hold back!!",
						"It's all a lie...They're just pretending to praise me!", 
						//"Let us advance under the banner of Marxism-Leninism and the Juche Idea", 
						"The dear leader shall never lose!",
						"bomb is coming soon!!!!", 
					], 
				
				waiting: "ë‚˜ ì°ì–´ì¤˜/ë‚˜ ì°ì–´ !"		
			}
	},
	
	pinochet: 
	{
		id: 4,
		firstName: "Augusto",
		lastName: "Pinochet",
		wins: 0,
		losses: 0,
		choices: ['rock', 'rock', 'rock', 'paper', 'paper', 'scissors', 'scissors', 'scissors', 'scissors', 'scissors'],
		chatter: 
			{
				win: 
					[
						"My soldier's heart stirs and murmurs from deep within: Thank you.", 
						"I regret and suffer those losses, but it's God's will", 
						"god will pardon me if I committed excesses, but I don't think I did..", 
						"Sometimes democracy must be bathed in blood", 
					],
				lose:
					[
						"I'm not a dictator. It's just that I have a grumpy face.",
						"Not a leaf moves in Chile if I don't know about it", 
						"rather die in this battle than to go to Spain.", 
						"I'll take whatever steps necessary to end this situation.", 
					], 
				
				waiting: "Â¡ElÃ­geme a mÃ­!"		
			}
	},
	
	
	
	sadam: 
	{
		id: 5,
		firstName: "Sadam",
		lastName: "Hussein",
		wins: 0,
		losses: 0,
		choices: ['rock', 'rock', 'rock', 'rock', 'rock', 'paper', 'paper', 'scissors', 'scissors', 'scissors'],
		chatter: 
			{
				win: 
					[
						"Allah is on our side.", 
						"Long live the people, long live the nation, down with the invaders, God is great, God is great!", 
						"My name is Saddam Hussein. I am the president of Iraq!", 
						"I didn't have time to write poetry before, but now I have had the time to become a poet", 
					],
				lose:
					[
						"I am ready to die. I am not scared of execution!",
						"My spirit is still standing firm and will not fall, And in my body runs the blood of the great", 
						"Victory will be ours soon!", 
						"We will chase Americans to every corner at all times!", 
					], 
				
				waiting: "Ø§Ø®ØªÙŠØ§Ø± Ù„ÙŠ"		
			}
	},	
	
	
	
	chavez: 
	{
		id: 6,
		firstName: "Hugo",
		lastName: "Chavez",
		wins: 0,
		losses: 0,
		choices: ['rock', 'rock', 'paper', 'paper', 'paper', 'paper', 'scissors', 'scissors', 'scissors', 'scissors'],
		chatter: 
			{
				win: 
					[
						"This has been a great victory for the Venezuelan people.", 
						"Venezuela has changed forever!", 
						"Long live the Unity of Latin America!", 
						"Capitalism leads us straight to hell!!", 
					],
				lose:
					[
						"They do not walk in... the path of Christ. ",
						"I haven't resigned, and I will not resign!", 
						"We must confront the privileged elite who have destroyed a large part of the world.", 
						"There is no turning back.", 
					], 
				
				waiting: "Â¡Deben escojerme!!"		
			}
	},
		
};

