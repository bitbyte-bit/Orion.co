const application=document.getElementById('root');

const head=document.createElement('header');
head.className='header';

//head contents
const headItems=document.createElement('div');
headItems.className='heads';

const home=document.createElement('p');
home.className='home';
home.id='headLine';
home.innerText='home';
headItems.appendChild(home)

const logo=document.createElement('p');
logo.innerText='servics';
logo.className='logo';
logo.id='headLine';
headItems.appendChild(logo)

const deals=document.createElement('p');
deals.className='deals';
deals.innerText='hot deals';
deals.id='headLine';
headItems.appendChild(deals)

const hambug=document.createElement('p');
hambug.className='menu';
hambug.innerText='menu';
hambug.id='headLine';

//menu functions
hambug.addEventListener('click',()=>{
    const menuBar=document.createElement('div');
    menuBar.className='menu-bar';
    // Top bar with close icon and menu title
    const menuHeader = document.createElement('div');
    menuHeader.style.display = 'flex';
    menuHeader.style.alignItems = 'center';
    menuHeader.style.justifyContent = 'space-between';
    menuHeader.style.padding = '12px 16px';
    menuHeader.style.borderBottom = '1px solid #eee';
    menuHeader.className='menu-header';

    const menuTitle = document.createElement('span');
    menuTitle.innerText = 'orion';
    menuHeader.className='menu-title';

    const closeBarBtn = document.createElement('i');
    closeBarBtn.className = 'material-icons';
    closeBarBtn.innerText = 'close';
    closeBarBtn.style.cursor = 'pointer';
    closeBarBtn.style.fontSize = '28px';
    closeBarBtn.addEventListener('click', () => {
        menuBar.remove();
    });

    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(closeBarBtn);
    menuBar.appendChild(menuHeader);

    // Spacer for menu content (optional)
    const menuContent = document.createElement('div');
    menuContent.className = 'menu-content';

    // Menu items
    const menuItems = [
        { label: 'About', id: 'about' },
        { label: 'Register', id: 'register' },
        { label: 'Sell With Us', id: 'sell' },
        { label: 'Privacy Policy', id: 'privacy' },
        { label: 'Terms and Conditions', id: 'terms' },
        { label: 'My Profile', id: 'profile' },
        { label: 'Theme', id: 'theme' },
        { label:  'Help',id: 'help'},
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerText = item.label;
        menuItem.style.padding = '12px 16px';
        menuItem.style.cursor = 'pointer';
        menuContent.appendChild(menuItem);
   
    });
// About modal
const aboutModal = document.createElement('div');
aboutModal.className = 'about-modal';

// About modal header
const aboutHeader = document.createElement('div');

const aboutTitle = document.createElement('h3');
aboutTitle.innerText = 'About Us';


const aboutClose = document.createElement('i');
aboutClose.className = 'material-icons';
aboutClose.innerText = 'close';
aboutClose.style.cursor = 'pointer';
aboutClose.style.fontSize = '24px';
aboutClose.addEventListener('click', () => {
    aboutModal.style.display = 'none';
    document.body.style.overflow = '';
    // Remove overlay if present
    const overlay = document.getElementById('about-overlay');
    if (overlay) overlay.remove();
});

aboutHeader.appendChild(aboutTitle);
aboutHeader.appendChild(aboutClose);
aboutModal.appendChild(aboutHeader);

// About modal content
const aboutContent = document.createElement('div');
aboutContent.style.marginTop = '16px';
aboutContent.innerText = 'Orion is a one-stop platform for electronics, repairs, and digital services. We are committed to providing quality products, expert repairs, and excellent customer service.';

aboutModal.appendChild(aboutContent);

// Add modal to document but keep hidden
document.body.appendChild(aboutModal);

// Overlay for modal
function showAboutModal() {
    let overlay = document.createElement('div');
    overlay.id = 'about-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.3)';
    overlay.style.zIndex = '1000';
    overlay.addEventListener('click', () => {
        aboutModal.style.display = 'none';
        document.body.style.overflow = '';
        overlay.remove();
    });
    document.body.appendChild(overlay);
    aboutModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Add click event to About menu item
menuContent.querySelectorAll('.menu-item')[0].addEventListener('click', showAboutModal);



menuContent.querySelectorAll('.menu-item')[1].addEventListener('click', () => {
    // Overlay for modal
    let overlay = document.createElement('div');
    overlay.id = 'register-overlay';
    overlay.style.position = '';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(187, 176, 176, 0.62)';
    overlay.style.zIndex = '1000';
    overlay.addEventListener('click', () => {
        signupModal.style.display = 'none';
        document.body.style.overflow = '';
        overlay.remove();
    });
    document.body.appendChild(overlay);

    // Signup modal
    const signupModal = document.createElement('div');
    signupModal.className = 'signup-modal';
    

    // Modal header
    const signupHeader = document.createElement('div');
    signupHeader.className='signup-header';

    const signupTitle = document.createElement('h3');

    signupTitle.innerText = 'Sign Up';
    signupTitle.style.margin = '0';

    const signupClose = document.createElement('i');
    signupClose.className = 'material-icons';
    signupClose.innerText = 'close';
    signupClose.style.cursor = 'pointer';
    signupClose.style.fontSize = '24px';
    signupClose.addEventListener('click', () => {
        signupModal.style.display = 'none';
        document.body.style.overflow = '';
        overlay.remove();
    });

    signupHeader.appendChild(signupTitle);
    signupHeader.appendChild(signupClose);
    signupModal.appendChild(signupHeader);

    // Signup form
    const form = document.createElement('form');
    form.className='my-form';
    form.id='form';
    form.name='myForm';
    form.action='https://formspree.io/'

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id='name'
    nameInput.placeholder = 'Full Name';
    nameInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id='email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;

    const phoneNumber=document.createElement('input');
    phoneNumber.placeholder='+256-744-759-181';
    phoneNumber.type='number';
    phoneNumber.id='phone';
    phoneNumber.required=true;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.id='pass';
    passwordInput.maxLength='9';
    passwordInput.required = true;

    const radioCheck=document.createElement('input');
    radioCheck.type='checkbox';
    radioCheck.required=true;

    const label=document.createElement('p');
    label.className='label';
    label.innerHTML=`i accept the <a onclick=terms()>terms and conditions</a>`

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Register';
    submitBtn.className='registerBtn';

    const notificationBar=document.createElement('p');
    notificationBar.type='notice';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneNumber)
    form.appendChild(passwordInput)
    form.appendChild(label)
    form.appendChild(notificationBar)
    form.appendChild(submitBtn);

    

    signupModal.appendChild(form);

    document.body.appendChild(signupModal);
});

menuContent.querySelectorAll('.menu-item')[5].addEventListener('click',()=>{

    //profile modal
    const profile=document.createElement('div');
    profile.className='profile';

    //profil header
    const profileHeader=document.createElement('div');
    profileHeader.className='p-header';

    const profileTitle=document.createElement('p');
    profileTitle.type='text';
    profileTitle.className='p-title';
    profileTitle.innerText='my profile';

    const closeProfile=document.createElement('i');
    closeProfile.className='material-icons';
    closeProfile.innerText='close';
    closeProfile.id='close-p';
    closeProfile.addEventListener('click',()=>{
        profile.remove();
        document.body.style.overflow = '';
    });


    profileHeader.appendChild(profileTitle)
    profileHeader.appendChild(closeProfile)
    //details (users) card
    const userDetails=document.createElement('div');
    userDetails.className='user-details';

    const profileImageContainer = document.createElement('div');
    profileImageContainer.className = 'profile-image-container';
    profileImageContainer.style.position = 'relative';
    profileImageContainer.style.display = 'flex';
    profileImageContainer.style.justifyContent = 'center';
    profileImageContainer.style.alignItems = 'center';
    profileImageContainer.style.marginBottom = '16px';

    // Profile image element
    const profileImage = document.createElement('img');
    profileImage.className = 'profile-image';
    profileImage.src = 'default-profile.png'; // fallback image
    profileImage.alt = 'Profile';
    profileImage.style.width = '100px';
    profileImage.style.height = '100px';
    profileImage.style.borderRadius = '50%';
    profileImage.style.objectFit = 'cover';
    profileImage.style.border = '2px solid #ccc';

    // Hidden file input
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.style.display = 'none';

    // Material icon button
    const uploadBtn = document.createElement('i');
    uploadBtn.className = 'material-icons';
    uploadBtn.innerText = 'camera';
    uploadBtn.style.position = 'absolute';
    uploadBtn.style.bottom = '8px';
    uploadBtn.style.left = '50%';
    uploadBtn.style.transform = 'translateX(-50%)';
    uploadBtn.style.background = '#fff';
    uploadBtn.style.borderRadius = '50%';
    uploadBtn.style.padding = '8px';
    uploadBtn.style.cursor = 'pointer';
    uploadBtn.style.fontSize = '20px';
    uploadBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';

    // Click icon to trigger file input
    uploadBtn.addEventListener('click', () => {
        imageInput.click();
    });

    // When user selects an image, update profile image
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                profileImage.src = evt.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    profileImageContainer.appendChild(profileImage);
    profileImageContainer.appendChild(uploadBtn);
    profileImageContainer.appendChild(imageInput);
    userDetails.appendChild(profileImageContainer);
    

    const username=document.createElement('p');
    username.type='text';
    username.id='user';
    username.contentEditable=true;
    username.innerText=form.nameInput;
    username.className='profile-txt';
    
    const name=document.createElement('p');
    name.type='text';
    name.id='email';
    name.innerText=form.emailInput;
    name.className='profile-txt';

    const profileNumber=document.createElement('p');
    profileNumber.type='text';
    profileNumber.id='profileNum';
    profileNumber.innerText=form.phoneNumber;
    profileNumber.className='profile-txt';
    

    profile.appendChild(profileHeader)
    profile.appendChild(userDetails)
    userDetails.appendChild(username)
    userDetails.appendChild(name)
    userDetails.appendChild(profileNumber)

    document.body.appendChild(profile)

});

menuContent.querySelectorAll('.menu-item')[4].addEventListener('click',()=>{
    window.location.href='terms.html';
});

    menuBar.appendChild(menuContent);
    

    // Bottom social section
    const menuFooter = document.createElement('div');
    menuFooter.className='menu-footer';
    
 // Social section
    const socialSection = document.createElement('div');
    socialSection.className='social-section';

    const findUs = document.createElement('div');
    findUs.innerText = 'Find us';
    findUs.style.fontWeight = 'bold';
    findUs.style.marginBottom = '12px';
    menuFooter.appendChild(findUs);



    menuFooter.appendChild(socialSection);

    menuBar.appendChild(menuFooter);
    application.appendChild(menuBar)

     //about page modal
    


});

