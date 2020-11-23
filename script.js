const shopNowButton = document.getElementById('shopNowButton')
const intro = document.getElementById('intro')
const main = document.getElementById('main')

const name = document.getElementsByClassName('name')


const firstPicture = document.getElementsByClassName('firstPicture')

const stock = document.getElementsByClassName('stock')





let products = [
    {
      title: "OZWEEGO SHOES",
      photos: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/f204ed5c024d42498e67ab9e012eb10f_9366/OZWEEGO_Shoes_White_FV9654_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9535beef288247efb9e4ab9e012ec028_9366/OZWEEGO_Shoes_White_FV9654_02_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/dad6b877e7fd4f1eb278ab9e012ec786_9366/OZWEEGO_Shoes_White_FV9654_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9ced8f95abe745cd95b6ab9f001dc207_9366/OZWEEGO_Shoes_White_FV9654_04_standard.jpg"
      ],
      stock: "2",
      price: "80",
      id: "1"
    },
    {
      title: "ZX 2K BOOST SHOES",
      photos: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a00e176273414e2d986babc90099fa3e_9366/ZX_2K_Boost_Shoes_White_FV9996_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/22ca1f055a294725880aabc9009a070a_9366/ZX_2K_Boost_Shoes_White_FV9996_02_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/4560338c129440d894d9abc9009a0e97_9366/ZX_2K_Boost_Shoes_White_FV9996_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd11b47048434931acd9abc9009a1542_9366/ZX_2K_Boost_Shoes_White_FV9996_04_standard.jpg"
      ],
      stock: "8",
      price: "150",
      id: "2"
    },
  
    {
      title: "X90004D SHOES",
      photos: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6641ce0097f4b9ca22cabdd00a1c66e_9366/X90004D_Shoes_Black_FW7093_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bca524f6e564ce19f7babdd00a1d334_9366/X90004D_Shoes_Black_FW7093_02_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/0075d5d3a0b8418c9756abdd00a1dad2_9366/X90004D_Shoes_Black_FW7093_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/efbfcf28ea55442e8130abdd00a1e173_9366/X90004D_Shoes_Black_FW7093_04_standard.jpg"
      ],
      stock: "5",
      price: "160",
      id: "3"
    },
  
    {
      title: "ULTRABOOST 20 SHOES",
      photos: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/c506dc4a84804ab1a907abad011ebdf0_9366/Ultraboost_20_Shoes_Black_FV8330_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d211447e73564a9d9d6babad011ec8fb_9366/Ultraboost_20_Shoes_Black_FV8330_02_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b01b768b58546cebcf1abad011ecf01_9366/Ultraboost_20_Shoes_Black_FV8330_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd2750a89cb74c73beb4abad011ed544_9366/Ultraboost_20_Shoes_Black_FV8330_04_standard.jpg"
      ],
      stock: "12",
      price: "180",
      id: "4"
    },
  
    {
      title: "OZWEEGO SHOES",
      photos: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8afb099dc9047789c63abed0072c6c1_9366/OZWEEGO_Shoes_Grey_FZ1963_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/be589225059b44868386abed0072d488_9366/OZWEEGO_Shoes_Grey_FZ1963_02_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/f897d99916184c928d19abed0072dbd1_9366/OZWEEGO_Shoes_Grey_FZ1963_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d197459d4fcb494380d0abed0072e33a_9366/OZWEEGO_Shoes_Grey_FZ1963_04_standard.jpg"
      ],
      stock: "25",
      price: "110",
      id: "5"
    },
  
    {
      title: "ZX 2K BOOST SHOES",
      photos: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/16216c130f5846ed8c9eabc600b3ea6f_9366/ZX_2K_Boost_Shoes_White_FX8835_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/34f64adbe930404f9203abc600b3f7f5_9366/ZX_2K_Boost_Shoes_White_FX8835_02_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/7f360335273e45cf9160abc600b3fefc_9366/ZX_2K_Boost_Shoes_White_FX8835_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a6105a11bb96483297c5abc600b40603_9366/ZX_2K_Boost_Shoes_White_FX8835_04_standard.jpg"
      ],
      stock: "5",
      price: "150",
      id: "6"
    }
]
  
  



let inStock=[]
colorContainers()
function colorContainers(){
    for(let i=0; i<6; i++){
        firstPicture[i].style.background =`url(${products[i].photos[0]})`
        firstPicture[i].style.backgroundSize =`cover`
        firstPicture[i].style.backgroundPosition =`center`
        name[i].innerHTML=`${products[i].title}`
        stock[i].innerHTML=`stock: ${products[i].stock}`
        inStock.push(products[i].stock);
    }
}


shopNowButton.addEventListener('click', startShopping)


function startShopping(){
    intro.style.display="none"
    main.style.display="block"
}

const container = document.getElementsByClassName('container')
const productPage = document.getElementById('productPage')
const displayedPrice = document.getElementById('displayedPrice')
const backButton = document.getElementsByClassName('backButton')
const title2 = document.getElementById('title2')


let selectedId

function openItsPage(){
    productPage.style.display="block"
    main.style.display="none"
    displayedPrice.innerHTML=`$${products[selectedId].price}`
    title2.innerHTML=`${products[selectedId].title}`
}


container[0].addEventListener('click', id_0)
container[1].addEventListener('click', id_1)
container[2].addEventListener('click', id_2)
container[3].addEventListener('click', id_3)
container[4].addEventListener('click', id_4)
container[5].addEventListener('click', id_5)
function id_0(){selectedId=0;openItsPage()}
function id_1(){selectedId=1;openItsPage()}
function id_2(){selectedId=2;openItsPage()}
function id_3(){selectedId=3;openItsPage()}
function id_4(){selectedId=4;openItsPage()}
function id_5(){selectedId=5;openItsPage()}


backButton[0].addEventListener('click', goBack)

function goBack(){
    productPage.style.display="none"
    main.style.display="block"
}



const addToCartButton = document.getElementById('addToCartButton')
addToCartButton.addEventListener('click', addTocart)

let cartWorth=0


function addTocart(){
    let triggers=[false, false, false, false, false, false]
    if(inStock[selectedId]!==0){
        cartWorth+=products[selectedId].price*1
        goToCartButton.innerHTML=`$${cartWorth} CART`
        inStock[selectedId]--
        addToCartButton.innerHTML="ADDED TO CART"
        setInterval(myTimer1, 1000);
        function myTimer1() {
            addToCartButton.innerHTML="ADD TO CART"
        }
        triggers[selectedId]=true
    }
    else{
        addToCartButton.innerHTML="OUT OF STOCK"
    }
    triggers.map(item => {
        if(item){

        }
    })

}


const cartScreen = document.getElementById('cartScreen')


goToCartButton.addEventListener('click', goToCart)
backButton[1].addEventListener('click', goBack2)

function goToCart(){
    cartScreen.style.display="block"
    productPage.style.display="none"
    main.style.display="none"
}


function goBack2(){
    cartScreen.style.display="none"
    productPage.style.display="none"
    main.style.display="block"
}