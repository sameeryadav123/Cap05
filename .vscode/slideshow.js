let slides=document.querySelectorAll('#slideshow img');
function showslide(index)
{
    slides.forEach(slide,i)=>{
        if(i === index)
        {
            slide.style.display='block';
        }
        else
        {
            slide.style.display='none';
        }
    }
}
function startslideshow()
{
    slideindex
    slideinterval=setinterval(()=>{
        

    })

}
showslide(slideindex);