#pragma strict

function OnTriggerExit2D(c : Collider2D){
	Destroy(c.gameObject);
}