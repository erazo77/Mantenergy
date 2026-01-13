// Nueva estructura de datos con mano de obra y todo costo
const servicios = {
    remodelacion: [
        { nombre: 'Remodelación de Baño', mano_obra: [1800000, 3000000], todo_costo: [5500000, 9000000] },
        { nombre: 'Remodelación de Cocina', mano_obra: [2000000, 3800000], todo_costo: [6000000, 12000000] },
        { nombre: 'Remodelación de Habitación', mano_obra: [1500000, 2500000], todo_costo: [4000000, 7000000] },
        { nombre: 'Remodelación de Sala', mano_obra: [1700000, 3000000], todo_costo: [4500000, 8000000] },
        { nombre: 'Remodelación de Oficina', mano_obra: [1800000, 3500000], todo_costo: [5000000, 9000000] },
        { nombre: 'Remodelación de Local Comercial', mano_obra: [2500000, 5000000], todo_costo: [6000000, 15000000] },
        { nombre: 'Remodelación de Terraza', mano_obra: [1500000, 2800000], todo_costo: [3500000, 7000000] },
        { nombre: 'Remodelación de Jardín', mano_obra: [1000000, 2000000], todo_costo: [2000000, 5000000] },
        { nombre: 'Remodelación de Garaje', mano_obra: [1200000, 2500000], todo_costo: [3000000, 6000000] },
        { nombre: 'Remodelación de Área de Lavado', mano_obra: [1200000, 2000000], todo_costo: [2500000, 4500000] },
        { nombre: 'Remodelación de Escaleras', mano_obra: [1500000, 2800000], todo_costo: [3000000, 6000000] },
        { nombre: 'Remodelación de Fachada', mano_obra: [2000000, 3500000], todo_costo: [4000000, 8000000] },
        { nombre: 'Remodelación de Piscina', mano_obra: [4000000, 7000000], todo_costo: [10000000, 20000000] },
        { nombre: 'Remodelación de Área de BBQ', mano_obra: [1800000, 3200000], todo_costo: [3500000, 7000000] },
        { nombre: 'Remodelación de Estudio', mano_obra: [1500000, 2800000], todo_costo: [3000000, 6000000] },
        { nombre: 'Remodelación de Ático', mano_obra: [2000000, 3500000], todo_costo: [5000000, 9000000] },
        { nombre: 'Remodelación de Sótano', mano_obra: [2500000, 4000000], todo_costo: [6000000, 10000000] },
        { nombre: 'Remodelación de Balcón', mano_obra: [1200000, 2000000], todo_costo: [3000000, 5000000] }
    ],
    electricidad: [
        { nombre: 'Instalación Eléctrica Nueva (por punto)', mano_obra: [50000, 100000], todo_costo: [90000, 160000] },
        { nombre: 'Reparación de Cortocircuito', mano_obra: [60000, 150000], todo_costo: [100000, 200000] },
        { nombre: 'Instalación de Lámparas (unidad)', mano_obra: [20000, 50000], todo_costo: [60000, 120000] },
        { nombre: 'Instalación de Ventilador de Techo', mano_obra: [80000, 150000], todo_costo: [180000, 300000] },
        { nombre: 'Instalación de Aire Acondicionado', mano_obra: [300000, 400000], todo_costo: [500000, 800000] },
        { nombre: 'Reparación de Enchufes (unidad)', mano_obra: [30000, 60000], todo_costo: [50000, 100000] },
        { nombre: 'Instalación de Paneles Solares (hogar promedio)', mano_obra: [800000, 1500000], todo_costo: [3000000, 6000000] },
        { nombre: 'Instalación de Sistema de Seguridad', mano_obra: [150000, 300000], todo_costo: [500000, 1500000] },
        { nombre: 'Instalación de Cámaras de Seguridad (por cámara)', mano_obra: [100000, 200000], todo_costo: [300000, 600000] },
        { nombre: 'Instalación de Intercomunicador', mano_obra: [100000, 200000], todo_costo: [250000, 400000] },
        { nombre: 'Instalación de Timbre Eléctrico', mano_obra: [50000, 100000], todo_costo: [100000, 200000] },
        { nombre: 'Reparación de Tablero Eléctrico', mano_obra: [250000, 350000], todo_costo: [400000, 700000] },
        { nombre: 'Instalación de Toma de Tierra', mano_obra: [100000, 200000], todo_costo: [200000, 400000] },
        { nombre: 'Instalación de UPS/Respaldo', mano_obra: [150000, 250000], todo_costo: [300000, 500000] },
        { nombre: 'Instalación de Iluminación LED (por punto)', mano_obra: [30000, 60000], todo_costo: [70000, 120000] },
        { nombre: 'Instalación de Sensor de Movimiento', mano_obra: [50000, 100000], todo_costo: [100000, 200000] },
        { nombre: 'Instalación de Automatización Domótica', mano_obra: [500000, 1000000], todo_costo: [1500000, 3000000] }
    ],
    pintura: [
        { nombre: 'Pintura de Interior (m²)', mano_obra: [6000, 9000], todo_costo: [9000, 14000] },
        { nombre: 'Pintura de Exterior (m²)', mano_obra: [8000, 11000], todo_costo: [12000, 18000] },
        { nombre: 'Pintura de Fachada (m²)', mano_obra: [8000, 12000], todo_costo: [13000, 20000] },
        { nombre: 'Pintura de Muebles (unidad)', mano_obra: [50000, 100000], todo_costo: [100000, 200000] },
        { nombre: 'Pintura de Paredes (m²)', mano_obra: [6000, 9000], todo_costo: [9000, 14000] },
        { nombre: 'Pintura de Techos (m²)', mano_obra: [7000, 10000], todo_costo: [10000, 16000] },
        { nombre: 'Pintura de Piscina (m²)', mano_obra: [10000, 15000], todo_costo: [15000, 25000] },
        { nombre: 'Pintura de Garaje (m²)', mano_obra: [8000, 12000], todo_costo: [12000, 18000] },
        { nombre: 'Pintura de Escaleras (m²)', mano_obra: [9000, 13000], todo_costo: [13000, 20000] },
        { nombre: 'Pintura de Rejas (metro lineal)', mano_obra: [10000, 15000], todo_costo: [15000, 25000] },
        { nombre: 'Pintura de Puertas (unidad)', mano_obra: [30000, 60000], todo_costo: [60000, 100000] },
        { nombre: 'Pintura de Ventanas (unidad)', mano_obra: [20000, 40000], todo_costo: [40000, 80000] },
        { nombre: 'Pintura de Muros (m²)', mano_obra: [6000, 9000], todo_costo: [9000, 14000] },
        { nombre: 'Pintura de Estructuras Metálicas (m²)', mano_obra: [10000, 15000], todo_costo: [15000, 25000] },
        { nombre: 'Pintura de Pisos (m²)', mano_obra: [8000, 12000], todo_costo: [12000, 18000] },
        { nombre: 'Aplicación de Estuco (m²)', mano_obra: [5000, 8000], todo_costo: [8000, 12000] },
        { nombre: 'Aplicación de Sellador (m²)', mano_obra: [3000, 5000], todo_costo: [5000, 8000] }
    ],
    plomeria: [
        { nombre: 'Red completa hidrosanitaria Baño', mano_obra: [600000, 800000], todo_costo: [1200000, 1500000] },
        { nombre: 'Red completa hidrosanitaria Cocina', mano_obra: [350000, 500000], todo_costo: [800000, 1100000] },
        { nombre: 'Red completa hidrosanitaria Lavadero', mano_obra: [300000, 450000], todo_costo: [700000, 950000] },
        { nombre: 'Reparación de Fuga', mano_obra: [60000, 150000], todo_costo: [100000, 250000] },
        { nombre: 'Instalación de Grifo', mano_obra: [40000, 100000], todo_costo: [90000, 250000] },
        { nombre: 'Instalación de Ducha', mano_obra: [50000, 120000], todo_costo: [100000, 300000] },
        { nombre: 'Reparación de Tubería', mano_obra: [60000, 150000], todo_costo: [100000, 250000] },
        { nombre: 'Instalación de Inodoro', mano_obra: [80000, 150000], todo_costo: [150000, 300000] },
        { nombre: 'Limpieza de Desagüe', mano_obra: [50000, 100000], todo_costo: [100000, 200000] },
        { nombre: 'Instalación de Calentador', mano_obra: [150000, 250000], todo_costo: [300000, 500000] },
        { nombre: 'Instalación de Filtro de Agua', mano_obra: [80000, 150000], todo_costo: [150000, 300000] },
        { nombre: 'Instalación de Sistema de Riego', mano_obra: [200000, 400000], todo_costo: [400000, 800000] },
        { nombre: 'Reparación de Bomba de Agua', mano_obra: [100000, 200000], todo_costo: [200000, 400000] },
        { nombre: 'Instalación de Tanque de Agua', mano_obra: [200000, 300000], todo_costo: [350000, 600000] },
        { nombre: 'Reparación de Tubería Principal', mano_obra: [150000, 300000], todo_costo: [300000, 600000] },
        { nombre: 'Instalación de Sistema de Agua Caliente', mano_obra: [300000, 500000], todo_costo: [600000, 1000000] },
        { nombre: 'Instalación de Sistema de Agua Fría', mano_obra: [300000, 500000], todo_costo: [600000, 1000000] },
        { nombre: 'Reparación de Válvulas', mano_obra: [50000, 100000], todo_costo: [100000, 200000] },
        // Servicios de Destape (2025 – Colombia)
        { nombre: 'Desobstrucción Lavamanos / Lavaplatos / Lavadero simple (Destape manual o con sonda manual)', mano_obra: [80000, 100000], todo_costo: [100000, 130000] },
        { nombre: 'Desobstrucción Sanitario / Inodoro (Incluye desarme parcial y prueba hidráulica)', mano_obra: [100000, 130000], todo_costo: [120000, 160000] },
        { nombre: 'Desobstrucción Ducha / sifón de piso (Incluye revisión y sonda)', mano_obra: [100000, 140000], todo_costo: [130000, 170000] },
        { nombre: 'Desobstrucción Tubería de 2" – 4" (tramo corto, con sonda eléctrica o presión hidráulica)', mano_obra: [150000, 200000], todo_costo: [200000, 280000] },
        { nombre: 'Desobstrucción Tubería de 4" – 6" (red general, con equipo eléctrico o hidrojet)', mano_obra: [250000, 400000], todo_costo: [350000, 500000] },
        { nombre: 'Destape con cámara + diagnóstico (Incluye inspección con cámara)', mano_obra: null, todo_costo: [400000, 600000] }
    ],
    carpinteria: [
        { nombre: 'Fabricación de Muebles (m²)', mano_obra: [250000, 400000], todo_costo: [400000, 700000] },
        { nombre: 'Reparación de Muebles (unidad)', mano_obra: [80000, 150000], todo_costo: [150000, 300000] },
        { nombre: 'Instalación de Puertas (unidad)', mano_obra: [100000, 180000], todo_costo: [250000, 500000] },
        { nombre: 'Instalación de Ventanas (unidad)', mano_obra: [120000, 200000], todo_costo: [300000, 600000] },
        { nombre: 'Reparación de Gabinetes (unidad)', mano_obra: [80000, 150000], todo_costo: [200000, 350000] },
        { nombre: 'Instalación de Estantes (unidad)', mano_obra: [70000, 130000], todo_costo: [180000, 300000] },
        { nombre: 'Fabricación de Clósets (m²)', mano_obra: [250000, 400000], todo_costo: [450000, 750000] },
        { nombre: 'Fabricación de Cocina Integral (m²)', mano_obra: [400000, 600000], todo_costo: [800000, 1200000] },
        { nombre: 'Instalación de Molduras (metro lineal)', mano_obra: [10000, 20000], todo_costo: [20000, 40000] },
        { nombre: 'Fabricación de Escaleras (unidad)', mano_obra: [900000, 1500000], todo_costo: [1800000, 3000000] },
        { nombre: 'Fabricación de Pérgolas (m²)', mano_obra: [350000, 600000], todo_costo: [700000, 1200000] },
        { nombre: 'Fabricación de Deck en madera (m²)', mano_obra: [300000, 500000], todo_costo: [600000, 1000000] },
        { nombre: 'Muebles de Jardín (juego)', mano_obra: [500000, 900000], todo_costo: [1200000, 2000000] },
        { nombre: 'Muebles de Oficina (unidad)', mano_obra: [400000, 700000], todo_costo: [800000, 1500000] },
        { nombre: 'Muebles de Terraza (unidad)', mano_obra: [350000, 600000], todo_costo: [700000, 1300000] },
        { nombre: 'Instalación de Pisos Laminados (m²)', mano_obra: [25000, 45000], todo_costo: [70000, 120000] },
        { nombre: 'Instalación de Puertas Corredizas', mano_obra: [120000, 200000], todo_costo: [300000, 500000] },
        { nombre: 'Fabricación de Marcos Decorativos', mano_obra: [80000, 150000], todo_costo: [180000, 300000] },
        { nombre: 'Restauración de Madera Antigua', mano_obra: [200000, 400000], todo_costo: [400000, 700000] }
    ],
    ventaneria: [
        { nombre: 'Instalación de Ventanas', mano_obra: [100000, 200000], todo_costo: [200000, 400000] },
        { nombre: 'Reparación de Ventanas', mano_obra: [80000, 160000], todo_costo: [150000, 300000] },
        { nombre: 'Instalación de Persianas', mano_obra: [100000, 200000], todo_costo: [200000, 400000] },
        { nombre: 'Instalación de Cortinas', mano_obra: [80000, 160000], todo_costo: [150000, 300000] },
        { nombre: 'Reparación de Cerraduras', mano_obra: [50000, 100000], todo_costo: [100000, 200000] },
        { nombre: 'Instalación de Mosquiteros', mano_obra: [80000, 160000], todo_costo: [150000, 300000] },
        { nombre: 'Instalación de Vidrios Templados', mano_obra: [200000, 400000], todo_costo: [400000, 800000] },
        { nombre: 'Instalación de Ventanas de Seguridad', mano_obra: [200000, 400000], todo_costo: [400000, 800000] },
        { nombre: 'Instalación de Ventanas de Aluminio', mano_obra: [150000, 300000], todo_costo: [300000, 600000] },
        { nombre: 'Instalación de Ventanas de PVC', mano_obra: [150000, 300000], todo_costo: [300000, 600000] },
        { nombre: 'Instalación de Ventanas de Madera', mano_obra: [150000, 300000], todo_costo: [300000, 600000] },
        { nombre: 'Instalación de Ventanas de Vidrio Espejo', mano_obra: [200000, 400000], todo_costo: [400000, 800000] },
        { nombre: 'Instalación de Ventanas de Doble Panel', mano_obra: [200000, 400000], todo_costo: [400000, 800000] },
        { nombre: 'Instalación de Ventanas de Control Solar', mano_obra: [200000, 400000], todo_costo: [400000, 800000] }
    ],
    limpieza: [
        { nombre: 'Limpieza de Casa', base: [46148, 69222], nocturno: [62300, 93444], festivo: [92296, 138444] },
        { nombre: 'Limpieza de Oficina', base: [46148, 69222], nocturno: [62300, 93444], festivo: [92296, 138444] },
        { nombre: 'Limpieza de Local Comercial', base: [57685, 80759], nocturno: [77885, 108947], festivo: [115370, 161037] },
        { nombre: 'Limpieza Post-Obra', base: [69222, 92296], nocturno: [93444, 124451], festivo: [138444, 184592] },
        { nombre: 'Limpieza de Alfombras', base: [23074, 46148], nocturno: [31150, 62300], festivo: [46148, 92296] },
        { nombre: 'Limpieza de Ventanas', base: [23074, 34611], nocturno: [31150, 46848], festivo: [46148, 69222] },
        { nombre: 'Limpieza de Piscina', base: [34611, 57685], nocturno: [46848, 77885], festivo: [69222, 115370] },
        { nombre: 'Limpieza de Fachada', base: [57685, 80759], nocturno: [77885, 108947], festivo: [115370, 161037] },
        { nombre: 'Limpieza de Techo', base: [46148, 69222], nocturno: [62300, 93444], festivo: [92296, 138444] },
        { nombre: 'Limpieza de Garaje', base: [34611, 57685], nocturno: [46848, 77885], festivo: [69222, 115370] },
        { nombre: 'Limpieza de Jardín', base: [34611, 57685], nocturno: [46848, 77885], festivo: [69222, 115370] },
        { nombre: 'Limpieza de Tanques de Agua', base: [46148, 69222], nocturno: [62300, 93444], festivo: [92296, 138444] },
        { nombre: 'Limpieza de Conductos de Aire', base: [57685, 80759], nocturno: [77885, 108947], festivo: [115370, 161037] },
        { nombre: 'Limpieza de Muebles', base: [23074, 46148], nocturno: [31150, 62300], festivo: [46148, 92296] },
        { nombre: 'Limpieza Profunda de Cocina', base: [46148, 69222], nocturno: [62300, 93444], festivo: [92296, 138444] }
    ],
    acabados: [
        // Pisos y Revestimientos
        { nombre: 'Enchape de cerámica en pisos (m²)', mano_obra: [17000, 18500], todo_costo: [60000, 90000] },
        { nombre: 'Enchape de porcelanato en pisos (m²)', mano_obra: [20000, 25000], todo_costo: [80000, 120000] },
        { nombre: 'Piso en madera laminada (m²)', mano_obra: [25000, 30000], todo_costo: [100000, 150000] },
        { nombre: 'Piso en granito lavado (m²)', mano_obra: [18000, 22000], todo_costo: [70000, 100000] },
        { nombre: 'Piso en concreto pulido (m²)', mano_obra: [15000, 20000], todo_costo: [50000, 80000] },
        // Guardaescobas (Zócalos)
        { nombre: 'Guardaescoba en cerámica (metro lineal)', mano_obra: [10000, 10000], todo_costo: [22000, 22000] },
        { nombre: 'Guardaescoba en porcelanato (metro lineal)', mano_obra: [12000, 12000], todo_costo: [30000, 30000] },
        { nombre: 'Guardaescoba en PVC blanco (metro lineal)', mano_obra: [9000, 9000], todo_costo: [20000, 20000] },
        { nombre: 'Guardaescoba en madera MDF (metro lineal)', mano_obra: [13000, 13000], todo_costo: [32000, 32000] },
        { nombre: 'Guardaescoba en aluminio (metro lineal)', mano_obra: [15000, 15000], todo_costo: null },
        // Esquineros de Protección (Filos)
        { nombre: 'Esquinero PVC blanco (interior) (metro lineal)', mano_obra: [6000, 6000], todo_costo: [18000, 18000] },
        { nombre: 'Esquinero en aluminio anodizado (metro lineal)', mano_obra: [8000, 8000], todo_costo: [28000, 28000] },
        { nombre: 'Esquinero en acero inoxidable (metro lineal)', mano_obra: [12000, 12000], todo_costo: [45000, 45000] },
        { nombre: 'Esquinero metálico con pintura epóxica (metro lineal)', mano_obra: [10000, 10000], todo_costo: [35000, 35000] },
        { nombre: 'Esquinero en caucho (hospitalario) (metro lineal)', mano_obra: [14000, 14000], todo_costo: [48000, 48000] },
        // Revoques/Pañetes – Clasificación por Tipo de Mezcla (por m²)
        { nombre: 'Revoque tradicional sin impermeabilizante (Cemento + arena) (m²)', mano_obra: [12000, 12000], todo_costo: [28000, 28000] },
        { nombre: 'Revoque fino sin impermeabilizante (Cemento + arena + cal) (m²)', mano_obra: [16000, 16000], todo_costo: [42000, 42000] },
        { nombre: 'Revoque con impermeabilizante (mortero modificado) (Cemento + arena + aditivo) (m²)', mano_obra: [18000, 18000], todo_costo: [48000, 48000] },
        { nombre: 'Revoque con impermeabilizante + pegante (Cemento + pegante + aditivo) (m²)', mano_obra: [20000, 20000], todo_costo: [55000, 55000] },
        // Muros y Paredes
        { nombre: 'Estuco y pintura (m²)', mano_obra: [12500, 15000], todo_costo: [40000, 70000] },
        { nombre: 'Enchape de cerámica en muros (m²)', mano_obra: [18500, 22000], todo_costo: [60000, 90000] },
        { nombre: 'Revestimiento en piedra natural (m²)', mano_obra: [30000, 35000], todo_costo: [100000, 150000] },
        { nombre: 'Muros en drywall con acabado estándar (m²)', mano_obra: [35000, 40000], todo_costo: [80000, 120000] },
        // Cielorrasos y Cubiertas
        { nombre: 'Cielo raso en PVC (m²)', mano_obra: [19500, 22000], todo_costo: [50000, 80000] },
        { nombre: 'Cielo raso en drywall (m²)', mano_obra: [25000, 30000], todo_costo: [70000, 100000] },
        { nombre: 'Cubierta en eternit (m²)', mano_obra: [28500, 32000], todo_costo: [80000, 110000] },
        { nombre: 'Cubierta metálica (m²)', mano_obra: [25000, 30000], todo_costo: [70000, 100000] }
    ],
    mano_obra_oficios: [
        // Electricista
        { nombre: 'Electricista - Aprendiz / Auxiliar (día)', rango: [60000, 75000] },
        { nombre: 'Electricista - Medio / Intermedio (día)', rango: [80000, 95000] },
        { nombre: 'Electricista - Avanzado / Oficial (día)', rango: [100000, 120000] },
        // Plomero
        { nombre: 'Plomero - Aprendiz / Auxiliar (día)', rango: [60000, 70000] },
        { nombre: 'Plomero - Medio / Intermedio (día)', rango: [80000, 90000] },
        { nombre: 'Plomero - Avanzado / Oficial (día)', rango: [95000, 110000] },
        // Pintor
        { nombre: 'Pintor - Aprendiz / Auxiliar (día)', rango: [55000, 70000] },
        { nombre: 'Pintor - Medio / Intermedio (día)', rango: [75000, 90000] },
        { nombre: 'Pintor - Avanzado / Oficial (día)', rango: [90000, 110000] },
        // Oficial de Obra
        { nombre: 'Oficial de Obra - Aprendiz / Auxiliar (día)', rango: [60000, 70000] },
        { nombre: 'Oficial de Obra - Medio / Intermedio (día)', rango: [80000, 90000] },
        { nombre: 'Oficial de Obra - Avanzado / Oficial (día)', rango: [95000, 115000] },
        // Oficial General
        { nombre: 'Oficial General - Aprendiz / Auxiliar (día)', rango: [60000, 75000] },
        { nombre: 'Oficial General - Medio / Intermedio (día)', rango: [85000, 95000] },
        { nombre: 'Oficial General - Avanzado / Oficial (día)', rango: [100000, 120000] },
        { nombre: 'Oficial General - Oficial General (día)', rango: [110000, 130000] },
        // Mampostero
        { nombre: 'Mampostero - Aprendiz / Auxiliar (día)', rango: [60000, 70000] },
        { nombre: 'Mampostero - Medio / Intermedio (día)', rango: [80000, 95000] },
        { nombre: 'Mampostero - Avanzado / Oficial (día)', rango: [100000, 115000] },
        { nombre: 'Mampostero - Oficial General (día)', rango: [115000, 130000] },
        { nombre: 'Mampostero - Maestro de Obra (día)', rango: [150000, 180000] },
        // Estructurero (Armador)
        { nombre: 'Estructurero (Armador) - Aprendiz / Auxiliar (día)', rango: [65000, 75000] },
        { nombre: 'Estructurero (Armador) - Medio / Intermedio (día)', rango: [90000, 100000] },
        { nombre: 'Estructurero (Armador) - Avanzado / Oficial (día)', rango: [110000, 125000] },
        { nombre: 'Estructurero (Armador) - Oficial General (día)', rango: [120000, 135000] },
        { nombre: 'Estructurero (Armador) - Maestro de Obra (día)', rango: [160000, 200000] }
    ]
};

