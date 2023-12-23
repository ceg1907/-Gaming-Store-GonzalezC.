let CarritoArmado = localStorage.getItem("articulos-en-carrito");
CarritoArmado = JSON.parse(CarritoArmado);



const boxCarritoVacio = document.getElementById("carrito-vacio");
const boxArticulos = document.getElementById("articulos-carrito");
const boxInteracciones = document.getElementById("carrito-interacciones");
const boxCarritoComprado = document.getElementById("carrito-comprado");
let btnEliminar = document.querySelectorAll(".btn-eliminar-item");
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const boxTotal = document.querySelector("#total")
const btnComprar = document.querySelector("#carrito-comprar")


function cargarArticulosCarrito(){
    if (CarritoArmado && CarritoArmado.length > 0 ){

        boxCarritoVacio.classList.add("disabled")
        boxArticulos.classList.remove("disabled")
        boxInteracciones.classList.remove("disabled")
        boxCarritoComprado.classList.add("disabled")
    
    
        boxArticulos.innerHTML= "";
    
        CarritoArmado.forEach(articulo => {
            const cardCarrito = document.createElement ("div");
            cardCarrito.classList.add("carrito-item")
            cardCarrito.innerHTML = `
            <img class="img-producto" src=".${articulo.imagen}" alt="${articulo.nombre}" />
            <div class="nombre-producto">
                <p class="small">Nombre</p>
                <p class="nombre-item">${articulo.nombre}</p>
            </div>
            <div class="cantidad-item">
                <p class="small">Cantidad</p>
                <div class="selector-cantidad">
                    <button class="restar-item"><i class="fa-solid fa-minus restar-cantidad"></i></button>
                    <input type="text" value="${articulo.cantidad}" class="carrito-item-cantidad">
                    <button class="sumar-item"><i class="fa-solid fa-plus sumar-cantidad"></i></button>
                </div>
            </div>
            <div class="precio-item">
                <p class="small">Precio</p>
                <p class="monto-item">$${articulo.precio}</p>
            </div>
            <div class="subtotal-item">
                <p class="small">Subtotal</p>
                <p>$ ${parseFloat(articulo.precio) * articulo.cantidad},00</p>
            </div>
            <button class="btn-eliminar-item" id= "${articulo.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
            `;
            boxArticulos.append(cardCarrito);

            const btnResta = cardCarrito.querySelector(".restar-item")
            btnResta.addEventListener("click", ()=> {
                if(articulo.cantidad != 1){
                    articulo.cantidad--;
                    cargarArticulosCarrito();
                }

            });
            const btnSuma = cardCarrito.querySelector(".sumar-item")
            btnSuma.addEventListener("click", ()=> {
                if(articulo.cantidad < articulo.stock){
                    articulo.cantidad++;
                    cargarArticulosCarrito();
                }else{
                    Swal.fire({
                        title: "No hay suficiente stock del producto",
                        width: '30%',
                        padding: "3em",
                        color: "#272626",
                        background: "#fff ",
                        toast: true,
                        position: 'top',
                        allowOutsideClick: true,
                        allowEnterKey: true,
                        customClass: {
                            confirmButton: 'btn-confirmar',
                            title: 'title-sweetalert',
                            popup: 'popup-class',
                        },
                    });
                }
            });
        });
    }else{
        boxCarritoVacio.classList.remove("disabled")
        boxArticulos.classList.add("disabled")
        boxInteracciones.classList.add("disabled")
        boxCarritoComprado.classList.add("disabled")
    }
    CargarBtnEliminar();
    TotalCarrito()
}

cargarArticulosCarrito();



function CargarBtnEliminar() {
    btnEliminar = document.querySelectorAll(".btn-eliminar-item");

    btnEliminar.forEach(btn => {
    btn.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito (e){

    Toastify({
        text: "Articulo eliminado",
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
            fontSize:'0.90rem',
        },
        offset: {
            x: '2rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '2rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    let btnItem = e.currentTarget.id;
    const indexItem = CarritoArmado.findIndex(articulo => articulo.id === btnItem)

    CarritoArmado.splice(indexItem, 1)
    cargarArticulosCarrito();

    localStorage.setItem("articulos-en-carrito", JSON.stringify(CarritoArmado));
}


vaciarCarrito.addEventListener("click", VaciarCarrito);
function VaciarCarrito(){
    CarritoArmado.length = 0;
    localStorage.setItem("articulos-en-carrito", JSON.stringify(CarritoArmado));
    cargarArticulosCarrito()
}

function TotalCarrito(){
    valorTotal = CarritoArmado.reduce ((acc, articulo) => acc + (parseFloat(articulo.precio) * articulo.cantidad), 0)
    total.innerHTML = `$${valorTotal},00`;
}


btnComprar.addEventListener("click", ComprarCarrito);
function ComprarCarrito(){
    CarritoArmado.length = 0;
    localStorage.setItem("articulos-en-carrito", JSON.stringify(CarritoArmado));

    boxCarritoVacio.classList.add("disabled")
    boxArticulos.classList.add("disabled")
    boxInteracciones.classList.add("disabled")
    boxCarritoComprado.classList.remove("disabled")
    
}




