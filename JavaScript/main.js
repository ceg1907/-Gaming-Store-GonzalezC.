// const Articulos = function (id, nombre,img, precio, stock){
//     this.id = id;
//     this.nombre = nombre;
//     this.imagen = img;
//     this.precio = precio;
//     this.stock = stock;
// }

// const articulo1 = new Articulos ("1","video geforce gtx 1660 super 6gb asus tuf gamind oc edition", "../multimedia/productos/grafica-nvidia1.webp", "310957,90", 25);
// const articulo2 = new Articulos ("2","geforce rtx 3060 12gb gigabyte eagle", "../multimedia/productos/grafica-nvidia2.webp", "350370,02", 10);
// const articulo3 = new Articulos ("3","geforce rtx 4090 24gb asus rog strix gaming","../multimedia/productos/grafica-nvidia3.webp", "2051000,00", 7);
// const articulo4 = new Articulos ("4","silla gamer aureox g600 negra y blanco", "../multimedia/productos/silla1.webp", "179000,01", 12);
// const articulo5 = new Articulos ("5","silla gamer corsair t3 rush carbon", "../multimedia/productos/silla2.webp", "266084,99", 16);
// const articulo6 = new Articulos ("6","silla gamer corsair T3 rush fabric gris/blanco", "../multimedia/productos/silla3.webp", "265500,00", 16);
// const articulo7 = new Articulos ("7","auricular hyperx cloud stinger core wireless white", "../multimedia/productos/auriculares1.webp", "57669,98", 16);
// const articulo8 = new Articulos ("8","uricular logitech g435 blanco lightspeed wireless mic incluido", "../multimedia/productos/auriculares2.webp", "64969,96", 10);
// const articulo9 = new Articulos ("9","procesador amd ryzen 3 3200G 4.0ghz turbo + radeon vega 8 am4 wraith stealth cooler", "../multimedia/productos/procesador.webp", "93600,00", 17);
// const articulo10 = new Articulos ("10","gabinete corsair spec delta md-tower tg rgb fuente 550w", "../multimedia/productos/gabinete+fuente.webp", "94999,99", 22);
// const articulo11 = new Articulos ("11","gabinete gamemax cyclops bg fan argb atx", "../multimedia/productos/gabinete1.webp", "50089,98", 19);
// const articulo12 = new Articulos ("12","gabinete lian li lancool 205 mesh w white", "../multimedia/productos/gabinete2.webp", "65050,00", 15);
// const articulo13 = new Articulos ("13","teclado y mouse slim wireless logitech mk470 rose", "../multimedia/productos/teclado+mouse.webp", "39630,00", 16);
// const articulo14 = new Articulos ("14","combo razer level up cynosa lite + viper mini + gigantus v2", "../multimedia/productos/teclado+mouse2.webp", "139954,26", 18);
// const articulo15 = new Articulos ("15","mouse razer deathadder essential", "../multimedia/productos/mouse.webp", "139954,26", 18);
// const articulo16 = new Articulos ("16","monitor 22 pulgadas samsung led t350f", "../multimedia/productos/monitor.webp", "83.699,50", 18);
// const articulo17 = new Articulos ("17","monitor smart samsung 27 pulgadas m5 full hd va 60hz", "../multimedia/productos/monitor2.webp", "156500,00", 18);
// const articulo18 = new Articulos ("18","sli bridge evga nvlink para rtx 3090 4 slot spacing", "../multimedia/productos/sli-bridge.webp", "19064,48", 21);
// const articulo19 = new Articulos ("19","notebook gamer dell alienware 15.6p core i7 11800h 16gb 512gb ssd nvme rtx 3060 w10 144h", "../multimedia/productos/notebook.webp", "1275.999", 2);
// const articulo20 = new Articulos ("20","disco solido ssd team 512gb gx2 530mb/s", "../multimedia/productos/discossd.webp", "27450,00", 11);
// const articulo21 = new Articulos ("21","mouse pad logitech 300x700mm deskpad rose", "../multimedia/productos/mousepad.webp", "26400,00", 12);


let listaArticulos = [];

fetch("../JavaScript/articulos.json")
    .then(response => response.json())
    .then(data => {
        listaArticulos = data;
        CargarProductos(listaArticulos);
    })
fetch("../JavaScript/articulos.json")
    .then(response => response.json())
    .then(data => {
        listaArticulos = data;
        CargarProductosIndex1(listaArticulos);
    })



const contenedorCards = document.querySelector("#contenedor-cards");
const contenedorCardsIndex1 = document.querySelector(".product1");
const contenedorCardsIndex2 = document.querySelector(".product2");
let botonesAgregar = document.querySelectorAll(".carrito-agregar");







