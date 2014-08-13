#pragma strict

var player : GameObject;
private var title : GameObject;
private var score : Score;

function Start(){
	title = GameObject.Find("Title");
	score = FindObjectOfType(Score);
}

function OnGUI(){
	if(IsPlaying() == false && Event.current.type == EventType.MouseDown){
		GameStart();
	}
}

function GameStart(){
	title.SetActive(false);
	Instantiate (player, player.transform.position, player.transform.rotation);
	score.clearScore();
}

function GameOver(){
	title.SetActive(true);
}

function IsPlaying(){
	return (title.activeSelf == false) ? true : false;
}