// Elementos del DOM
const categorySelect = document.getElementById('category');
const serviceSelect = document.getElementById('service');
const cantidadInput = document.getElementById('cantidad');
const resultadoDiv = document.getElementById('resultado');
const form = document.getElementById('calc-form');
const tipoPrecioSelect = document.getElementById('tipo-precio');

// Mostrar selector de tipo de tarifa para limpieza
const tipoTarifaLimpieza = document.createElement('select');
tipoTarifaLimpieza.id = 'tipo-tarifa-limpieza';
tipoTarifaLimpieza.innerHTML = `
    <option value="base">Valor Base (+Prest)</option>
    <option value="nocturno">Nocturno (+35%)</option>
    <option value="festivo">Festivo (+100%)</option>
`;
const labelTarifaLimpieza = document.createElement('label');
labelTarifaLimpieza.setAttribute('for', 'tipo-tarifa-limpieza');
labelTarifaLimpieza.textContent = 'Tipo de tarifa:';

categorySelect.addEventListener('change', function () {
    const categoria = this.value;
    serviceSelect.innerHTML = '<option value="">Seleccione un servicio</option>';
    if (servicios[categoria]) {
        servicios[categoria].forEach((serv, idx) => {
            const option = document.createElement('option');
            option.value = idx;
            option.textContent = serv.nombre;
            serviceSelect.appendChild(option);
        });
    }
    // Mostrar selector de tarifa solo para limpieza
    if (categoria === 'limpieza') {
        if (!document.getElementById('tipo-tarifa-limpieza')) {
            form.insertBefore(labelTarifaLimpieza, cantidadInput);
            form.insertBefore(tipoTarifaLimpieza, cantidadInput);
        }
    } else {
        if (document.getElementById('tipo-tarifa-limpieza')) {
            form.removeChild(labelTarifaLimpieza);
            form.removeChild(tipoTarifaLimpieza);
        }
    }
    // Ocultar tipo-precio en mano_obra_oficios
    if (categoria === 'mano_obra_oficios') {
        tipoPrecioSelect.style.display = 'none';
    } else {
        tipoPrecioSelect.style.display = '';
    }
});

