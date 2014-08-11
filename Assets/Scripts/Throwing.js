#pragma strict

var speed : int = 8;
var point : int = 300;
var isWepon : boolean = false;
private var score : Score;

function Start () {
	rigidbody2D.velocity = transform.up.normalized * speed;
	score = FindObjectOfType(Score);
}

function Update () {
	transform.Rotate(0,0,15);
}

function OnTriggerEnter2D(c : Collider2D){
	
	var layerName : String = LayerMask.LayerToName(c.gameObject.layer);
	if(isWepon == false && layerName == "Player"){
		Destroy(gameObject);
		score.addScore(point);
	}
}