// https://take.quiz-maker.com/QEU01JVSV#R262965-CBc8cD34
// above trail site

const submitBtn = document.querySelectorAll('.qp_btn');
const submitBtnNew = document.querySelectorAll("input");
// console.log(submitBtn);



const API_KEY = 'sk-GblLaZIePbUD6WuuRNVhT3BlbkFJnAhR3aGZasIMkXMWphw' ; // put yours bcz this will expire soon

async function getmsg(){

    console.log("clicked submit btn");

    // let que = document.querySelector(`.qp_qi`);
    // console.log(que.textContent);

    let page = document.querySelector('[sel="c"]');
    console.log(page.textContent); //tid="5"

    //trial

    let quenew = document.querySelector(`[tid="${page.textContent}"]`) ;
    
    que = quenew.textContent ;
    console.log("QUE",que);

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


// when clicked call the getmsg() funtion
// submitBtn.addEventListener("click",getmsg);


// submitBtn.forEach(element => {
//     element.addEventListener("click",getmsg);
// });

submitBtnNew.forEach(element => {
    element.addEventListener("click",getmsg);
});