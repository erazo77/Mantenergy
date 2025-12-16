const chat = document.getElementById('chat-container');
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-button');

/* ================= MENSAJE INICIAL ================= */
window.onload = () => {
    setTimeout(() => {
        botMessage(
            `¡Bienvenido a MANTENERGY ⚡!

Somos especialistas en mantenimiento e instalaciones eléctricas seguras y eficientes.

🔧 Servicios:
• Mantenimiento eléctrico
• Instalaciones residenciales e industriales
• Diagnóstico de fallas
• Tableros, breakers y puesta a tierra
• Iluminación LED

¿En qué podemos ayudarte hoy?`
        );
    }, 600);
};

/* ================= RESPUESTAS AUTOMÁTICAS ================= */
const responses = [
    {
        keywords: ['hola', 'buenas', 'saludos'],
        reply: '¡Hola! 👋 Gracias por contactar a Mantenergy. ¿Buscas mantenimiento, instalación o una cotización eléctrica?'
    },
    {
        keywords: ['servicio', 'servicios'],
        reply: `Ofrecemos:
⚡ Mantenimiento eléctrico
⚡ Instalaciones eléctricas
⚡ Diagnóstico de fallas
⚡ Iluminación LED
⚡ Proyectos residenciales e industriales

¿Cuál te interesa?`
    },
    {
        keywords: ['precio', 'costo', 'valor', 'cotizacion', 'cotización'],
        reply: 'Para cotizar necesito saber: tipo de servicio, ubicación y si es residencial o industrial. ¿Me cuentas un poco más?'
    },
    {
        keywords: ['mantenimiento'],
        reply: 'Nuestro mantenimiento eléctrico previene fallas y mejora la seguridad. ¿Es para vivienda, comercio o industria?'
    },
    {
        keywords: ['instalacion', 'instalación'],
        reply: 'Realizamos instalaciones eléctricas completas y ampliaciones. ¿Es obra nueva o mejora de una existente?'
    },
    {
        keywords: ['visita', 'agenda'],
        reply: 'Perfecto 👍 ¿En qué ciudad o zona se encuentra el proyecto para coordinar la visita técnica?'
    },
    {
        keywords: ['gracias'],
        reply: '¡Con gusto! 😊 Si necesitas algo más, aquí estaré para ayudarte.'
    },
    {
        keywords: ['adios', 'chao', 'hasta'],
        reply: '¡Gracias por escribirnos! ⚡ Mantenergy siempre a tu servicio.'
    }
];

/* ================= ENVÍO DE MENSAJES ================= */
sendBtn.onclick = sendMessage;
input.addEventListener('keypress', e => e.key === 'Enter' && sendMessage());

function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;

    userMessage(msg);
    input.value = '';
    typing(true);

    setTimeout(() => {
        typing(false);
        botMessage(getResponse(msg));
    }, 900);
}

/* ================= MOTOR DE RESPUESTA ================= */
function getResponse(text) {
    text = text.toLowerCase();
    for (let item of responses) {
        if (item.keywords.some(k => text.includes(k))) {
            return item.reply;
        }
    }
    return 'Entiendo 👍 ¿Podrías indicarme qué tipo de servicio eléctrico necesitas?';
}

/* ================= UI ================= */
function userMessage(msg) {
    addMessage('user-message', msg);
}

function botMessage(msg) {
    addMessage('bot-message', msg);
}

function addMessage(type, text) {
    const div = document.createElement('div');
    div.className = type;
    div.innerHTML = `<span>${text}</span><small>${time()}</small>`;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function typing(show) {
    let t = document.getElementById('typing');
    if (show) {
        t = document.createElement('div');
        t.id = 'typing';
        t.className = 'bot-message';
        t.textContent = 'Escribiendo...';
        chat.appendChild(t);
    } else if (t) t.remove();
}

const time = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
