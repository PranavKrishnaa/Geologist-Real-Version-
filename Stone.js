class Stone{
	constructor(x,y,){
	// assign options to the stone
	var options={
		'restitution':0.8, 
		'friction':0.9,
		'density':12
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
			fill("black");
			rect(0,0,this.width,this.height);
			pop()
	}

}