function CargarProductos(){

    listaArticulos.forEach(Articulo =>{
        const divCards = document.createElement("div");
        divCards.classList.add("card", "align-product");
        divCards.innerHTML = `
        <div class="c-b">
        <img class="card-img-top img-home" src=".${Articulo.imagen}" alt="${Articulo.nombre}" />
        </div>
        <div class="card-body d-flex">
            <p class="nombre-item">${Articulo.nombre}</p>
            <div class="precio d-flex">
                <p class="monto-item">${Articulo.precio}</p>
                <button class="carrito-agregar" id="${Articulo.id}">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                </button>
            </div>
        </div>
        `;
        contenedorCards.append(divCards);
    })
    CargarBtnAgregar()
};


function CargarProductosIndex1(){

    listaArticulos.forEach(articulo => {
        if(articulo.categoria == "ultimas-novedades"){
            const divCardsIndex1 = document.createElement("div");
            divCardsIndex1.classList.add("card", "align-product");
            divCardsIndex1.innerHTML = `
            <div class="c-b">
                <img class="card-img-top img-home" src="${articulo.imagen}" alt="${articulo.nombre}" />
            </div>
            <div class="card-body d-flex">
                <p class="nombre-item">${articulo.nombre}</p>
                <div class="precio d-flex">
                    <p class="monto-item">${articulo.precio}</p>
                    <button class="carrito-agregar" id="${articulo.id}">
                        <i class="fa-solid fa-cart-arrow-down"></i>
                    </button>
                </div>
            </div>
            `;
            contenedorCardsIndex1.append(divCardsIndex1);
        }
    })
    listaArticulos.forEach(articulo => {
        if(articulo.categoria == "mas-vendidos"){
            const divCardsIndex2 = document.createElement("div");
            divCardsIndex2.classList.add("card", "align-product");
            divCardsIndex2.innerHTML = `
            <div class="c-b">
                <img class="card-img-top img-home" src=".${articulo.imagen}" alt="${articulo.nombre}" />
            </div>
            <div class="card-body d-flex">
                <p class="nombre-item">${articulo.nombre}</p>
                <div class="precio d-flex">
                    <p class="monto-item">${articulo.precio}</p>
                    <button class="carrito-agregar" id="${articulo.id}">
                        <i class="fa-solid fa-cart-arrow-down"></i>
                    </button>
                </div>
            </div>
            `;
            contenedorCardsIndex2.append(divCardsIndex2);
        }
    })
    CargarBtnAgregar()
};






function CargarBtnAgregar() {
    botonesAgregar = document.querySelectorAll(".carrito-agregar");
    botonesAgregar.forEach(btn => {
        btn.addEventListener("click", agregarAlCarrito);
    });
}


let CarritoArmado;

let CarritoArmadoLS = localStorage.getItem("articulos-en-carrito");

if(CarritoArmadoLS){
    CarritoArmado = JSON.parse(CarritoArmadoLS);
}else{
    CarritoArmado = [];
}


function agregarAlCarrito (e){

    Toastify({
        text: "Se agrego al carrito",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            borderRadius: '2rem',
            background: "linear-gradient(to right, rgba(21, 27, 56, 0.9), rgba(51, 56, 81, 0.9))",
            boxShadow: ' 0 0rem 3rem #151b38',
            fontWeight: 'bold',
        },
        offset: {
            x: '2rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '2rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const btnItem = e.currentTarget.id;
    const itemdelArray = listaArticulos.find(articulo=> articulo.id === btnItem);
    const cantidadEnstock = itemdelArray.stock;
    const itemEnCarrito = listaArticulos.find(articulo=> articulo.id === btnItem);

    
    if(CarritoArmado.some(articulo=> articulo.id === btnItem)){

        const indexItem = CarritoArmado.findIndex(articulo=> articulo.id === btnItem);
        CarritoArmado[indexItem].cantidad++;
    }else{
        let cantidadDeArticulos = itemEnCarrito.cantidad = 1;

        if(cantidadDeArticulos <= cantidadEnstock){
            CarritoArmado.push(itemEnCarrito);
        }
    }


    localStorage.setItem("articulos-en-carrito", JSON.stringify(CarritoArmado))

}









// function sumarCantidad(){

//     cantidadDeArticulos = cantidadDeArticulos + 1;
//     document.querySelectorAll(".carrito-item-cantidad").innerHTML = cantidadDeArticulos
// }
// function restarCantidad(){
//     cantidadDeArticulos = cantidadDeArticulos - 1;
//     document.getElementsByClassName("carrito-item-cantidad").innerHTML = cantidadDeArticulos
// }
// let bntSumar = document.getElementsByClassName("sumar-item");
// bntSumar.addEventListener("click", sumarCantidad);

// let bntRestar = document.getElementsByClassName("restar-item")
// bntRestar.addEventListener("click", restarCantidad);






