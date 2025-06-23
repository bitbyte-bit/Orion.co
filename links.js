
const terms=document.getElementById('terms');
terms.className='terms';

const termsHead=document.createElement('p');
termsHead.innerText='terms and conditions';
termsHead.className='terms-head';

const termsField=document.createElement('fieldset');
termsField.className='field-set';
const termsLine=document.createElement('legend');
termsLine.innerText='terms';
termsLine.className='legend';
termsField.appendChild(termsLine)

terms.appendChild(termsHead)


const conditions=document.createElement('fieldset');
conditions.className='field-set';
const termsLine2=document.createElement('legend');
termsLine2.className='legend';
termsLine2.innerText='description';
conditions.appendChild(termsLine2)

terms.appendChild(termsField)
terms.appendChild(conditions)

const termsList = [
    "You must be at least 18 years old.",
    "Do not share your password with others.",
    "Respect other users at all times.",
    "All sales are final and non-refundable."
];

termsList.forEach(text => {
    const line = document.createElement('p');
    line.innerText = text;
    line.className = 'terms-line';
    termsField.appendChild(line);
});



const home=document.createElement('i');
home.className='home-button';
home.innerText='home';

home.addEventListener('click',()=>{
    window.location.href='index.html';
})

terms.appendChild(home)