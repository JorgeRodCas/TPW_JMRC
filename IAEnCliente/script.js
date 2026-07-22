const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const output = document.getElementById('output');

//const API_KEY = "AQ.Ab8RN6JMuyYdMhOtBHMzJi6EaGyCkcByGJiFltBr0ZLs9g8BNA";

const API_KEY = "AQ.Ab8RN6JUM5Y3dpf7vxuHSM2AH6UTHmt_6J3KuUxDmsGN43UJLw";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

sendBtn.addEventListener('click', () => {
    const pregunta = userInput.value.trim();
    if (pregunta !== "") {
        llamarIA(pregunta);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !sendBtn.disabled) {
        sendBtn.click();
    }
});

async function llamarIA(textoUsuario) {
    // Feedback visual: Deshabilitar botón y mostrar que está pensando
    sendBtn.disabled = true;
    output.innerHTML = '<span class="placeholder">Pensando... 🤔</span>';

    // Configurar la petición que Gemini espera (Formato JSON)
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: textoUsuario }]
            }]
        })
    };
    try {
        // Realizar la llamada HTTP
        const respuesta = await fetch(API_URL, opciones);
        const datos = await respuesta.json();

        // Extraer el texto de la estructura de datos que devuelve Google
        const respuestaIA = datos.candidates[0].content.parts[0].text;

        // Mostrar el resultado en pantalla de forma limpia
        output.innerHTML = marked.parse(respuestaIA);

    } catch (error) {
        console.error(error);
        output.innerHTML = '<span style="color: #ef4444;">Ocurrió un error al conectar con la IA.</span>';
    } finally {
        // Reactivar la interfaz
        sendBtn.disabled = false;
        userInput.value = ""; // Limpiar el input
    }
}
