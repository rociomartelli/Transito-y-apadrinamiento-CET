const categorias = document.querySelectorAll('.categoria');

        // Agregar los eventos para cada categoría
        categorias.forEach(categoria => {
            categoria.addEventListener('mouseover', function() {
                categoria.style.color = '#36240F'; // Cambiar el color del texto al pasar el mouse
                categoria.style.fontSize = '20px'; // Agrandar la letra al pasar el mouse
            });

            categoria.addEventListener('mouseout', function() {
                categoria.style.color = ''; // Restaurar el color original del texto al quitar el mouse
                categoria.style.fontSize = ''; // Restaurar el tamaño de letra original al quitar el mouse
            });
        });