// Carrito de servicios
let carrito = [];

// Referencia al botón de vaciar carrito
const btnVaciarCarrito = document.getElementById('vaciar-carrito');

// Crear modal de confirmación si no existe
let modalConfirm = document.getElementById('modal-confirm-vaciar');
if (!modalConfirm) {
    modalConfirm = document.createElement('div');
    modalConfirm.id = 'modal-confirm-vaciar';
    modalConfirm.innerHTML = `
        <div class="modal-bg"></div>
        <div class="modal-content">
            <div class="modal-title">¿Limpiar cotización?</div>
            <div class="modal-msg">¿Estás seguro de que deseas limpiar la cotización? Esta acción no se puede deshacer.</div>
            <div class="modal-actions">
                <button id="btn-confirm-vaciar" class="btn-modal btn-danger">Sí, limpiar</button>
                <button id="btn-cancel-vaciar" class="btn-modal btn-cancelar">Cancelar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modalConfirm);
    modalConfirm.style.display = 'none';
}

// Crear toast de notificación si no existe
let toastNotif = document.getElementById('toast-notif');
if (!toastNotif) {
    toastNotif = document.createElement('div');
    toastNotif.id = 'toast-notif';
    toastNotif.style.display = 'none';
    document.body.appendChild(toastNotif);
}
function mostrarToast(mensaje) {
    toastNotif.innerHTML = `<span class=\"toast-icon\" style=\"margin-right:10px; font-size:2em; vertical-align:middle; color:var(--color-acento);\">💰</span><span>${mensaje}</span>`;
    toastNotif.style.display = 'block';
    toastNotif.className = 'show-toast';
    setTimeout(() => {
        toastNotif.className = '';
        toastNotif.style.display = 'none';
    }, 2000);
}