headItems.appendChild(hambug)
head.appendChild(headItems)
application.appendChild(head)

//display field for all works
const displayField=document.createElement('div');
displayField.className='display';
displayField.innerHTML='';

application.appendChild(displayField)

const homeModal = document.createElement('div');
homeModal.className = 'modal home-modal';
const items = [
    { name: 'itel button phone', price: 'UGX:42,300', img: 'dp.jpg' },
    { name: 'Oraimo Headphones', price: 'UGX:38,500', img: 'dp.jpg ' },
    { name: 'Fantom Charger', price: 'UGX:20,000', img: 'dp.jpg ' },
    { name: 'mosquito repelent', price: 'UGX:28,500', img: 'dp.jpg ' },
    { name: 'Syinix Smart TV 32inch', price: 'UGX:365,000', img: 'dp.jpg ' },
    { name: 'Saachi Electric Kettle', price: 'UGX:38,900', img: 'dp.jpg ' },
    { name: 'Dell CPU case', price: 'UGX:449,500', img: 'dp.jpg ' },
    { name: 'DPLight bulb rechargeable', price: 'UGX:14,500', img: 'dp.jpg ' },
    { name: 'Mouse', price: 'UGX:15,000', img: 'dp.jpg ' },
    { name: 'Keyboard', price: 'UGX:22,000', img: 'dp.jpg ' },
    { name: 'screw light bulb', price: 'UGX:5000', img: 'dp.jpg'},
    { name: 'powerking extension cable', price: 'UGX:25,500', img: 'dp.jpg'}
];

