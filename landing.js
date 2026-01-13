//*////////////////////// CARGA LOS ELEMENTOS DESDE UN JSON STRING//////////////////////// *//

const BotonCategoria = document.querySelectorAll(".boton_categoria");
const titulo_principal = document.querySelector(".titulo_principal");
let botonesAgregar = document.querySelectorAll(".producto_agregar");
const numerito = document.querySelector("#numerito");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//*////////////////////// push cambio de fondo//////////////////////// *//
const toggle_fondo = document.getElementById("toggle_fondo");
const contenedor_padre = document.querySelector(".contenedor_padre");
const slogan = document.querySelector(".slogan");
const tituloslogan = document.getElementById("tituloslogan");
const titulo_carrusel = document.querySelector(".titulo_carrusel");
const titulo_slider_manual = document.querySelector(".titulo_slider_manual");
const titulolanding = document.querySelector(".titulo_landing");
const slogan_landing = document.querySelector(".parrafo_slogan_inicio");
const elemento = document.getElementsByClassName("elemento ul li");

toggle_fondo.onclick = function () {
  toggle_fondo.classList.toggle("active_fondo");
  contenedor_padre.classList.toggle("active_fondo");
  slogan.classList.toggle("active_fondo");
  tituloslogan.classList.toggle("active_fondo");
  titulo_carrusel.classList.toggle("active_fondo");
  titulo_slider_manual.classList.toggle("active_fondo");
  slogan_landing.classList.toggle("active_fondo");
};

/*////////////////////funcion para cargar peoductos del JSON al galeria de inicio/////////// */
const contenedorProductos = document.querySelector("#contenedor_Productos"); //declaracion

let productos = []; //peticion
fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    cargar_productos(productos);
  });

