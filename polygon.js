class Polygon{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		
		
		this.body=Bodies.circle(this.x, this.y,10, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			
			rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow")
			
			ellipse(paperpos.x,paperpos.y,50);
			
			
	}

}