function renderCarrito() {
    if (carrito.length === 0) {
        resultadoDiv.innerHTML = '<span style="color:#888;">No hay servicios agregados.</span>';
        btnVaciarCarrito.style.display = 'none';
        return;
    }
    let totalMin = 0, totalMax = 0;
    let bloques = '';
    for (let idx = carrito.length - 1; idx >= 0; idx--) {
        const item = carrito[idx];
        totalMin += item.totalMin;
        totalMax += item.totalMax;
        bloques += `
        <div class="carrito-bloque" style="background:${(carrito.length - 1 - idx) % 2 === 0 ? '#fff' : '#f7f7fa'}; border-radius:12px; box-shadow:0 1px 4px rgba(0,0,0,0.03); margin-bottom:18px; padding:16px 12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span style="font-weight:600; color:var(--color-primario); font-size:1.08em;">${item.servicio}</span>
                <button onclick="eliminarDelCarrito(${idx})" style="background:#dc3545; color:#fff; border:none; border-radius:5px; padding:4px 10px; cursor:pointer; font-size:0.95em;">X</button>
            </div>
            <div style="margin-bottom:4px;"><strong>Cantidad:</strong> <span style="color:var(--color-titulo);">${item.cantidad}</span></div>
            <div><strong>Precio estimado:</strong> <span style="color:var(--color-titulo); font-weight:600;">$${item.totalMin.toLocaleString()} – $${item.totalMax.toLocaleString()} COP</span></div>
        </div>`;
    }
    bloques += `<div class="total-carrito">Total: $${totalMin.toLocaleString()} – $${totalMax.toLocaleString()} COP</div>`;
    resultadoDiv.innerHTML = bloques;
    btnVaciarCarrito.style.display = 'block';
}

