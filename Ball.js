class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:1,
			density:2
			}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill("red")
			//imageMode(CENTER);
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r)
			pop()
			
	}

}