const cardsContainer = document.createElement('div');
cardsContainer.className='cards-container';

items.forEach(item => {
    const card = document.createElement('div');
    card.className='card';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.className='image';
    card.appendChild(img);

    const name = document.createElement('div');
    name.innerText = item.name;
    name.className='item-name';
    card.appendChild(name);

    const price = document.createElement('div');
    price.innerText = item.price;
    price.style.margin = '6px 0';
    price.style.color = '#388e3c';
    card.appendChild(price);

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '8px';

    const buyBtn = document.createElement('button');
    buyBtn.innerText = 'Buy';
    buyBtn.className='buyBtn';




    buyBtn.addEventListener('click', () => {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.3)';
        overlay.style.zIndex = '2000';

        // Create popup
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.className='buy-pop';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)'
;

        const msg = document.createElement('div');
        msg.innerText = `Are you sure you want to buy ${item.name} for ${item.price}?`;
        msg.style.marginBottom = '20px';

        const btnGroup = document.createElement('div');
        btnGroup.style.display = 'flex';
        btnGroup.style.justifyContent = 'center';
        btnGroup.style.gap = '16px';

        const yesBtn = document.createElement('button');
        yesBtn.innerText = 'Yes';
        yesBtn.style.background = '#388e3c';
        yesBtn.style.color = '#fff';
        yesBtn.style.border = 'none';
        yesBtn.style.padding = '8px 18px';
        yesBtn.style.borderRadius = '4px';
        yesBtn.style.cursor = 'pointer';

        const noBtn = document.createElement('button');
        noBtn.innerText = 'No';
        noBtn.style.background = '#eee';
        noBtn.style.color = '#333';
        noBtn.style.border = 'none';
        noBtn.style.padding = '8px 18px';
        noBtn.style.borderRadius = '4px';
        noBtn.style.cursor = 'pointer';

        yesBtn.addEventListener('click', () => {
            const whatsappNumber = '+256744759181';
            const message = `Hello, I want to buy:\n- ${item.name} (${item.price})\n\nPlease contact me for details.`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });

        noBtn.addEventListener('click', () => {
            overlay.remove();
        });

        btnGroup.appendChild(yesBtn);
        btnGroup.appendChild(noBtn);
        popup.appendChild(msg);
        popup.appendChild(btnGroup);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    });






    const addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'Add to Cart';
    addToCartBtn.className='cartBtn';
    btnGroup.appendChild(buyBtn);
    btnGroup.appendChild(addToCartBtn);

    card.appendChild(btnGroup);

    cardsContainer.appendChild(card);
});

