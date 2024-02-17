const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound");
const btn = document.getElementById("search-button");

btn.addEventListener("click",()=> 
{
    let inpWord=document.getElementById("inp-word").value;
    console.log(inpWord);
    fetch(`${url}${inpWord}`).then(dataresponse=>dataresponse.json()).then((text)=>{
        console.log(text);
        result.innerHTML=`<div class="word">
        <h3>${inpWord}</h3>
        <button onclick ="playSound()">
            <i class="fas fa-volume-up"></i>
        </button>
    </div>
    <div class="details">
        <p>${text[0].meanings[0].partOfSpeech}</p>
        <p>/${text[0].phonetic}/</p>
    </div>
    <p class="word-meaning">${text[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example"> ${text[0].meanings[0].definitions[0].example||""}</p>`;
    sound.setAttribute("src",`${text[0].phonetics[0].audio}`);
   });
});
function playSound()
{
    sound.play();
}