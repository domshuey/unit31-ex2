// let deckID = null;
// let url = '';

//     axios.get('https://deckofcardsapi.com/api/deck/new/')
//     .then(res => {
//         console.log(res.data.deck_id)
//         deckID = res.data.deck_id
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
//     })
//     .then(res => {
//         $('#drawBtn').on('click', function(){
//             console.log(res.data)
//             let cardImg = document.querySelector('#cardImg')
//             cardImg.src = res.data.cards[0].image;
//             return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
//         })
//     })

// $('#drawBtn').on('click', function(e){
//     axios.get(url)
//         .then(res => {
//             console.log(res.data)
//             let cardImg = document.querySelector('#cardImg')
//             cardImg.src = res.data.cards[0].image;
//         })

//         // $('#drawBtn').on('click', function(e){
//         //     console.log('it works!');
//         });

// let url = 'https://deckofcardsapi.com/api/deck/';
// axios.get(`${url}/new/draw/`)
//     .then(res => {
//         card = res.data.cards[0];
//         console.log(`${card.value} OF ${card.suit}`);
//         let deckID = res.data.deck_id;
//         return axios.get(`${url}/${deckID}/draw`)
//     })
//     .then(res => {

//     })


// let deckID = null;

// axios.get(`${url}/new/`)
//     .then(res => {
//         console.log(res.data)
//         deckID = res.data.deck_id;
//     });

    // $('#drawBtn').on('click', function(){
    //     axios.get(`${url}/${deckID}/draw`)
    //     .then(res => {
    //         console.log(res.data)
    //         let cardImg = document.querySelector('#cardImg');
    //         cardImg.src = res.data.cards[0].image;
    //         if (res.data.remaining === 0) {
    //             let btn = document.querySelector('#drawBtn');
    //             btn.remove();
    //         }
    //     });
    // }); 



    async function newDeck(){
        let url = 'https://deckofcardsapi.com/api/deck';
        let newDeck = await axios.get(`${url}/new`);
        let deckID = newDeck.data.deck_id;
        let shuffle = await axios.get(`${url}/${deckID}/shuffle`);
        let deckInfo = document.querySelector('.hidden');
        deckInfo.innerText = deckID;
    }

    async function drawCard(){
        let url = 'https://deckofcardsapi.com/api/deck';

        let deckInfo = document.querySelector('.hidden');
        let deckID = deckInfo.innerText;

        let {data: draw} = await axios.get(`${url}/${deckID}/draw`);
        // console.log(draw.cards[0])

        let cardInfo = document.querySelector('.cardInfo')
        cardInfo.innerText = `You drew a ${draw.cards[0].value} of ${draw.cards[0].suit}`;

        let cardImg = document.querySelector('#cardImg');
        cardImg.src = draw.cards[0].image;
    }

    $('#loadBtn').on('click', function(){
        newDeck();
    });
    $('#drawBtn').on('click', function(){
        drawCard();
    });