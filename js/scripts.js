const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const row1 = document.querySelector('#row1');
const row2 = document.querySelector('#row2');
const row3 = document.querySelector('#row3');
const row4 = document.querySelector('#row4');
const row5 = document.querySelector('#row5');
const row6 = document.querySelector('#row6');

const appendDiv = el => {
    const div = document.createElement('div');
    el.appendChild(div);
}





const card1Title = 'Lorem Ipsum';
const card1H5 = document.createElement('h5');
card1H5.className = 'card-title';
card1H5.innerHTML = card1Title;

const card1Content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui nisi, voluptatem recusandae cumque omnis non ratione soluta velit praesentium.';
const card1P = document.createElement('p');
card1P.className = 'card-text';
card1P.innerHTML = card1Content;

const card1Body = document.createElement('div');
card1Body.className = 'card-body';
card1Body.appendChild(card1H5);
card1Body.appendChild(card1P);



const card1ExcBtn = document.createElement('btn');
card1ExcBtn.className = 'btn btnCustom';
card1ExcBtn.innerHTML = 'Excerpt';

const card1FullBtn = document.createElement('a');
card1FullBtn.className = 'btn btnCustom';
card1FullBtn.innerHTML = 'Full';

const excDataToggle = document.createAttribute('data-toggle');
excDataToggle.value = 'modal';
card1ExcBtn.setAttributeNode(excDataToggle);
const excDataTarget = document.createAttribute('data-target');
excDataTarget.value = '#excerptModal1';
card1ExcBtn.setAttributeNode(excDataTarget);

const fullHref = document.createAttribute('href');
fullHref.value = 'blogContent.html';
card1FullBtn.setAttributeNode(fullHref);


const card1Footer = document.createElement('div');
card1Footer.className = 'card-footer bg-transparent';
card1Footer.appendChild(card1ExcBtn);
card1Footer.appendChild(card1FullBtn);



const card1Img = document.createElement('img');
card1Img.className = 'img-fluid card-img-top cardDeckImg';
const imgSrc = document.createAttribute('src');
imgSrc.value = 'https://picsum.photos/650/1200';
card1Img.setAttributeNode(imgSrc);
const imgAlt = document.createAttribute('alt');
imgAlt.value = 'Blog Picture';
card1Img.setAttributeNode(imgAlt);



const card1 = document.createElement('div')
card1.className = 'card bgGradient';
card1.appendChild(card1Img);
card1.appendChild(card1Body);
card1.appendChild(card1Footer);

if (vw >= 992){
        row1.appendChild(card1);
        row1.appendChild(card2);
        row1.appendChild(card3);

        row2.appendChild(card4);
        row2.appendChild(card5);
        row2.appendChild(card6);

        row3.appendChild(card7);
        row3.appendChild(card8);
        row3.appendChild(card9);

        row4.appendChild(card10);
        row4.appendChild(card11);
        row4.appendChild(card12);
} else {
        row1.appendChild(card1);
        row1.appendChild(card2);

        row2.appendChild(card3);
        row2.appendChild(card4);

        row3.appendChild(card5);
        row3.appendChild(card6);

        row4.appendChild(card7);
        row4.appendChild(card8);

        row5.appendChild(card9);
        row5.appendChild(card10);

        row6.appendChild(card11);
        row6.appendChild(card12);
}