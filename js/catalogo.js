function verProductos(categoria) {
    let grupos = document.getElementsByClassName('grupo');
    if (categoria != 'todos') {
        for (let index = 0; index < grupos.length; index++) {
            grupos[index].style.display = 'none';
        }
        document.getElementsByClassName(categoria)[0].style.display = 'flex';
    } else {
        for (let index = 0; index < grupos.length; index++) {
            grupos[index].style.display = 'flex';
        }
    }
}

txtBusqueda.addEventListener('input', function(e) {
    let textoBusqueda = e.target.value.toLowerCase();
    let grupoVisible = Array.from(document.getElementsByClassName('grupo')).filter(e => e.checkVisibility());
    let tarjetas;

    if (grupoVisible.length >= 1) {
        tarjetas = document.getElementsByClassName('tarjeta');
    } else {
        tarjetas = grupoVisible.getElementsByClassName('tarjeta');
    }

    for(let index = 0; index < tarjetas.length; index++) {
        if (tarjetas[index].getElementsByTagName('p')[0].innerText.toLowerCase().includes(textoBusqueda)) {
            tarjetas[index].getElementsByTagName('p')[0].parentElement.style.display = 'block';
        } else {
            tarjetas[index].getElementsByTagName('p')[0].parentElement.style.display = 'none';
        }
    }
});