let cart = [];

// Create cart icon (hidden initially)
const cartIcon = document.createElement('div');
cartIcon.className = 'cart-icon';

const cartMaterialIcon = document.createElement('i');
cartMaterialIcon.className = 'material-icons';
cartMaterialIcon.innerText = 'shopping_cart';
cartMaterialIcon.style.fontSize = '32px';
cartIcon.appendChild(cartMaterialIcon);

// Cart flag (badge)
const cartFlag = document.createElement('span');
cartFlag.className = 'cart-flag';
cartFlag.style.position = 'absolute';
cartFlag.style.top = '6px';
cartFlag.style.right = '6px';
cartFlag.style.background = '#e53935';
cartFlag.style.color = '#fff';
cartFlag.style.borderRadius = '50%';
cartFlag.style.fontSize = '13px';
cartFlag.style.width = '22px';
cartFlag.style.height = '22px';
cartFlag.style.display = 'flex';
cartFlag.style.alignItems = 'center';
cartFlag.style.justifyContent = 'center';
cartFlag.style.fontWeight = 'bold';
cartFlag.style.boxShadow = '0 1px 4px rgba(0,0,0,0.18)';
cartFlag.innerText = '0';
cartFlag.style.display = 'none';
cartIcon.appendChild(cartFlag);

document.body.appendChild(cartIcon);

