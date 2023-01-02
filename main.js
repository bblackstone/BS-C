const courses = [
    {
        image: 'https://kriptomat.io/wp-content/uploads/2022/01/what-is-the-future-of-the-blockchain-revolution.png',
        title: 'Blockchain',
        price: 80.4,
    },
    {
        image: 'https://moralis.io/wp-content/uploads/2021/07/Moralis-Blogpost-JavaScript-Explained-07272021-V12.png',
        title: 'JavaScript',
        price: 16,
    },
    {
        image: 'https://www.analyticsinsight.net/wp-content/uploads/2022/03/Python-Remains-at-the-Top-Despite-the-Intro-of-New-Coding-Langs.jpg',
        title: 'Python',
        price:  17,
    },
    {
        image: 'https://i.ytimg.com/vi/McojvctVsUs/maxresdefault.jpg',
        title: 'C++',
        price:  9.3,
    },
    {
        image: 'https://vtiacademy.edu.vn/upload/images/django-trong-python-2.jpg',
        title: 'Django',
        price:  18.2,
    },
    {
        image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Assembly-Language.jpg',
        title: 'Assembly',
        price:  17.2,
    },
    {
        image: 'https://w7.pngwing.com/pngs/862/476/png-transparent-international-political-economy-economics-society-political-economy-text-logo-research.png',
        title: 'Economics and society',
        price:  100,
    },
    {
        image: './courses_dropdown/george.png',
        title: 'Authentic Leadership',
        price:  98,
    },
    {
        image: './courses_dropdown/bill.png',
        title: 'Inclusive Leadership',
        price:  198,
    },
    {
        image: 'https://qph.cf2.quoracdn.net/main-qimg-0048581db14ba992e5f247267ced211b-lq',
        title: 'Restaurant Recipes at Home',
        price:  201,
    },
    {
        image: 'https://www.lucypetproducts.com/wp-content/uploads/2021/04/Brandon_McMillan.jpg',
        title: 'Dog Training',
        price:  128,
    },
    {
        image: 'https://learnopoly.com/wp-content/uploads/2021/03/Niki-Nakayama8.jpg',
        title: 'Modern Japanese Cooking',
        price:  308,
    },
];

const categories = [...new Set(courses.map( (item)=> 
    {return item}))]
    let i = 0;

document.getElementById('root').innerHTML = categories.map((item)=> 
{
    var {image, title, price} = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                 <img class='images' src = ${image}></img>
        
            </div>
            <div class='bottom'>     
            <p>${title}</p>
            <h2>${price}$</h2>` +
            "<button onclick = 'addToCart("+(i++)+")'> Add to cart</button>"+
            `</div>
            </div>`
    )
}).join('')


var cart =[];

function addToCart(element){
    cart.push({...categories[element]});
    displayCart();
}


function delElement(element){
    cart.splice(element, 1);
    displayCart();
}


function displayCart() {
    let j = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length == 0) {
        document.getElementById('cartItem').innerHTML = " Your cart is empty";
        document.getElementById("total").innerHTML = 0+".00$";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(`
            <div class = 'cart-item'>
                <div class = 'row-img'>
                   <img class = 'rowing' src = ${image}>
                </div>
                 <p style = 'font-size: 12px;'> ${title}</p>
                  <h2 style = 'font-size: 15px;'> ${price}.00$ </h2>` +
                   "<i class = 'fa-solid fa-trash' onclick = 'delElement("+ (j++) +")'></i></div>"
                  )
        }
        ).join('');
    }
}