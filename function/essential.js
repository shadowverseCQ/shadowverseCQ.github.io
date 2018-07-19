const axios = require('../node_modules/axios');
const getData = () => {
    let Paramcount = Math.floor((Math.random() * 8) + 0);
    axios({
        method: 'get',
        url: 'https://shadowverse-portal.com/api/v1/cards',
        params: {
            'format': 'json',
            'lang': 'ko',
            'clan': Paramcount
        }
    }).then((res) => {
        console.log(res);
        //console.log(res.data.data.cards.length)
        let count = Math.floor((Math.random() * res.data.data.cards.length) + 1);
        //console.log(count);
        //console.log(res.data.data.cards[count])
        let correctCard = res.data.data.cards[count].card_name;
        console.log(res.data.data.cards[count].card_name);
        let cardText = res.data.data.cards[count].skill_disc;
        let cardCost = res.data.data.cards[count].cost;
        let cardATKLIFE = res.data.data.cards[count].atk + '/' + res.data.data.cards[count].life;
        if(cardATKLIFE == '0/0'){
            cardATKLIFE = '주문/마법진'
        }
    });
}