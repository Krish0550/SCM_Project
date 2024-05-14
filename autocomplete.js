let availablekeywords = [
    'HTML',
    'CSS',
    'Javascript',
    'Where to learn coding online',
    'How to create a website',
    'Where to learn web design',
    'Web design tutorials',
    'Easy tutorials',
    ];

    const resultbox = document.querySelector(".result-box");
    const inputbox = document.getElementById("input-box");
    inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultbox.innerHTML='';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultbox.innerHTML = "<ul>" + content.join('') +"</ul>";
}
function selectInput(list){
    inputbox.value = list.innerHTML
    resultbox.innerHTML = '';
}
