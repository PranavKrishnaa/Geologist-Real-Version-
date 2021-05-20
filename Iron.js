class Iron{
	constructor(x,y,width,height) {
	// assign options to the rubber ball
	var options={
		'restitution':0.8, 
		'friction':3,
		'density':30
	}
	this.body=Bodies.rectangle(this.x,this.y,width,height,options)	
	this.x=x;
	this.y=y;
	World.add(world, this.body);

	}
	display()
{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()
	}

}