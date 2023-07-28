//web exm

const submitBtns = document.querySelectorAll(".exam-question-navigator ion-button");


//==================

const API_KEY = 'sk-GblLaZIePbUD6WuuRNVhT3BlbkFJnAhR3aGZasIMkXMWphw' ;

async function getAns(){

    console.log("clicked finallled ");



    let queList = document.querySelectorAll(".exam-question-area h6");

    let activeNum = document.querySelector(".questions-pagination .active");
    activeNum = activeNum.innerText;

    queList = queList[activeNum-1];
    
    let midQue = queList.innerText ;

    let optionArea = document.querySelectorAll(".exam-answer-area");
    optionArea = optionArea[activeNum-1];
    optionArea = optionArea.innerText ;

    let optionsArray = optionArea.split("\n\n");


    

    // let spp = rrr.innerText;

    // let arrr = spp.split("\n\n");


    let que = `${midQue} and the options are (A) ${optionsArray[1]} and (B) ${optionsArray[2]} and (C) ${optionsArray[3]} and (D) ${optionsArray[4]} so select the answer from option`;

    console.log("QUE === > ",que);

   // que = que.textContent ; 

    const options = {

        method : 'POST',
        
        headers : {
            'Authorization': `Bearer ${API_KEY}` ,
            'Content-Type': 'application/json'
        },
        
        body : JSON.stringify({
            model : 'gpt-3.5-turbo',
            messages : [{role: "user", content: que}],
            max_tokens : 200 
        }) 
    }

    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions',options);
        const data = await response.json() ;
        // console.log(data);

        const ans = data.choices[0].message.content ;

        console.log("ans==",ans);
        

        

    }

    catch(error){
        console.log("errorr");
        console.log(error);
    }
}

submitBtns.forEach(element => {
    element.addEventListener("click",getAns);
});


