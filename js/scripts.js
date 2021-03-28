const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const row1 = document.querySelector('#row1');
const row2 = document.querySelector('#row2');
const row3 = document.querySelector('#row3');
const row4 = document.querySelector('#row4');
const row5 = document.querySelector('#row5');
const row6 = document.querySelector('#row6');

const container = document.querySelector('#rowContainer')

let fiveAndSix;
let size;






// const card1Title = 'Lorem Ipsum';
// const card1H5 = document.createElement('h5');
// card1H5.className = 'card-title';
// card1H5.innerHTML = card1Title;

// const card1Content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui nisi, voluptatem recusandae cumque omnis non ratione soluta velit praesentium.';
// const card1P = document.createElement('p');
// card1P.className = 'card-text';
// card1P.innerHTML = card1Content;

// const card1Body = document.createElement('div');
// card1Body.className = 'card-body';
// card1Body.appendChild(card1H5);
// card1Body.appendChild(card1P);



// const card1ExcBtn = document.createElement('btn');
// card1ExcBtn.className = 'btn btnCustom';
// card1ExcBtn.innerHTML = 'Excerpt';

// const card1FullBtn = document.createElement('a');
// card1FullBtn.className = 'btn btnCustom';
// card1FullBtn.innerHTML = 'Full';

// const excDataToggle = document.createAttribute('data-toggle');
// excDataToggle.value = 'modal';
// card1ExcBtn.setAttributeNode(excDataToggle);
// const excDataTarget = document.createAttribute('data-target');
// excDataTarget.value = '#excerptModal1';
// card1ExcBtn.setAttributeNode(excDataTarget);

// const fullHref = document.createAttribute('href');
// fullHref.value = 'blogContent.html';
// card1FullBtn.setAttributeNode(fullHref);


// const card1Footer = document.createElement('div');
// card1Footer.className = 'card-footer bg-transparent';
// card1Footer.appendChild(card1ExcBtn);
// card1Footer.appendChild(card1FullBtn);



// const card1Img = document.createElement('img');
// card1Img.className = 'img-fluid card-img-top cardDeckImg';
// const imgSrc = document.createAttribute('src');
// imgSrc.value = 'https://picsum.photos/650/1200';
// card1Img.setAttributeNode(imgSrc);
// const imgAlt = document.createAttribute('alt');
// imgAlt.value = 'Blog Picture';
// card1Img.setAttributeNode(imgAlt);



// const card1 = document.createElement('div')
// card1.className = 'card bgGradient';
// card1.appendChild(card1Img);
// card1.appendChild(card1Body);
// card1.appendChild(card1Footer);



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
        cardExcBtn.className = 'btn btnCustom mr-1';
        cardExcBtn.innerHTML = 'Excerpt';

        const cardFullBtn = document.createElement('a');
        cardFullBtn.className = 'btn btnCustom';
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
        card.className = 'card bgGradient';
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        return card;
}



const makeDeck = (num) => {
        const deck = document.createElement('div');
        deck.className = 'card-deck mb-4 text-light';
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



const lorem1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui nisi, voluptatem recusandae cumque omnis non ratione soluta velit praesentium.';
const lorem2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, reprehenderit necessitatibus tempora error dolor, illum explicabo amet voluptatem, ut vitae ipsa ullam veritatis officia. Alias dolore repudiandae a nisi, quam excepturi! Nemo exercitationem eos non, in rem ad maxime veritatis!';
const lorem3 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit temporibus consectetur, necessitatibus dolorem quas esse assumenda dicta est aut harum sequi pariatur quae id odit natus iusto. Eum omnis, harum consequuntur nesciunt deserunt vel repudiandae accusamus corrupti, eius eveniet impedit, ullam molestiae voluptatibus assumenda officia nostrum quo labore neque incidunt atque illo cum debitis. Modi dolore quam accusantium ab.';

const card1 = makeCard('Lorem Ipsum Title 1', lorem1, 'https://picsum.photos/650/1200');
const card2 = makeCard('Lorem Ipsum Title 2', lorem3, 'https://picsum.photos/800/1000');
const card3 = makeCard('Lorem Ipsum Title 3', lorem2, 'https://picsum.photos/900');
const card4 = makeCard('Lorem Ipsum Title 4', lorem2, 'https://picsum.photos/1920/1080');
const card5 = makeCard('Lorem Ipsum Title 5', lorem3, 'https://picsum.photos/850');
const card6 = makeCard('Lorem Ipsum Title 6', lorem1, 'https://picsum.photos/1000');
const card7 = makeCard('Lorem Ipsum Title 7', lorem3, 'https://picsum.photos/650/1200');
const card8 = makeCard('Lorem Ipsum Title 8', lorem1, 'https://picsum.photos/800/1000');
const card9 = makeCard('Lorem Ipsum Title 9', lorem3, 'https://picsum.photos/900');
const card10 = makeCard('Lorem Ipsum Title 10', lorem1, 'https://picsum.photos/1920/1080');
const card11 = makeCard('Lorem Ipsum Title 11', lorem1, 'https://picsum.photos/850');
const card12 = makeCard('Lorem Ipsum Title 12', lorem2, 'https://picsum.photos/1000');



const deck1 = makeDeck();
const deck2 = makeDeck();
const deck3 = makeDeck();
const deck4 = makeDeck();
row1.appendChild(deck1);
row2.appendChild(deck2);
row3.appendChild(deck3);
row4.appendChild(deck4);


const mdFunc = () => {
        if (!fiveAndSix){
                deck1.appendChild(card1);
                deck1.appendChild(card2);
        
                deck2.appendChild(card3);
                deck2.appendChild(card4);
        
                deck3.appendChild(card5);
                deck3.appendChild(card6);
        
                deck4.appendChild(card7);
                deck4.appendChild(card8);
        
                const row5 = makeRow('5');
                const deck5 = makeDeck('5');
                row5.appendChild(deck5);
                container.appendChild(row5);
                deck5.appendChild(card9);
                deck5.appendChild(card10);
        
                const row6 = makeRow('6');
                const deck6 = makeDeck('6');
                row6.appendChild(deck6);
                container.appendChild(row6);
                deck6.appendChild(card11);
                deck6.appendChild(card12);

                fiveAndSix = true;
        } else {
                deck1.appendChild(card1);
                deck1.appendChild(card2);
        
                deck2.appendChild(card3);
                deck2.appendChild(card4);
        
                deck3.appendChild(card5);
                deck3.appendChild(card6);
        
                deck4.appendChild(card7);
                deck4.appendChild(card8);

                const deck5 = document.querySelector('#deck5');
                deck5.appendChild(card9);
                deck5.appendChild(card10);

                const deck6 = document.querySelector('#deck6');
                deck6.appendChild(card11);
                deck6.appendChild(card12);
        }
}


const lgFunc = () => {
        deck1.appendChild(card1);
        deck1.appendChild(card2);
        deck1.appendChild(card3);
        
        deck2.appendChild(card4);
        deck2.appendChild(card5);
        deck2.appendChild(card6);
        
        deck3.appendChild(card7);
        deck3.appendChild(card8);
        deck3.appendChild(card9);
        
        deck4.appendChild(card10);
        deck4.appendChild(card11);
        deck4.appendChild(card12);
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
                                console.log('still lg')
                                return;
                        }
                        if (size === 'md'){
                                console.log('resize md to lg')
                                lgFunc();
                                size = 'lg';
                        }
                } else {
                        if (size === 'md'){
                                console.log('still md')
                                return;
                        }
                        if (size === 'lg'){
                                console.log('resize lg to md')
                                mdFunc();
                                size = 'md';
                        }
                }
        })
})