function HouseKeep(name,work,yearsofexperence){
    this.name=name;
        this.work=work;
        this.yearsofexperence=yearsofexperence;
        this.movesuitcase=function(){
            alert("hello");
            move();
        }
}
var housekeep=new HouseKeep("ramesh","bathroom",112);
housekeep.move();
