class counter
{
    constructor()
    {
        this.count=0;
        this.interval=null;
    }
    start()
    {
        if(!this.interval)
        {
            this.interval=setInterval(()=>
            {
                this.count++;
                this.render()
            },1000)
        }
    }
    stop()
    {
        if(this.interval)
        {
            clearInterval(this.interval);
            this.interval=null;
        }
    }
    render()
    {
        document.getElementById('countDisplay').innerText=this.count;
    }
}
const counter=new Counter();
document.getElementById('startstopbtn').addEventListener('click',function()
{
    if(this.textContent==='Start')
    {
        counter.start();
        this.textContent='stop'

    }
})