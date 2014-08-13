#pragma strict

function Start(){
	var windowSize : Vector2 = Camera.main.ViewportToWorldPoint(new Vector2(1,1));
	var size : Vector2 = windowSize * 2;
	GetComponent(BoxCollider2D).size = size;
}

function OnTriggerExit2D(c : Collider2D){
	Destroy(c.gameObject);
}