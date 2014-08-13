#pragma strict

var isRight : boolean = true;
var speed : float = 8;
var playerDead : GameObject;
private var adjustPlayerPosition : float = 0.7;

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
	
	var min = Camera.main.ViewportToWorldPoint(new Vector2(0,0));
	var max = Camera.main.ViewportToWorldPoint(new Vector2(1,1));
	var pos = transform.position;
	pos.x = Mathf.Clamp(pos.x, min.x + adjustPlayerPosition, max.x - adjustPlayerPosition);
	transform.position = pos;
}

function OnTriggerEnter2D(c : Collider2D){
	
	var layerName : String = LayerMask.LayerToName(c.gameObject.layer);
	if(layerName == "Wepon"){
		Destroy(gameObject);
		Instantiate(playerDead,transform.position,transform.rotation);
		FindObjectOfType(StageManager).GameOver();
		Destroy(c.gameObject);
	}
}