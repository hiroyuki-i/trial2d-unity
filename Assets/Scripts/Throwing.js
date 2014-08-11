#pragma strict

var speed : int = 8;

function Start () {
	rigidbody2D.velocity = transform.up.normalized * speed;
}

function Update () {
	transform.Rotate(0,0,15);
}