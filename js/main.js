var question=document.querySelectorAll(".accordques");
 console.log(question);

 question.forEach(function(ques) {
   console.log(ques)
    ques.addEventListener("click",function(){
        if (ques.nextElementSibling.classList.contains("para"))
         {
            ques.nextElementSibling.classList.remove("para");
            ques.querySelector("i").style.transform="rotate(180deg)";
         
         }
         else{
            ques.nextElementSibling.classList.add("para");
            ques.querySelector("i").style.transform="rotate(0deg)";
         }

    })
 })