// Cart popup
const cartPopup = document.createElement('div');
cartPopup.className = 'cart-popup';
cartPopup.style.position = 'fixed';
cartPopup.style.left = '0';
cartPopup.style.right = '0';
cartPopup.style.bottom = '-100%';
cartPopup.style.borderTopLeftRadius = '18px';
cartPopup.style.borderTopRightRadius = '18px';
cartPopup.style.zIndex = '4000';
cartPopup.style.transition = 'bottom 0.35s cubic-bezier(.4,0,.2,1)';
cartPopup.style.maxHeight = '70vh';
cartPopup.style.overflowY = 'auto';
cartPopup.style.padding = '0 0 18px 0';

// Cart popup header
const cartHeader = document.createElement('div');
cartHeader.style.display = 'flex';
cartHeader.className='cart-header';
cartHeader.style.alignItems = 'center';
cartHeader.style.justifyContent = 'space-between';
cartHeader.style.padding = '18px 22px 8px 22px';
cartHeader.style.borderBottom = '1px solid #eee';
const cartTitle = document.createElement('span');
cartTitle.innerText = 'Cart';
cartTitle.style.fontWeight = 'bold';
cartTitle.style.fontSize = '20px';

const cartClose = document.createElement('i');
cartClose.className = 'material-icons';
cartClose.innerText = 'close';
cartClose.style.cursor = 'pointer';
cartClose.style.fontSize = '28px';

cartHeader.appendChild(cartTitle);
cartHeader.appendChild(cartClose);
cartPopup.appendChild(cartHeader);

// Cart items container
const cartItemsContainer = document.createElement('div');
cartItemsContainer.className = 'cart-items-container';
cartItemsContainer.style.padding = '12px 22px 0 22px';
cartPopup.appendChild(cartItemsContainer);

document.body.appendChild(cartPopup);

// Show/hide cart popup
function showCartPopup() {
    cartPopup.style.bottom = '0';
    document.body.style.overflow = 'hidden';
}
function hideCartPopup() {
    cartPopup.style.bottom = '-100%';
    document.body.style.overflow = '';
}
cartClose.addEventListener('click', hideCartPopup);
cartIcon.addEventListener('click', showCartPopup);

// Update cart icon and popup
function updateCartUI() {
    if (cart.length > 0) {
        cartIcon.style.display = 'flex';
        cartFlag.style.display = 'flex';
        cartFlag.innerText = cart.length;
    } else {
        cartIcon.style.display = 'none';
        cartFlag.style.display = 'none';
        hideCartPopup();
    }

    // Clear cart items
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.innerText = 'Your cart is empty.';
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = '#888';
        emptyMsg.style.margin = '32px 0';
        cartItemsContainer.appendChild(emptyMsg);
        return;
    }
    cart.forEach((item, idx) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.style.display = 'flex';
        cartItem.style.alignItems = 'center';
        cartItem.style.marginBottom = '18px';
        cartItem.style.borderBottom = '1px solid #eee';
        cartItem.style.paddingBottom = '12px';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.style.width = '60px';
        img.style.height = '60px';
        img.style.borderRadius = '8px';
        img.style.objectFit = 'cover';
        img.style.marginRight = '16px';

        const details = document.createElement('div');
        details.style.flex = '1';

        const name = document.createElement('div');
        name.innerText = item.name;
        name.style.fontWeight = 'bold';
        name.style.fontSize = '16px';

        const price = document.createElement('div');
        price.innerText = item.price;
        price.style.color = '#388e3c';
        price.style.fontSize = '15px';
        price.style.marginTop = '4px';

        details.appendChild(name);
        details.appendChild(price);

        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.style.background = '#e53935';
        delBtn.style.color = '#fff';
        delBtn.style.border = 'none';
        delBtn.style.padding = '6px 14px';
        delBtn.style.borderRadius = '4px';
        delBtn.style.cursor = 'pointer';
        delBtn.style.marginLeft = '12px';

        delBtn.addEventListener('click', () => {
            cart.splice(idx, 1);
            updateCartUI();
        });

        cartItem.appendChild(img);
        cartItem.appendChild(details);
        cartItem.appendChild(delBtn);

        cartItemsContainer.appendChild(cartItem);
    });
}

