#pragma strict

var speed : float = 9;
var rightEndPosition : Vector3;
var leftEndPosition : Vector3;
private var isRight : boolean = true;
private var adjust : float = 0.1; 

function Start(){
	yield WaitForSeconds (1);
	shot();
}

function Update () {
	
	//end position?
	var pos = transform.position;
	if(pos.x < leftEndPosition.x || pos.x > rightEndPosition.x){
		if(isRight){
			isRight = false;
			transform.position = rightEndPosition;
			transform.localScale.x = -1;
		}else{
			isRight = true;
			transform.position = leftEndPosition;
			transform.localScale.x = 1;
		}
	}
	
	//random turn?
	if(1 == parseInt(Random.Range(-10.0 ,40.0))){
		if(isRight){
			isRight = false;
			transform.localScale.x = -1;
		}else{
			isRight = true;
			transform.localScale.x = 1;
		}
	}
	
	//move to right or left
	var x = (isRight) ? 1 : -1;
	var direction = new Vector2(x , 0).normalized;
	rigidbody2D.velocity = direction * speed;
}

function shot(){
	var shotPosition : Transform;
	var i : int;
	var rand : int;
	var prefab : GameObject;
	var prefabEgg : GameObject = Resources.Load("Egg");
	var prefabWepon01 : GameObject = Resources.Load("Wepon01");
	var prefabWepon02 : GameObject = Resources.Load("Wepon02");
	while(true){
		rand = parseInt(Random.Range(0.0 ,10.0));
		if(rand == 1){
			prefab = prefabWepon01;
		}else if(rand == 2){
			prefab = prefabWepon02;
		}else{
			prefab = prefabEgg;
		}
		i = (isRight) ? 1 : 0;
		shotPosition = transform.GetChild(i);
		Instantiate(prefab,shotPosition.position,shotPosition.rotation);
		yield WaitForSeconds (0.1);
	}
}