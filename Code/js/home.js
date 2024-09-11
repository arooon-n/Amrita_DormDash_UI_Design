function changeStore(store) {
    localStorage.setItem('selectedStore', store);
}

function additem(product){
    localStorage.setItem('selectedProduct', product);
}



document.addEventListener('DOMContentLoaded', () => {
    const storeTypeElement = document.getElementById('store_type');
    const selectedStore = localStorage.getItem('selectedStore');
    const titletab = document.getElementById('title');
    const canteenimg = document.getElementById('cant_img');

    if (storeTypeElement && selectedStore) {
        switch (selectedStore) {
            case 'main':
                storeTypeElement.textContent = 'MAIN CANTEEN';
                titletab.textContent = "Main Canteen | Amrita DormDash";
                canteenimg.src = "../../Assets/main_canteen.png";
                break;
            case 'it':
                storeTypeElement.textContent = 'IT CANTEEN';
                titletab.textContent = "IT Canteen | Amrita DormDash";
                canteenimg.src = "../../Assets/it_canteen.png";
                break;
            case 'mba':
                storeTypeElement.textContent = 'MBA CANTEEN';
                titletab.textContent = "MBA Canteen | Amrita DormDash";
                canteenimg.src = "../../Assets/mba_canteen.png";
                break;
            case 'groc':
                storeTypeElement.textContent = 'Grocery Store';
                titletab.textContent = "Groceries | Amrita DormDash";
                canteenimg.src = "../../Assets/groc_store.png";
                break;
            case 'prov':
                storeTypeElement.textContent = 'Provisional Store';
                titletab.textContent = "Provisionals | Amrita DormDash";
                canteenimg.src = "../../Assets/dept_store.png";
                break;
            default:
                storeTypeElement.textContent = 'Unknown Store';
        }
    }
});

window.addEventListener('scroll', function(){ 
    const homeImage = document.querySelector('.home');
    const header = document.querySelector('.header');
    const homeImageHeight = homeImage.offsetHeight;
    const headerHeight = header.offsetHeight;
    const changeLogoImg = document.querySelector('.header .logo img');
    const changeCartImg = document.querySelector('.cart_logout .cart img');
    const changeLogoutImg = document.querySelector('.cart_logout .profile_icon img');
    const searchbar = document.querySelector('.header .searchbar');
    const homeText = document.querySelector('.header h1');



    if (window.scrollY > homeImageHeight - headerHeight) {

        searchbar.classList.add('active');

        header.classList.add('active');
        changeLogoImg.src = "../../Assets/logo_red.png"; // Change to the new logo image source
        changeCartImg.src = "../../Assets/cart_icon.png"; // Change to the new logo image source
        changeLogoutImg.src = "../../Assets/logout_icon.png"; 
    } else {
        searchbar.classList.remove('active');
        header.classList.remove('active');
        changeLogoImg.src = "../../Assets/logo_light.png"; // Change back to the original logo image source
        changeCartImg.src = "../../Assets/cart_icon_light.png"; // Change to the new logo image source
        changeLogoutImg.src = "../../Assets/logout_icon_light.png"; // Change to the new logo image source
    }

    // if (window.scrollY > (homeImageHeight/2) - (homeImageHeight/10)) {
    //     homeText.classList.add('active');
    // }else{
    //     homeText.classList.remove('active');
    // }



});