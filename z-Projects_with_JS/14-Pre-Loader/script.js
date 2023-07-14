window.addEventListener('DOMContentLoaded',()=>{
    console.log("dom tree loaded");
})

const lineLoader = document.querySelector(".line-loader");
const right = document.querySelector(".right");

let width = 0;

function widthUpdate(){
    console.log("called sucess");
    width++;
    lineLoader.style.width = `${width}%`;

    if(width >= 199)
    {
        clearInterval(timeFunc);
    }
}


const timeFunc = setInterval(widthUpdate, 1000);


window.addEventListener('load',()=>{
    console.log("fully loaded");

    width = 198 ;
    widthUpdate();
    
    right.style.opacity = 1;

    let tl = gsap.timeline();

    tl.from(".lowest",{
        
        onStart : function(){
            $('.lowest').textillate({ 
                                        in: { 
                                            
                                            effect: 'fadeInUp',
    
                                            // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                            callback : function(){
                                                $('.lowest').textillate('out')
                                            } 
                                            } , 
    
                                        out:{
                                            effect: 'fadeOutUp'
                                            } 
                                    });
        }
        })
    
        .from(".second-lowest",{
    
            opacity : 0,
            delay : 1,
    
            onStart : function(){
                $('.second-lowest').textillate({ 
                                            in: { 
                                                opacity : 1,
                                                effect: 'fadeInUp',
        
                                                // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                callback : function(){
                                                    $('.second-lowest').textillate('out')
                                                } 
                                                } , 
        
                                            out:{
                                                effect: 'fadeOutUp'
                                                } 
                                        });
            }
            })
    
        .from(".second-top",{
    
                opacity : 0,
                delay : 1,
        
                onStart : function(){
                    $('.second-top').textillate({ 
                                                in: { 
                                                    opacity : 1,
                                                    effect: 'fadeInUp',
            
                                                    // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                    callback : function(){
                                                        $('.second-top').textillate('out')
                                                    } 
                                                    } , 
            
                                                out:{
                                                    effect: 'fadeOutUp'
                                                    } 
                                            });
                }
                })
    
        .from(".top",{
    
                    opacity : 0,
                    delay : 1,
            
                    onStart : function(){
                        $('.top').textillate({ 
                                                    in: { 
                                                        opacity : 1,
                                                        effect: 'fadeInUp',
                
                                                        // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                        callback : function(){
                                                            $('.top').textillate('out')
                                                        } 
                                                        } , 
                
                                                    out:{
                                                        effect: 'fadeOutUp'
                                                        } 
                                                });
                    }
                    })    
        
        .to(".loader",{
                    top : "-100%" ,
                    deplay : 1,
                    duration : 3 ,
                    // ease : Power4.easeOut
    
                        })

                    
})