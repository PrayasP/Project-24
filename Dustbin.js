//Dustbin Class
class Dustbin{
    constructor(){
        var options = {
            isStatic: true
        }
        this.rec1 = Bodies.rectangle(1000-48-10-25-15,620+5-5-5,20,100,options)
        this.rec2 = Bodies.rectangle(1000-15,650+5,150,20,options)
        this.rec3 = Bodies.rectangle(1000+50+10+25-15,620-5,20,100,options)
        this.rec1.width = 20;
        this.rec1.height = 100;
        this.rec2.width = 150;
        this.rec2.height = 20;
        this.rec3.width = 20;
        this.rec3.height = 100;
        World.add(world,this.rec1);
        World.add(world,this.rec2);
        World.add(world,this.rec3);
        
    }

    display(){
        var pos1 = this.rec1.position;
        var pos2 = this.rec2.position;
        var pos3 = this.rec3.position;        
        rectMode(CENTER);
        fill("white");
        stroke("white");
        rect(pos1.x,pos1.y,this.rec1.width,this.rec1.height);
        rect(pos2.x,pos2.y,this.rec2.width,this.rec2.height);
        rect(pos3.x,pos3.y,this.rec3.width,this.rec3.height);
    }
}