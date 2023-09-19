function Vechile (brand,model,speed,fueltype)
{
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fueltype=fueltype;
    this.horn=function()
    {
        console.log("horn")
    }
}
Vechile.prototype.accelerate=function()
{
    console.log(`accelerated`);
}
Vechile.prototype.brake=function()
{
    console.log(`braking`);
}
Vechile.prototype.refule=function()
{
    console.log(`refuling`);
}
let vechile=new vechile("maruti","dzire",120,"petrol");
function Car(brand,model,speed,fueltype,numberofwheels)
{
    Vechile.call(this,brand,model,speed,fueltype)
}