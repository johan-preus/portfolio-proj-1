const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const container = document.querySelector('#rowContainer')

let size;



const makeCard = (title, content, image) => {
        const cardTitle = title;
        const cardH5 = document.createElement('h5');
        cardH5.className = 'card-title';
        cardH5.innerHTML = cardTitle;

        const cardContent = content;
        const cardP = document.createElement('p');
        cardP.className = 'card-text';
        cardP.innerHTML = cardContent;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.appendChild(cardH5);
        cardBody.appendChild(cardP);




        const cardExcBtn = document.createElement('btn');
        cardExcBtn.className = 'btn btnCustomF mr-1';
        cardExcBtn.innerHTML = 'Excerpt';

        const cardFullBtn = document.createElement('a');
        cardFullBtn.className = 'btn btnCustomF';
        cardFullBtn.innerHTML = 'Full';

        const excDataToggle = document.createAttribute('data-toggle');
        excDataToggle.value = 'modal';
        cardExcBtn.setAttributeNode(excDataToggle);
        const excDataTarget = document.createAttribute('data-target');
        excDataTarget.value = '#excerptModal1';
        cardExcBtn.setAttributeNode(excDataTarget);

        const fullHref = document.createAttribute('href');
        fullHref.value = 'blogContent.html';
        cardFullBtn.setAttributeNode(fullHref);

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer bg-transparent';
        cardFooter.appendChild(cardExcBtn);
        cardFooter.appendChild(cardFullBtn);




        const cardImg = document.createElement('img');
        cardImg.className = 'img-fluid card-img-top cardDeckImg';
        const imgSrc = document.createAttribute('src');
        imgSrc.value = image;
        cardImg.setAttributeNode(imgSrc);
        const imgAlt = document.createAttribute('alt');
        imgAlt.value = 'Blog Picture';
        cardImg.setAttributeNode(imgAlt);




        const card = document.createElement('div')
        card.className = 'card bgColorF';
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        return card;
}



const makeDeck = (num) => {
        const deck = document.createElement('div');
        deck.className = 'card-deck mb-4';
        if(num){
                deck.id = `deck${num}`;
        }
        return deck;
}

const makeRow = (num) => {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row${num}`;
        return row;
}

const makeCol = (cols, size) => {
        const col = document.createElement('div');
        col.className = `col col-${size}-${cols} pl-0`;
        return col;
}





const lorem1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui nisi, voluptatem recusandae cumque omnis non ratione soluta velit praesentium.';
const lorem2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, reprehenderit necessitatibus tempora error dolor, illum explicabo amet voluptatem, ut vitae ipsa ullam veritatis officia. Alias dolore repudiandae a nisi, quam excepturi! Nemo exercitationem eos non, in rem ad maxime veritatis!';
const lorem3 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit temporibus consectetur, necessitatibus dolorem quas esse assumenda dicta est aut harum sequi pariatur quae id odit natus iusto. Eum omnis, harum consequuntur nesciunt deserunt vel repudiandae accusamus corrupti, eius eveniet impedit, ullam molestiae voluptatibus assumenda officia nostrum quo labore neque incidunt atque illo cum debitis. Modi dolore quam accusantium ab.';

// cards are declared so that they have value of undefined, else will throw error later if card does not exist
let card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12;

card1 = makeCard('Lorem Ipsum Title 1', lorem1, 'https://picsum.photos/650/1200');
card2 = makeCard('Lorem Ipsum Title 2', lorem3, 'https://picsum.photos/800/1000');
card3 = makeCard('Lorem Ipsum Title 3', lorem2, 'https://picsum.photos/900');
card4 = makeCard('Lorem Ipsum Title 4', lorem2, 'https://picsum.photos/1920/1080');
card5 = makeCard('Lorem Ipsum Title 5', lorem3, 'https://picsum.photos/850');
card6 = makeCard('Lorem Ipsum Title 6', lorem1, 'https://picsum.photos/1000');
card7 = makeCard('Lorem Ipsum Title 7', lorem3, 'https://picsum.photos/650/1200');
card8 = makeCard('Lorem Ipsum Title 8', lorem1, 'https://picsum.photos/800/1000');
card9 = makeCard('Lorem Ipsum Title 9', lorem3, 'https://picsum.photos/900');
card10 = makeCard('Lorem Ipsum Title 10', lorem1, 'https://picsum.photos/1920/1080');
card11 = makeCard('Lorem Ipsum Title 11', lorem1, 'https://picsum.photos/850');
// card12 = makeCard('Lorem Ipsum Title 12', lorem2, 'https://picsum.photos/1000');




const twoCardDeck = (cardA, cardB, rowNum) => {
        if((cardA) && (cardB)){
                const row = makeRow(rowNum);
                const deck = makeDeck(rowNum);
                row.appendChild(deck);
                container.appendChild(row);
                deck.appendChild(cardA);
                deck.appendChild(cardB);
        } else if((cardA)){
                const row = makeRow(rowNum);
                const deck = makeDeck(rowNum);
                const col = makeCol('6', 'sm');
                row.appendChild(col);
                col.appendChild(deck);
                container.appendChild(row);
                deck.appendChild(cardA);    
        }
}

const threeCardDeck = (cardA, cardB, cardC, rowNum) => {
        if((cardA) && (cardB) && (cardC)){
                const row = makeRow(rowNum);
                const deck = makeDeck(rowNum);
                row.appendChild(deck);
                container.appendChild(row);
                deck.appendChild(cardA);
                deck.appendChild(cardB);
                deck.appendChild(cardC);
        } else if((cardA) && (cardB)){
                const row = makeRow(rowNum);
                const deck = makeDeck(rowNum);
                const col = makeCol('8', 'lg');
                row.appendChild(col);
                col.appendChild(deck);
                container.appendChild(row);
                deck.appendChild(cardA);    
                deck.appendChild(cardB);    
        } else if(cardA){
                const row = makeRow(rowNum);
                const deck = makeDeck(rowNum);
                const col = makeCol('4', 'lg');
                row.appendChild(col);
                col.appendChild(deck);
                container.appendChild(row);
                deck.appendChild(cardA);  
        }
}

const mdFunc = () => {
        while(container.firstChild){
                container.removeChild(container.firstChild)
        }       
        twoCardDeck(card1, card2, '1');
        twoCardDeck(card3, card4, '2');
        twoCardDeck(card5, card6, '3');
        twoCardDeck(card7, card8, '4');
        twoCardDeck(card9, card10, '5');
        twoCardDeck(card11, card12, '6');
}


const lgFunc = () => {
        while(container.firstChild){
                container.removeChild(container.firstChild)
        }
        threeCardDeck(card1, card2, card3, '1');
        threeCardDeck(card4, card5, card6, '2');
        threeCardDeck(card7, card8, card9, '3');
        threeCardDeck(card10, card11, card12, '4');
}










if (vw >= 992){    
        size = 'lg';
        lgFunc();
} else {
        size = 'md';
        mdFunc();
}


$(function(){
        $(window).on(('resize'), () => {
                const width = $(this).width();
                if (width >= 992){
                        if (size === 'lg'){
                                return;
                        }
                        if (size === 'md'){
                                lgFunc();
                                size = 'lg';
                        }
                } else {
                        if (size === 'md'){
                                return;
                        }
                        if (size === 'lg'){
                                mdFunc();
                                size = 'md';
                        }
                }
        })
})