// Eliminar servicio del carrito
window.eliminarDelCarrito = function (idx) {
    // Mostrar modal de confirmación para eliminar un solo servicio
    const modalTitle = modalConfirm.querySelector('.modal-title');
    const modalMsg = modalConfirm.querySelector('.modal-msg');
    const btnConfirm = document.getElementById('btn-confirm-vaciar');
    const btnCancel = document.getElementById('btn-cancel-vaciar');
    modalTitle.textContent = '¿Eliminar este servicio?';
    modalMsg.textContent = '¿Estás seguro de que deseas eliminar este servicio del carrito? Esta acción no se puede deshacer.';
    btnConfirm.innerText = 'Sí';
    btnCancel.innerText = 'No';
    modalConfirm.style.display = 'flex';

    // Remover listeners previos
    btnConfirm.onclick = null;
    btnCancel.onclick = null;

    btnCancel.onclick = function () {
        modalConfirm.style.display = 'none';
        // Restaurar mensaje y botones para limpiar cotización
        modalTitle.textContent = '¿Limpiar cotización?';
        modalMsg.textContent = '¿Estás seguro de que deseas limpiar la cotización? Esta acción no se puede deshacer.';
        btnConfirm.innerText = 'Sí, limpiar';
        btnCancel.innerText = 'Cancelar';
    };
    btnConfirm.onclick = function () {
        carrito.splice(idx, 1);
        renderCarrito();
        modalConfirm.style.display = 'none';
        // Restaurar mensaje y botones para limpiar cotización
        modalTitle.textContent = '¿Limpiar cotización?';
        modalMsg.textContent = '¿Estás seguro de que deseas limpiar la cotización? Esta acción no se puede deshacer.';
        btnConfirm.innerText = 'Sí, limpiar';
        btnCancel.innerText = 'Cancelar';
    };
};

