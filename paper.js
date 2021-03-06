class Paper{

    constructor (x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle (x,y,radius,options);
        this.image = loadImage("paper.png")
        World.add(world,this.body);
        this.radius = radius;

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
       
        push ();
        
        translate(pos.x,pos.y);
        rotate (angle);
        
        //fill ("white");
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.radius);
        imageMode(CENTER)
        image(this.image,0,0,80,80)
        pop ();
    
        
    }


}