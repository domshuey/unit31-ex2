// for(let i=0; i<3; i++){
//     let url = 'http://numbersapi.com/${i}';

// }


// axios.get('http://numbersapi.com/21?json')
//     .then(res => {
//         console.log(res.data.text)
//         let newLI = document.createElement('LI');
//         newLI.innerText = res.data.text;
//         $('ul').append(newLI)
//         let randNum = (Math.ceil(Math.random() *100));
//         return axios.get(`http://numbersapi.com/${randNum}?json`)})
//     .then(res => {
//         console.log(res.data.text)
//         let newLI = document.createElement('LI');
//         newLI.innerText = res.data.text;
//         $('ul').append(newLI)
//         let randNum = (Math.ceil(Math.random() *100));
//         return axios.get(`http://numbersapi.com/${randNum}?json`)})
//     .then(res => {
//         console.log(res.data.text)
//         let newLI = document.createElement('LI');
//         newLI.innerText = res.data.text;
//         $('ul').append(newLI)
//         let randNum = (Math.ceil(Math.random() *100));
//         return axios.get(`http://numbersapi.com/${randNum}?json`)})
//     .then(res => {
//         console.log(res.data.text)
//         let newLI = document.createElement('LI');
//         newLI.innerText = res.data.text;
//         $('ul').append(newLI)
//         let randNum = (Math.ceil(Math.random() *100));
//         return axios.get(`http://numbersapi.com/${randNum}?json`)})
//     .catch(err => console.log(err))


// ******************* async/await *************************

async function favNumber(){
    let url = 'http://numbersapi.com'
    let {data: fav} = await axios.get(`${url}/21?json`);
    console.log(fav.text)
    let ul = document.querySelector('UL');
    let newLi = document.createElement('LI');
    newLi.innerText = fav.text;
    ul.append(newLi);
}

async function favNumbers(){
    let url = 'http://numbersapi.com';
    let fact1 = await axios.get(`${url}/21`);
    let fact2 = await axios.get(`${url}/21`);
    let fact3 = await axios.get(`${url}/21`);
    let fact4 = await axios.get(`${url}/21`);

    let facts = [fact1, fact2, fact3, fact4];
    let ul = document.querySelector('ul')

    for(let fact of facts){
        let newLi = document.createElement('LI');
        newLi.innerText = fact.data;
        ul.append(newLi);
        console.log(fact.data)
    }

}

async function newDeck(){
    let url = 'https://deckofcardsapi.com/api/deck/new/';
    
}