class Box
{
	constructor(x,y,w,h)
	{
		var options = {
			restitution:0.5,
			friction:0.5,
			density:1
		}
		
		
		//this.image=loadImage("images/tree.png")
		//this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		//this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		this.body=Bodies.rectangle(x,y,w,h,options)
		this.w=w;
		this.h=h;

		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x,pos.y);
			fill("blue")
			rectMode(CENTER);
			rect(0,0,this.w, this.h)
			pop()
			
	}

}