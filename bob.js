class bob
{
   constructor(x,y,radius){
       var option={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8
        

       }
       this.body=Bodies.circle(x,y,radius/2,option);
       this.x=x;
       this.y=y;
       this.radius=radius;


       World.add(world,this.body);
       
   }
   display(){
       var pose=this.body.position;
       
       var angle=this.body.angle;
       

     push();
     translate(pose.x, pose.y);
     rotate(angle);
     fill('pink');
     ellipseMode(CENTER);
     ellipse(0,0,this.radius,this.radius);
     
     pop();
       
       
       
       
   }
}