// Add to Cart button logic
cardsContainer.querySelectorAll('.card').forEach((card, idx) => {
    const addToCartBtn = card.querySelector('.cartBtn');
    addToCartBtn.addEventListener('click', () => {
        cart.push(items[idx]);
        updateCartUI();
    });
});

function getCartTotal() {
    return cart.reduce((sum, item) => {
        let price = 0;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        } else if (typeof item.price === 'number') {
            price = item.price;
        }
        return sum + (isNaN(price) ? 0 : price);
    }, 0);
}

const cartFooter = document.createElement('div');
cartFooter.style.padding = '16px 22px 0 22px';
cartFooter.className='cart-footer';
cartFooter.style.borderTop = '1px solid #eee';

cartFooter.style.bottom = '0';
cartFooter.style.zIndex = '1';
cartFooter.style.display = 'flex';
cartFooter.style.justifyContent = 'space-between';
cartFooter.style.alignItems = 'center';

const totalLabel = document.createElement('span');
totalLabel.style.fontWeight = 'bold';
totalLabel.innerText = 'Total: $0';

const placeOrderBtn = document.createElement('button');
placeOrderBtn.innerText = 'Buy / Place Order';
placeOrderBtn.style.background = '#388e3c';
placeOrderBtn.style.color = '#fff';
placeOrderBtn.style.border = 'none';
placeOrderBtn.style.padding = '10px 22px';
placeOrderBtn.style.borderRadius = '6px';
placeOrderBtn.style.cursor = 'pointer';
placeOrderBtn.style.fontWeight = 'bold';

cartFooter.appendChild(totalLabel);
cartFooter.appendChild(placeOrderBtn);
cartPopup.appendChild(cartFooter);

function updateCartTotal() {
    const total = getCartTotal();
    totalLabel.innerText = `Total: UGX:${total.toFixed(1)}`;
}
updateCartUI = (function(origFn) {
    return function() {
        origFn();
        updateCartTotal();
    };
})(updateCartUI);

// Place order button logic
placeOrderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        notify.innerHTML = 'Your cart is empty.';
        return;
    }
    
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.3)';
    overlay.style.zIndex = '5000';

    const modal = document.createElement('div');
    modal.className='cart-msg';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '28px 36px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
    modal.style.zIndex = '5100';
    modal.style.textAlign = 'center';

    const msg = document.createElement('div');
    msg.innerText = `Place order for ${cart.length} item(s) totaling UGX:${getCartTotal().toFixed(1)}!`;
    msg.style.marginBottom = '18px';

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.justifyContent = 'center';
    btnGroup.style.gap = '16px';

    const yesBtn = document.createElement('button');
    yesBtn.innerText = 'Yes';
    yesBtn.style.background = '#388e3c';
    yesBtn.style.color = '#fff';
    yesBtn.style.border = 'none';
    yesBtn.style.padding = '8px 18px';
    yesBtn.style.borderRadius = '4px';
    yesBtn.style.cursor = 'pointer';

    const noBtn = document.createElement('button');
    noBtn.innerText = 'No';
    noBtn.style.background = '#eee';
    noBtn.style.color = '#333';
    noBtn.style.border = 'none';
    noBtn.style.padding = '8px 18px';
    noBtn.style.borderRadius = '4px';
    noBtn.style.cursor = 'pointer';

    yesBtn.addEventListener('click', () => {
       
        updateCartUI();
        const whatsappNumber = '+256744759181';
            const message = `Hello, I want to buy \n${cart.length} item(s) at (${getCartTotal().toFixed(1)})\n\nPlease contact me for details.`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');        
        hideCartPopup();
    });

    noBtn.addEventListener('click', () => {
        overlay.remove();
    });

    btnGroup.appendChild(yesBtn);
    btnGroup.appendChild(noBtn);
    modal.appendChild(msg);
    modal.appendChild(btnGroup);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
});

homeModal.appendChild(cardsContainer);

