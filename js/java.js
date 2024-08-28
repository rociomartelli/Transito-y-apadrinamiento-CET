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

        // Cambiar color de fondo del botón al pasar el mouse
document.querySelectorAll('.RefugioBoton').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#36240F'; // Color de fondo cuando se hace hover
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = ''; // Color de fondo original
    });
});

// Restaurar color y hacer zoom en las imágenes al pasar el mouse
document.querySelectorAll('.RefugiosImg').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        img.style.filter = 'grayscale(0%)'; // Restaurar color al pasar el mouse
        img.style.transform = 'scale(1.05)'; // Hacer un pequeño zoom en la imagen
    });

    img.addEventListener('mouseout', function() {
        img.style.filter = 'grayscale(100%)'; // Aplicar escala de grises
        img.style.transform = 'scale(1)'; // Restaurar tamaño original #5b483b
    });
});

