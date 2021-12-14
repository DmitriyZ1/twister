
function rendomint(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function twist() {
    document.querySelector('.bl').classList.add('show');
    document.querySelector('.coleso').classList.remove('show');


    let sec = rendomint(2000, 5000);
    console.log(sec)
    setTimeout(() => {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const parts = ['левая нога', 'правая нога', 'левая рука', 'правая рука']; 
    
        const result = {};
        
        let c1 = Math.floor(Math.random() * (4 - 0) + 0);
        let c2 = Math.floor(Math.random() * (4 - 0) + 0);
        result.color = colors[c1];
        result.part = parts[c2];

        document.querySelector('.bl').style.background = result.color;
        document.querySelector('.text').textContent = result.part;
        document.querySelector('.bl').classList.remove('show');
        document.querySelector('.coleso').classList.add('show');
    }, sec);

}

document.querySelector('.bl').addEventListener('click', () => {
    twist()
})