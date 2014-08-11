#pragma strict

function OnAnimationFinish(){
	yield WaitForSeconds (1);
	Destroy(gameObject);
}