function cargar_productos(productoElegidos) {
  contenedorProductos.innerHTML = "";

  productoElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="caracteristicas">
   <span class="texto_animadoone">Proyectos Destacados Recientemente</span>
     <hr class="linea_twow"><span class="texto_animadotwow">Trabajo Reciente</span>
    </div>

        <div class="slider-vertical">
          <div class="slider-container">
            ${producto.imagenes.map((img, index) => `<img class="img_producto" src="${img}" alt="${producto.titulo} - ${index + 1}">`).join('')}
          </div>

       
        </div>
        <div class="producto_detalles">
          <h3 class="producto_titulo">${producto.titulo}</h3>
          <div class="carrito_producto_precio"></div>
          <button class="slider-arrow up-arrow">↑</button>
          <button class="slider-arrow down-arrow">↓</button>
          
          
            <div class="togglebtn_detalles"></div>
          </div>
        </div>
      `;
    contenedorProductos.append(div);
    // Botón detalles
    const togglebtn = div.querySelector(".togglebtn_detalles");
    const container_Boton_detalles = div.querySelector(
      ".container_Boton_detalles"
    );
    togglebtn.addEventListener("click", function () {
      const detallesAbiertos = document.querySelectorAll(
        ".container_Boton_detalles.active_text"
      );
      detallesAbiertos.forEach((detalleAbierto) => {
        if (detalleAbierto !== container_Boton_detalles) {
          detalleAbierto.classList.remove("active_text");
        }
      });
      container_Boton_detalles.classList.toggle("active_text");
    });

    // Inicializar slider vertical para este producto
    const sliderContainer = div.querySelector('.slider-container');
    const images = sliderContainer.querySelectorAll('.img_producto');
    const upArrow = div.querySelector('.up-arrow');
    const downArrow = div.querySelector('.down-arrow');
    let currentIndex = 0;
    let autoplayInterval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
      });
    }

    // Mostrar la primera imagen
    showImage(0);

    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
      }, 3000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    upArrow.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
    });

    downArrow.addEventListener('click', () => {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      showImage(currentIndex);
    });

    // Iniciar autoplay
    startAutoplay();

    // Pausar en hover
    div.addEventListener('mouseenter', stopAutoplay);

    // Reanudar al salir del hover
    div.addEventListener('mouseleave', startAutoplay);
  });

  // INICIALIZAR SLIDER Y CONTROLES SOLO PARA EL SLIDER DE PRODUCTOS
  const carousel = document.querySelector(".carousel");
  const leftArrow = document.getElementById("productos-left");
  const rightArrow = document.getElementById("productos-right");

  // Función para calcular el desplazamiento exacto de una tarjeta
  const getSmoothScrollAmount = () => {
    const firstCard = carousel.querySelector(".producto");
    if (!firstCard || typeof firstCard.clientWidth === "undefined") {
      return 0;
    }
    // El gap entre tarjetas es 2vh (según CSS)
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
    return firstCard.clientWidth + gap;
  };

  leftArrow.addEventListener("click", () => {
    const scrollAmount = getSmoothScrollAmount();
    if (scrollAmount === 0) return;
    carousel.scrollLeft -= scrollAmount;
  });

  rightArrow.addEventListener("click", () => {
    const scrollAmount = getSmoothScrollAmount();
    if (scrollAmount === 0) return;
    carousel.scrollLeft += scrollAmount;
  });
}

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//*////////////////////// LISTA DESPEGABLe//////////////////////// *//

function abrirListaDesple() {
  if (
    listaOculta.style.display === "none" ||
    listaOculta.style.display === ""
  ) {
    listaOculta.style.display = "block";
  } else {
    listaOculta.style.display = "none";
  }
}
/* CIERRA EL BOTON CATEGORIA Y CARGA LOS PRODUCTOS DE LA CATEGORIA*/

document.addEventListener("DOMContentLoaded", function () {
  BotonCategoria.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoriaSeleccionada = boton.dataset.categoria;
      cargar_productos_filtrados(categoriaSeleccionada);

      /**/ /////////////////////FILTRADO LISTA DESPLEGABLE CATEGORIAS PRODUCTOS//////// */

      function cargar_productos_filtrados(categoriaSeleccionada) {
        fetch("./productos.json")
          .then((response) => response.json())
          .then((data) => {
            const productosFiltrados = data.filter(
              (producto) => producto.categoria === categoriaSeleccionada
            );
            mostrar_productos_filtrados(productosFiltrados);
          })
          .catch((error) => console.error("Error al cargar productos:", error));
      }
    });

    function mostrar_productos_filtrados(productos) {
      // Aquí deberías tener lógica para mostrar los productos filtrados en tu interfaz
      // Por ejemplo, puedes utilizar la función cargar_productos() con los productos filtrados
      cargar_productos(productos);
    }
  });
});

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*////////////////////////// SCRIPT SLIDER MANUAL//////////////////*/

// Seleccionar elementos del DOM
const carousel = document.querySelector(".carousel"); // Contenedor del carrusel
const firstImg = carousel.querySelectorAll("img")[0]; // Primera imagen del carrusel
const arrowIcons = document.querySelectorAll(".wrapper .cont_controls i "); // Íconos de flecha

// Variables para rastreo del estado del arrastre y desplazamiento
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

// Función para mostrar u ocultar las flechas de navegación
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

// Función para calcular el desplazamiento suave del carousel
const getSmoothScrollAmount = () => {
  const firstCard = carousel.querySelector(".producto");
  if (!firstCard || typeof firstCard.clientWidth === "undefined") {
    return 0;
  }
  // El gap entre tarjetas es 2vh (según CSS)
  const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
  return firstCard.clientWidth + gap;
};

// Función para alinear el carousel correctamente
const alignCarousel = () => {
  const firstImg = carousel.querySelector("img:first-child");
  if (!firstImg) return;
  
  const imgWidth = firstImg.clientWidth + 14;
  const currentScroll = carousel.scrollLeft;
  const alignedScroll = Math.round(currentScroll / imgWidth) * imgWidth;
  
  if (Math.abs(currentScroll - alignedScroll) > 10) {
    carousel.scrollTo({
      left: alignedScroll,
      behavior: 'smooth'
    });
  }
};

// Event listeners para los íconos de flecha
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const scrollAmount = getSmoothScrollAmount();
    if (scrollAmount === 0) return;
    
    carousel.scrollLeft += icon.id == "left" ? -scrollAmount : scrollAmount; // Desplazamiento suave
    
    // Alinear el carousel después del desplazamiento
    setTimeout(() => {
      alignCarousel();
      showHideIcons();
    }, 100);
  });
});

// Función para desplazamiento automático
const autoSlide = () => {
  const scrollAmount = getSmoothScrollAmount();
  
  if (
    carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth ||
    carousel.scrollLeft <= 0 ||
    scrollAmount === 0
  ) {
    return; // Retornar si no hay más imágenes hacia la izquierda o si no se puede calcular el desplazamiento
  }

  let positionDiff = Math.abs(positionDiff); // Hacer positionDiff positivo
  let valDifference = scrollAmount - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // Si el usuario desplaza hacia la derecha
    carousel.scrollLeft +=
      positionDiff > scrollAmount / 3 ? valDifference : -positionDiff;
  } else {
    // Si el usuario desplaza hacia la izquierda
    carousel.scrollLeft -=
      positionDiff > scrollAmount / 3 ? valDifference : -positionDiff;
  }
};

// Función para inicio de arrastre
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX; // Coordenadas del arrastre
  prevScrollLeft = carousel.scrollLeft; // Posición inicial del carrusel
};

// Función para arrastrar
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; // Diferencia de posición
  carousel.scrollLeft = prevScrollLeft - positionDiff; // Actualizar el desplazamiento
  showHideIcons();
};

// Función para finalizar el arrastre
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide(); // Activar función de desplazamiento automático
};

// Event listeners para el arrastre y clics en el carrusel
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**/ ///////////////// FUNCION MENU HAMBURGUESA /////////// */
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeMenuBtn = document.getElementById('close-menu');

  // Función centralizada para abrir/cerrar menú
  function toggleMenu(forceClose = false) {
    if (navMenu.classList.contains("active") || forceClose) {
      navMenu.classList.add("closing");
      menuOverlay.classList.remove("active");
      setTimeout(() => {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active", "closing");
        document.body.style.overflow = "auto";
      }, 300);
    } else {
      hamburgerMenu.classList.add("active");
      navMenu.classList.add("active");
      menuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  hamburgerMenu.addEventListener("click", () => toggleMenu());
  menuOverlay.addEventListener("click", () => toggleMenu(true));
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenu(true));

  // Scroll suave y cierre de menú para todos los enlaces
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      toggleMenu(true);
    });
  });

  // Cerrar menú con tecla Escape
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu(true);
    }
  });
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//

/**/ /////////////////// SCRIP SLIDER ACERCA//////////////// */

// Implementación nativa del slider sin GSAP
function inicializarSliderAcerca() {
  var slides = document.querySelectorAll(".slide");
  
  // Solo ejecutar si hay slides
  if (slides.length > 0) {
    let currentSlide = 0;
    
    // Crear contenedor de dots si no existe
    let dotsContainer = document.getElementById("Dots");
    if (!dotsContainer) {
      dotsContainer = document.createElement("div");
      dotsContainer.id = "Dots";
      dotsContainer.style.cssText = "position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 10;";
      
      // Insertar después del primer contenedor de slides
      const firstSlideContainer = slides[0].closest('.container-all') || slides[0].parentElement;
      if (firstSlideContainer) {
        firstSlideContainer.style.position = "relative";
        firstSlideContainer.appendChild(dotsContainer);
      }
    }
    
    // Crear dots
    for (var i = 0; i < slides.length; i++) {
      var D = document.createElement("div");
      D.className = "Dot";
      D.id = "Dot" + i;
      D.style.cssText = "width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.5); cursor: pointer; transition: background 0.3s;";
      
      D.addEventListener("click", function () {
        const dotIndex = parseInt(this.id.replace('Dot', ''));
        mostrarSlide(dotIndex);
      });
      
      dotsContainer.appendChild(D);
    }
    
    // Función para mostrar slide específico
    function mostrarSlide(index) {
      if (index < 0 || index >= slides.length) return;
      
      // Ocultar todos los slides
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        slide.style.transform = i === index ? 'scale(1)' : 'scale(0.8)';
        slide.style.transition = 'all 0.5s ease';
      });
      
      // Actualizar dots
      document.querySelectorAll('.Dot').forEach((dot, i) => {
        dot.style.background = i === index ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)';
      });
      
      currentSlide = index;
    }
    
    // Función para navegar
    function GO(direction) {
      let newIndex = currentSlide + direction;
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;
      mostrarSlide(newIndex);
    }
    
    // Agregar event listeners solo si los elementos existen
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevtBtn");

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        GO(1);
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        GO(-1);
      });
    }
    
    // Inicializar con el primer slide
    mostrarSlide(0);
  }
}

// Inicializar el slider cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  inicializarSliderAcerca();
});
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/**/ ////////////GALERIA 2 sliders +video ////////////////////////////////////////////////////////////////////////*/

// Verificar si los elementos existen antes de usar
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector("#left");
const btnRigth = document.querySelector("#rigth");

if (slider && btnLeft && btnRigth) {
  let sliderSection = document.querySelectorAll(".slider_section");
  
  if (sliderSection.length > 0) {
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
      if (!sliderSectionFirst) return;

      slider.style.marginLeft = "-21.5vh";
  slider.style.transition = "all 1.5s";

  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-0";
  }, 1500);
}

function antes() {
      let sliderSection = document.querySelectorAll(".slider_section");
      if (sliderSection.length === 0) return;
      
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

      slider.style.marginLeft = "0";
  slider.style.transition = "all 1.5s";

  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "1vh";
  }, 1500);
}

btnRigth.addEventListener("click", function () {
  Next();
});

btnLeft.addEventListener("click", function () {
  antes();
});
  }
}

//  numero incrementador proyectos

// Función mejorada para iniciar los contadores
function iniciarContadores() {
  const numeroElementos = document.querySelectorAll(".numer_circulo");
  
  numeroElementos.forEach((elemento) => {
    const valorInicial = parseInt(elemento.getAttribute("data-inicial")) || 0;
    const valorMaximo = parseInt(elemento.getAttribute("data-maximo")) || 100;
    let valor = valorInicial;
    let subiendo = true;
    let animacionActiva = true;

    function animarNumero() {
      if (!animacionActiva) return;
      
      if (subiendo) {
        valor++;
        if (valor >= valorMaximo) {
          subiendo = false;
        }
      } else {
        valor--;
        if (valor <= valorInicial) {
          subiendo = true;
        }
      }

      elemento.textContent = valor;
      setTimeout(animarNumero, 50); // Reducido de 10 a 50ms para mejor performance
    }

    // Iniciar animación solo si el elemento está visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animacionActiva = true;
    animarNumero();
        } else {
          animacionActiva = false;
        }
      });
    }, { threshold: 0.5 });

    observer.observe(elemento);
  });
}

// Función mejorada para manejar las animaciones de scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.75; // Punto de activación más temprano
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Si el elemento está en el viewport o cerca de entrar
        if (elementTop < triggerPoint && elementBottom > 0) {
            element.style.opacity = '1';
            
            // Aplicar la animación correspondiente con un pequeño retraso basado en la posición
            const delay = Math.min((elementTop / windowHeight) * 0.5, 0.3);
            
            if (element.classList.contains('fade-in-up')) {
                element.style.animation = `fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`;
            } else if (element.classList.contains('fade-in-left')) {
                element.style.animation = `fadeInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`;
            } else if (element.classList.contains('fade-in-right')) {
                element.style.animation = `fadeInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`;
                    }
    }
});

// ==================== FUNCIONALIDAD DEL FORMULARIO ====================

// Función para inicializar el formulario de contacto
function inicializarFormulario() {
    const formulario = document.getElementById('formularioContacto');
    const btnEnviar = document.querySelector('.btn_enviar_formulario');
    
    if (!formulario) return;
    
    // Detectar si es dispositivo móvil
    const esMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Validación en tiempo real
    const inputs = formulario.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validarCampo);
        input.addEventListener('input', limpiarError);
        
        // Optimizaciones específicas para móviles
        if (esMobile) {
            // Prevenir zoom en inputs en iOS
            if (input.type === 'text' || input.type === 'email' || input.type === 'tel') {
                input.style.fontSize = '16px'; // Previene zoom en iOS
            }
            
            // Mejorar experiencia de focus en móviles
            input.addEventListener('focus', () => {
                // Scroll suave al input en móviles
                setTimeout(() => {
                    input.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 300);
            });
        }
    });
    
    // Manejo del envío del formulario
    formulario.addEventListener('submit', manejarEnvioFormulario);
    
    // Animación de focus en inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Optimizaciones para checkboxes en móviles
    const checkboxes = formulario.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (esMobile) {
            // Aumentar área táctil para checkboxes
            const label = checkbox.closest('label');
            if (label) {
                label.style.padding = '1vh';
                label.style.margin = '0.5vh 0';
            }
        }
    });
    
    // Optimizaciones para selects en móviles
    const selects = formulario.querySelectorAll('select');
    selects.forEach(select => {
        if (esMobile) {
            // Mejorar experiencia de select en móviles
            select.addEventListener('change', () => {
                // Feedback visual inmediato
                select.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    select.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });
    
    // Prevenir envío accidental en móviles
    if (esMobile) {
        let submitTimeout;
        btnEnviar.addEventListener('touchstart', (e) => {
            submitTimeout = setTimeout(() => {
                btnEnviar.classList.add('touch-active');
            }, 100);
        });
        
        btnEnviar.addEventListener('touchend', (e) => {
            clearTimeout(submitTimeout);
            btnEnviar.classList.remove('touch-active');
        });
    }
}

// Función para validar campos individuales
function validarCampo(event) {
    const campo = event.target;
    const valor = campo.value.trim();
    const esRequerido = campo.hasAttribute('required');
    
    if (esRequerido && !valor) {
        mostrarError(campo, 'Este campo es requerido');
        return false;
    }
    
    // Validaciones específicas
    if (campo.type === 'email' && valor) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(valor)) {
            mostrarError(campo, 'Ingresa un email válido');
            return false;
        }
    }
    
    if (campo.type === 'tel' && valor) {
        const telefonoRegex = /^[\d\s\-\+\(\)]+$/;
        if (!telefonoRegex.test(valor)) {
            mostrarError(campo, 'Ingresa un teléfono válido');
            return false;
        }
    }
    
    limpiarError(campo);
    return true;
}

// Función para mostrar errores
function mostrarError(campo, mensaje) {
    const formGroup = campo.closest('.form_group');
    const validation = formGroup.querySelector('.form_validation');
    
    campo.style.borderColor = '#ff6b6b';
    if (validation) {
        validation.innerHTML = `<span style="color: #ff6b6b; font-size: 1vh;">${mensaje}</span>`;
    }
}

// Función para limpiar errores
function limpiarError(campo) {
    const formGroup = campo.closest('.form_group');
    const validation = formGroup.querySelector('.form_validation');
    
    campo.style.borderColor = 'rgba(247, 218, 103, 0.3)';
    if (validation) {
        validation.innerHTML = '';
    }
}

// Función para manejar el envío del formulario
async function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    const formulario = event.target;
    const btnEnviar = formulario.querySelector('.btn_enviar_formulario');
    const campos = formulario.querySelectorAll('input[required], select[required], textarea[required]');
    
    // Validar todos los campos requeridos
    let esValido = true;
    campos.forEach(campo => {
        if (!validarCampo({ target: campo })) {
            esValido = false;
        }
    });
    
    if (!esValido) {
        mostrarNotificacion('Por favor, completa todos los campos requeridos', 'error');
        return;
    }
    
    // Mostrar estado de carga
    btnEnviar.classList.add('loading');
    btnEnviar.disabled = true;
    
    try {
        // Simular envío (aquí iría la lógica real de envío)
        await simularEnvioFormulario();
        
        // Éxito
        mostrarNotificacion('¡Formulario enviado con éxito! Te contactaremos pronto.', 'success');
        formulario.reset();
        
    } catch (error) {
        // Error
        mostrarNotificacion('Hubo un error al enviar el formulario. Inténtalo de nuevo.', 'error');
    } finally {
        // Restaurar botón
        btnEnviar.classList.remove('loading');
        btnEnviar.disabled = false;
    }
}

// Función para simular el envío (reemplazar con lógica real)
function simularEnvioFormulario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
    // Detectar si es móvil
    const esMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.innerHTML = `
        <div class="notificacion-contenido">
            <i class="bi bi-${tipo === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${mensaje}</span>
        </div>
    `;
    
    // Estilos base
    let estilosBase = `
        position: fixed;
        background: ${tipo === 'success' ? 'var(--clr-segundario)' : '#ff6b6b'};
        color: ${tipo === 'success' ? 'var(--clr-principal)' : 'white'};
        padding: 2vh 3vh;
        border-radius: 1vh;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: inherit;
        font-weight: 500;
    `;
    
    // Ajustar posición según dispositivo
    if (esMobile) {
        estilosBase += `
            top: 10px;
            left: 10px;
            right: 10px;
            transform: translateY(-100%);
            max-width: none;
            text-align: center;
            font-size: 1.2vh;
        `;
    } else {
        estilosBase += `
            top: 20px;
            right: 20px;
            max-width: 40vh;
            font-size: 1.3vh;
        `;
    }
    
    notificacion.style.cssText = estilosBase;
    
    document.body.appendChild(notificacion);
    
    // Animar entrada
    setTimeout(() => {
        if (esMobile) {
            notificacion.style.transform = 'translateY(0)';
        } else {
            notificacion.style.transform = 'translateX(0)';
        }
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        if (esMobile) {
            notificacion.style.transform = 'translateY(-100%)';
        } else {
            notificacion.style.transform = 'translateX(100%)';
        }
        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 300);
    }, 5000);
    
    // Permitir cerrar con tap en móviles
    if (esMobile) {
        notificacion.addEventListener('click', () => {
            notificacion.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                if (document.body.contains(notificacion)) {
                    document.body.removeChild(notificacion);
                }
            }, 300);
        });
    }
}

// Agregar inicialización del formulario a la función principal
document.addEventListener('DOMContentLoaded', inicializarFormulario);
}

// Optimización del evento de scroll con throttling
let isScrolling;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScrollAnimations();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Efecto parallax removido - las imágenes se mantienen fijas en su contenedor

// Efectos de hover mejorados para botones
document.querySelectorAll('.cont_boton_acerca, .boton_contacto').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-4px) scale(1.05)';
        button.style.boxShadow = '8px 8px 16px rgba(0, 0, 0, 0.25), -8px -8px 16px rgba(255, 255, 255, 0.08)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
        button.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.05)';
    });
    
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(0) scale(0.98)';
        button.style.boxShadow = 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.05)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-4px) scale(1.05)';
        button.style.boxShadow = '8px 8px 16px rgba(0, 0, 0, 0.25), -8px -8px 16px rgba(255, 255, 255, 0.08)';
    });
});

// Función para inicializar todo de manera segura
function inicializarAplicacion() {
    try {
    // Inicializar contadores
    iniciarContadores();
    
    // Aplicar clases de animación
    document.querySelectorAll('.titulo_landing, .parrafo_slogan_inicio, .titulo_slogan, .conte_botones').forEach((el, index) => {
            if (el) {
        el.classList.add('animate-on-scroll');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
            }
    });
    
    // Inicializar las animaciones
    handleScrollAnimations();
    
    // Forzar una actualización después de un breve retraso
    setTimeout(handleScrollAnimations, 100);
    } catch (error) {
        console.warn('Error al inicializar la aplicación:', error);
    }
}

// Inicializar animaciones al cargar la página de manera segura
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarAplicacion);
} else {
    inicializarAplicacion();
}

// Manejo del menú de navegación inferior
function inicializarNavegacionInferior() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    const bottomNav = document.querySelector('.bottom-nav');

    if (!navItems.length || !sections.length || !bottomNav) {
        return; // Salir si no hay elementos necesarios
    }

    // Función para actualizar el ítem activo del menú
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // Manejar el scroll para actualizar el menú
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Mostrar/ocultar menú según la dirección del scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            bottomNav.style.transform = 'translate(-50%, 100%)';
        } else {
            bottomNav.style.transform = 'translate(-50%, 0)';
        }
        
        lastScroll = currentScroll;
        updateActiveNavItem();
    });

    // Manejar clicks en los ítems del menú
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
            // Scroll suave a la sección
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Actualizar ítem activo
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            }
        });
    });

    // Efecto de presión en los ítems del menú
    navItems.forEach(item => {
        item.addEventListener('mousedown', () => {
            item.style.transform = 'translateY(0) scale(0.95)';
        });

        item.addEventListener('mouseup', () => {
            item.style.transform = 'translateY(-2px)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Inicializar el estado activo del menú
    updateActiveNavItem();
}

// Inicializar navegación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarNavegacionInferior);
} else {
    inicializarNavegacionInferior();
}

// === SINCRONIZACIÓN SLIDER CENTRAL GALERÍA (VIDEOS) CON RADIOS Y TRANSFORM ===
document.addEventListener('DOMContentLoaded', function () {
    // Selección de elementos SOLO del slider central
    const centro = document.querySelector('.cont_centro_galeria');
    if (!centro) return;
    const slideContainer = centro.querySelector('.slide');
    const slides = centro.querySelectorAll('.slide .item-slide');
    const dots = centro.querySelectorAll('.pagination-item');
    const radios = centro.querySelectorAll('input[type="radio"][name="image-slide"]');
    let current = 0;

    // Función para mover el slide
    function showSlide(index) {
        if (radios[index]) radios[index].checked = true;
        // Mover el contenedor
        slideContainer.style.transform = `translateX(-${index * 100}%)`;
        // Actualizar dots
        dots.forEach((dot, i) => {
            dot.style.background = (i === index) ? '#1a0111b0' : 'var(--clr-segundario)';
        });
        current = index;
    }

    // Inicializar
    if (slides.length && dots.length && radios.length) {
        // Asegurar que el contenedor tenga el ancho correcto
        slideContainer.style.display = 'flex';
        slideContainer.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
        slides.forEach(slide => {
            slide.style.flex = '0 0 100%';
            slide.style.width = '100%';
        });
        showSlide(0);
        // Click en dots
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
            });
        });
        // Cambios en radios (teclado/tab)
        radios.forEach((radio, i) => {
            radio.addEventListener('change', () => {
                if (radio.checked) showSlide(i);
            });
        });
    }

    // Flechas (puedes poner id="galeria-left" y id="galeria-right" a tus flechas si quieres)
    const leftArrow = centro.querySelector('#left');
    const rightArrow = centro.querySelector('#right');
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            let next = current - 1;
            if (next < 0) next = slides.length - 1;
            showSlide(next);
        });
        rightArrow.addEventListener('click', () => {
            let next = current + 1;
            if (next >= slides.length) next = 0;
            showSlide(next);
        });
    }
});

// === CONTROLES DE FLECHAS SINCRONIZADOS PARA SLIDERS LEFT Y RIGHT ===
document.addEventListener('DOMContentLoaded', function () {
    function setupSyncedSliders(leftSelector, rightSelector) {
        const leftContainer = document.querySelector(leftSelector);
        const rightContainer = document.querySelector(rightSelector);
        if (!leftContainer || !rightContainer) return;
        const leftSlide = leftContainer.querySelector('.slide');
        const rightSlide = rightContainer.querySelector('.slide');
        const leftSlides = leftContainer.querySelectorAll('.slide .item-slide');
        const rightSlides = rightContainer.querySelectorAll('.slide .item-slide');
        if (!leftSlide || !rightSlide || leftSlides.length === 0 || rightSlides.length === 0) return;
        let current = 0;
        const total = Math.min(leftSlides.length, rightSlides.length);

        // Eliminar flechas internas si existen
        leftContainer.querySelectorAll('.slider-arrow').forEach(el => el.remove());
        rightContainer.querySelectorAll('.slider-arrow').forEach(el => el.remove());

        // Crear contenedor global de flechas si no existe
        let globalArrows = document.getElementById('global-slider-arrows');
        if (!globalArrows) {
            globalArrows = document.createElement('div');
            globalArrows.id = 'global-slider-arrows';
            globalArrows.style.cssText = `
            display:none;
              
            `;
            // Insertar el contenedor de flechas globales dentro del párrafo
            const sloganParrafo = document.querySelector('.slogan_principal_galeria');
            if (sloganParrafo) {
                sloganParrafo.style.position = 'relative';
                sloganParrafo.appendChild(globalArrows);
            } else {
                document.body.appendChild(globalArrows);
            }
        }
        // Limpiar flechas previas
        globalArrows.innerHTML = '';
        // Crear control izquierdo
        const leftArrow = document.createElement('button');
        leftArrow.className = 'slider-arrow global-left-arrow';
        leftArrow.setAttribute('aria-label', 'Anterior');
        leftArrow.innerHTML = '<span style="font-size:2.2rem;font-weight:bold;">&lt;</span>';
        leftArrow.style.cssText = `
            background: linear-gradient(135deg, #f7da67 60%, #4b6cb7 100%);
            border: none;
            border-radius: 1.2vh;
            width: 48px;
            height: 48px;
            font-size: 2.2rem;
            box-shadow: 0 4px 16px rgba(30,40,90,0.18);
            cursor: pointer;
            pointer-events: auto;
            transition: background 0.2s, transform 0.2s;
            display: flex; align-items: center; justify-content: center;
            color: #fff;
        `;
        // Crear control derecho
        const rightArrow = document.createElement('button');
        rightArrow.className = 'slider-arrow global-right-arrow';
        rightArrow.setAttribute('aria-label', 'Siguiente');
        rightArrow.innerHTML = '<span style="font-size:2.2rem;font-weight:bold;">&gt;</span>';
        rightArrow.style.cssText = leftArrow.style.cssText;
        // Agregar flechas al contenedor global
        globalArrows.appendChild(leftArrow);
        globalArrows.appendChild(rightArrow);

        // Función para mostrar el slide actual en ambos sliders
        function showSlide(index) {
            leftSlide.style.transform = `translateX(-${index * 100}%)`;
            rightSlide.style.transform = `translateX(-${index * 100}%)`;
            leftSlide.style.display = 'flex';
            rightSlide.style.display = 'flex';
            leftSlide.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            rightSlide.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            leftSlides.forEach(slide => {
                slide.style.flex = '0 0 100%';
                slide.style.width = '100%';
            });
            rightSlides.forEach(slide => {
                slide.style.flex = '0 0 100%';
                slide.style.width = '100%';
            });
            current = index;
        }
        showSlide(0);
        // Navegación con flechas globales
        leftArrow.addEventListener('click', () => {
            let next = current - 1;
            if (next < 0) next = total - 1;
            showSlide(next);
        });
        rightArrow.addEventListener('click', () => {
            let next = current + 1;
            if (next >= total) next = 0;
            showSlide(next);
        });
    }
    setupSyncedSliders('.cont_left_galeria', '.cont_rigth_galeria');
});
