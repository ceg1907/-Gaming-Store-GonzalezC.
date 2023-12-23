listaArticulos = [];

fetch("../JavaScript/articulos.json")
    .then(response => response.json())
    .then(data => {
        listaArticulos = data;
        window.addEventListener("keydown", (event)=>{
            if(event.key==="Enter")
            buscarProductos(listaArticulos)
        })
    
    })

    const cleaner = document.querySelectorAll("cleaner");
    const boxBuscador = document.querySelector("#contenedor-buscador");





    function buscarProductos(){
        cleaner.innerHTML= "";
        let buscadorInput= document.getElementById("buscadorInput").value;
        let elementoBuscado = buscadorInput.toLowerCase().trim();
        let resultadoBusqueda = listaArticulos.filter(articulo => articulo.nombre.toLowerCase().includes(elementoBuscado))
        if(resultadoBusqueda.length > 0){
            cleaner.innerHTML= `
            <div id="contenedor-buscador" class="row justify-content-center container-fluid m-0 ">
                <div class="bg-top">
                    <span class="h-productos">
                        <h1>Resultados busqueda</h1>
                    </span>
                    <div class="filtrado d-flex justify-content-between align-items-center col-12">
                        <form>
                            <select class="filtrado-categorias" name="categorias">
                                <option value="todas las categorias">Todas las categorías</option>
                                <option value="procesadores">procesadores</option>
                                <option value="gráficas">gráficas</option>
                                <option value="perifericos">periféricos</option>
                            </select>
                        </form>
                        <div>
                            <i class="alineacion-list fa-solid fa-grip fa-xl"></i>
                            <i class="alineacion-list fa-solid fa-list fa-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
            resultadoBusqueda.forEach( (articulo) => {
                const boxItemBuscado = document.createElement ("div");
                boxItemBuscado.classList.add("position-article", "d-flex", "justify-content-evenly", "col-sm-12", "col-lg-10");
                boxItemBuscado.innerHTML = `
                <div class="card align-product">
                    <div   div class="c-b">
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
                </div>
                `;
                boxItemBuscado.appendChild(boxBuscador)
            });
        };
    };