btnVaciarCarrito.addEventListener('click', function () {
    // Modal para limpiar cotización
    const modalTitle = modalConfirm.querySelector('.modal-title');
    const modalMsg = modalConfirm.querySelector('.modal-msg');
    const btnConfirm = document.getElementById('btn-confirm-vaciar');
    const btnCancel = document.getElementById('btn-cancel-vaciar');
    modalTitle.textContent = '¿Limpiar cotización?';
    modalMsg.textContent = '¿Estás seguro de que deseas limpiar la cotización? Esta acción no se puede deshacer.';
    btnConfirm.innerText = 'Sí, limpiar';
    btnCancel.innerText = 'Cancelar';
    modalConfirm.style.display = 'flex';

    // Remover listeners previos
    btnConfirm.onclick = null;
    btnCancel.onclick = null;

    btnCancel.onclick = function () {
        modalConfirm.style.display = 'none';
    };
    btnConfirm.onclick = function () {
        carrito = [];
        renderCarrito();
        modalConfirm.style.display = 'none';
    };
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const categoria = categorySelect.value;
    const servicioIdx = serviceSelect.value;
    const cantidad = parseFloat(cantidadInput.value);
    let totalMin, totalMax, tipoMostrado, servicioNombre;
    if (categoria === 'limpieza') {
        const tipoTarifa = tipoTarifaLimpieza.value;
        if (!categoria || servicioIdx === '' || isNaN(cantidad) || cantidad < 1) {
            resultadoDiv.textContent = 'Por favor, complete todos los campos correctamente.';
            return;
        }
        const servicio = servicios[categoria][servicioIdx];
        const rango = servicio[tipoTarifa];
        totalMin = rango[0] * cantidad;
        totalMax = rango[1] * cantidad;
        tipoMostrado = tipoTarifa.charAt(0).toUpperCase() + tipoTarifa.slice(1);
        servicioNombre = `${servicio.nombre} (${tipoMostrado})`;
        carrito.push({
            servicio: servicioNombre,
            cantidad,
            totalMin,
            totalMax
        });
        renderCarrito();
        mostrarToast('¡Precio calculado!');
        return;
    }
    if (categoria === 'mano_obra_oficios') {
        if (!categoria || servicioIdx === '' || isNaN(cantidad) || cantidad < 1) {
            resultadoDiv.textContent = 'Por favor, complete todos los campos correctamente.';
            return;
        }
        const servicio = servicios[categoria][servicioIdx];
        const rango = servicio.rango;
        totalMin = rango[0] * cantidad;
        totalMax = rango[1] * cantidad;
        tipoMostrado = 'Tarifa por día';
        servicioNombre = `${servicio.nombre}`;
        carrito.push({
            servicio: servicioNombre,
            cantidad,
            totalMin,
            totalMax
        });
        renderCarrito();
        mostrarToast('¡Precio calculado!');
        return;
    }
    const tipoPrecio = tipoPrecioSelect.value;
    if (!categoria || servicioIdx === '' || isNaN(cantidad) || cantidad < 1) {
        resultadoDiv.textContent = 'Por favor, complete todos los campos correctamente.';
        return;
    }
    const servicio = servicios[categoria][servicioIdx];
    const rango = servicio[tipoPrecio];
    totalMin = rango[0] * cantidad;
    totalMax = rango[1] * cantidad;
    tipoMostrado = tipoPrecio === 'mano_obra' ? 'Mano de Obra' : 'Todo Costo';
    servicioNombre = `${servicio.nombre} (${tipoMostrado})`;
    carrito.push({
        servicio: servicioNombre,
        cantidad,
        totalMin,
        totalMax
    });
    renderCarrito();
    mostrarToast('¡Precio calculado!');
});