const servicesModal = document.createElement('div');
servicesModal.className = 'modal services-modal';
const servicesTitle = document.createElement('h2');
servicesTitle.innerText = '';
servicesModal.appendChild(servicesTitle);
const services = [
    { icon: 'build', name: 'Electronics Repair',id: 'repair' },
    { icon: 'flash_on', name: 'Phone Flashing',id: 'phoneFlashing' },
    { icon: 'settings', name: 'Phone Settings',id: 'phoneSettings' },
    { icon: 'print', name: 'Printing' ,id: 'printing'},
    { icon: 'photo_camera', name: 'Photography',id: 'photography' },
    { icon: 'movie', name: 'Movie',id: 'movie' }
];
const servicesGrid = document.createElement('div');
servicesGrid.className='services-grid';
services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';

    const icon = document.createElement('i');
    icon.className = 'material-icons';
    icon.innerText = service.icon;
    icon.style.fontSize = '36px';
    card.appendChild(icon);

    const label = document.createElement('span');
    label.innerText = service.name;
    label.style.marginTop = '8px';
    label.style.fontSize = '14px';
    card.appendChild(label);

    servicesGrid.appendChild(card);
});
servicesModal.appendChild(servicesGrid);

const dealsModal = document.createElement('div');
dealsModal.className = 'modal-deals-modal';
const dealsTitle = document.createElement('h2');
dealsTitle.innerText = '';
dealsModal.appendChild(dealsTitle);
const dealsList = document.createElement('div');
dealsList.className='deal-card';
const hotDeals = [
    {name:'sound bar',price:'UGX:50000',img:'dp.jpg'},
    {name:'laptop',price:'UGX:350000',img:'dp.jpg'},
];
hotDeals.forEach(deal => {
    const li = document.createElement('p');
    li.className='deal';

     const image=document.createElement('img');
    image.className='image';
    image.src=deal.img;
    li.appendChild(image)

    const dealName=document.createElement('p');
    dealName.className='deal-name';
    dealName.innerText=deal.name;
    li.appendChild(dealName)

    const dealPrice=document.createElement('p');
    dealPrice.className='deal-price';
    dealPrice.innerText=deal.price;
    li.appendChild(dealPrice)

    const takeDeal=document.createElement('button');
    takeDeal.className='take-deal';
    takeDeal.innerText='take deal';
    li.appendChild(takeDeal)

    takeDeal.addEventListener('click',()=>{
    const negotiator = document.createElement('div');
    negotiator.className = 'negotiator-popup';
    negotiator.style.position = 'fixed';
    negotiator.style.top = '50%';
    negotiator.style.left = '50%';
    negotiator.style.transform = 'translate(-50%, -50%)';
    negotiator.style.background = '#ece5dd';
    negotiator.style.borderRadius = '12px';
    negotiator.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
    negotiator.style.width = '340px';
    negotiator.style.maxWidth = '95vw';
    negotiator.style.zIndex = '6000';
    negotiator.style.display = 'flex';
    negotiator.style.flexDirection = 'column';
    negotiator.style.overflow = 'hidden';

    // Header
    const header = document.createElement('div');
    header.style.background = '#075e54';
    header.style.color = '#fff';
    header.style.padding = '14px 16px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';

    const title = document.createElement('span');
    title.innerText = 'Negotiate Deal';
    title.style.fontWeight = 'bold';

    const closeBtn = document.createElement('i');
    closeBtn.className = 'material-icons';
    closeBtn.innerText = 'close';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '24px';
    closeBtn.addEventListener('click', () => {
        negotiator.remove();
        overlay.remove();
    });

    header.appendChild(title);
    header.appendChild(closeBtn);
    negotiator.appendChild(header);

    // Chat area
    const chatArea = document.createElement('div');
    chatArea.style.flex = '1';
    chatArea.style.padding = '16px';
    chatArea.style.background = '#ece5dd';
    chatArea.style.overflowY = 'auto';
    chatArea.style.display = 'flex';
    chatArea.style.flexDirection = 'column';
    chatArea.style.gap = '10px';

    // Initial seller message
    const sellerMsg = document.createElement('div');
    sellerMsg.style.alignSelf = 'flex-start';
    sellerMsg.style.background = '#fff';
    sellerMsg.style.borderRadius = '8px 8px 8px 0';
    sellerMsg.style.padding = '8px 14px';
    sellerMsg.style.maxWidth = '80%';
    sellerMsg.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)';
    sellerMsg.innerText = `Hi! Let's negotiate for "${deal.name}" (${deal.price}). What price do you have in mind?`;
    chatArea.appendChild(sellerMsg);

    negotiator.appendChild(chatArea);

    // Input area
    const inputArea = document.createElement('div');
    inputArea.style.display = 'flex';
    inputArea.style.alignItems = 'center';
    inputArea.style.padding = '10px 12px';
    inputArea.style.background = '#f7f7f7';
    inputArea.style.borderTop = '1px solid #ddd';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your offer...';
    input.style.flex = '1';
    input.style.padding = '8px 12px';
    input.style.border = 'none';
    input.style.borderRadius = '20px';
    input.style.outline = 'none';
    input.style.background = '#fff';

    const sendBtn = document.createElement('button');
    sendBtn.innerHTML = '<i class="material-icons">send</i>';
    sendBtn.style.background = '#25d366';
    sendBtn.style.border = 'none';
    sendBtn.style.color = '#fff';
    sendBtn.style.borderRadius = '50%';
    sendBtn.style.width = '38px';
    sendBtn.style.height = '38px';
    sendBtn.style.marginLeft = '8px';
    sendBtn.style.cursor = 'pointer';
    sendBtn.style.display = 'flex';
    sendBtn.style.alignItems = 'center';
    sendBtn.style.justifyContent = 'center';
    sendBtn.style.fontSize = '22px';

    inputArea.appendChild(input);
    inputArea.appendChild(sendBtn);
    negotiator.appendChild(inputArea);

    // Overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.25)';
    overlay.style.zIndex = '5999';
    overlay.addEventListener('click', () => {
        negotiator.remove();
        overlay.remove();
    });
    document.body.appendChild(overlay);

    // Prevent overlay click from closing when clicking inside popup
    negotiator.addEventListener('click', e => e.stopPropagation());

    // Send message logic
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        // User message
        const userMsg = document.createElement('div');
        userMsg.style.alignSelf = 'flex-end';
        userMsg.style.background = '#dcf8c6';
        userMsg.style.borderRadius = '8px 8px 0 8px';
        userMsg.style.padding = '8px 14px';
        userMsg.style.maxWidth = '80%';
        userMsg.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)';
        userMsg.innerText = text;
        chatArea.appendChild(userMsg);
        chatArea.scrollTop = chatArea.scrollHeight;
        input.value = '';

        // Simulate seller reply
        setTimeout(() => {
            const reply = document.createElement('div');
            reply.style.alignSelf = 'flex-start';
            reply.style.background = '#fff';
            reply.style.borderRadius = '8px 8px 8px 0';
            reply.style.padding = '8px 14px';
            reply.style.maxWidth = '80%';
            reply.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)';
            if (/(\d+)/.test(text)) {
                reply.innerText = `Thanks for your offer of UGX:${text.match(/(\d+)/)[0]}. We'll get back to you soon via WhatsApp!`;
            } else {
                reply.innerText = "Thank you for your message. Please state your offer in UGX.";
            }
            chatArea.appendChild(reply);
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 900);
    }


        document.body.appendChild(negotiator)
    });

    dealsList.appendChild(li);
});
dealsModal.appendChild(dealsList);

function underlineHeadline(selected) {
    [home, logo, deals].forEach(el => {
        el.style.textDecoration = '';
        el.style.fontWeight = '';
    });
    selected.style.textDecoration = 'underline';
    selected.style.fontWeight = 'bold';
}

function showModal(modal) {
    displayField.innerHTML = '';
    displayField.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', () => {
    showModal(homeModal);
    underlineHeadline(home);
});

home.addEventListener('click', () => {
    showModal(homeModal);
    underlineHeadline(home);
});

logo.addEventListener('click', () => {
    showModal(servicesModal);
    underlineHeadline(logo);
});

deals.addEventListener('click', () => {
    showModal(dealsModal);
    underlineHeadline(deals);
});
//bottom nav as a notification area
const notify=document.createElement('div');
notify.className='notify';
notify.innerHTML='no notification';

application.appendChild(notify)