#pragma strict

var isRight : boolean = true;
var speed : float = 8;

function Update () {
	
	//move to right and left
	var x = Input.GetAxisRaw("Horizontal");
	var direction = new Vector2(x , 0).normalized;
	rigidbody2D.velocity = direction * speed;
	
	//change the animation
	if((isRight && x < 0)){
		isRight = false;
		transform.localScale.x = -1;
	}
	if((!isRight && x > 0)){
		isRight = true;
		transform.localScale.x = 1;
	}
	
	Clamp();
}

function Clamp(){
	var min = Camera.main.ViewportToWorldPoint(new Vector2(0,0));
	var max = Camera.main.ViewportToWorldPoint(new Vector2(1,1));
	var pos = transform.position;
	
	pos.x = Mathf.Clamp(pos.x, min.x + 0.7, max.x - 0.7);
	transform.position = pos;
}