// Render inicial
renderCarrito();

// Botón para descargar PDF
const btnDescargarPDF = document.getElementById('descargar-pdf');
if (btnDescargarPDF) {
    btnDescargarPDF.addEventListener('click', function () {
        if (carrito.length === 0) {
            alert('No hay servicios en el carrito para descargar.');
            return;
        }
        // Usar jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let y = 20;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.text('Cotización de Servicios', 105, y, { align: 'center' });
        y += 12;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Fecha: ' + new Date().toLocaleDateString(), 14, y);
        y += 10;
        doc.setLineWidth(0.5);
        doc.line(14, y, 196, y);
        y += 8;
        carrito.forEach((item, idx) => {
            if (y > 270) { doc.addPage(); y = 20; }
            doc.setFont('helvetica', 'bold');
            doc.text(`${idx + 1}. ${item.servicio}`, 14, y);
            y += 7;
            doc.setFont('helvetica', 'normal');
            doc.text(`Cantidad: ${item.cantidad}`, 18, y);
            y += 6;
            doc.text(`Precio estimado: $${item.totalMin.toLocaleString()} – $${item.totalMax.toLocaleString()} COP`, 18, y);
            y += 10;
        });
        doc.setLineWidth(0.5);
        doc.line(14, y, 196, y);
        y += 8;
        let totalMin = carrito.reduce((acc, item) => acc + item.totalMin, 0);
        let totalMax = carrito.reduce((acc, item) => acc + item.totalMax, 0);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text(`Total: $${totalMin.toLocaleString()} – $${totalMax.toLocaleString()} COP`, 14, y);
        doc.save('cotizacion.pdf');
    });
}

// --- SLIDER DE REMODELACIÓN COMPLETA ---
(function() {
  const slider = document.querySelector('.remodelacion-tarjetas-slider');
  if (!slider) return;
  const cards = slider.querySelectorAll('.remodelacion-tarjeta');
  let current = 0;

  function getCardWidthWithGap() {
    if (!cards[0]) return 0;
    const style = window.getComputedStyle(cards[0]);
    const width = cards[0].offsetWidth;
    const gap = parseInt(style.marginRight || 0) || parseInt(style.gap || 0) || 0;
    // gap puede venir de flexbox gap
    const parentStyle = window.getComputedStyle(slider);
    const flexGap = parseInt(parentStyle.gap || 0);
    return width + (flexGap || gap);
  }

  function updateSlider() {
    const cardWidthWithGap = getCardWidthWithGap();
    slider.style.transform = `translateX(-${current * cardWidthWithGap}px)`;
  }

  document.getElementById('slider-prev').onclick = function() {
    current = (current - 1 + cards.length) % cards.length;
    updateSlider();
  };
  document.getElementById('slider-next').onclick = function() {
    current = (current + 1) % cards.length;
    updateSlider();
  };

  // Opcional: swipe en móvil
  let startX = null;
  slider.parentElement.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  slider.parentElement.addEventListener('touchend', function(e) {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {
      current = (current - 1 + cards.length) % cards.length;
      updateSlider();
    } else if (startX - endX > 50) {
      current = (current + 1) % cards.length;
      updateSlider();
    }
    startX = null;
  });

  // Recalcular al redimensionar
  window.addEventListener('resize', updateSlider);

  // Inicial
  updateSlider();
})();
