const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");

// Liste de réponses prédéfinies pour le bot
const botResponses = [
    "Salut ! Comment puis-je t'aider ?",
    "Je suis là pour discuter !",
    "Dis-m'en plus !",
    "Intéressant ! Que veux-tu dire par là ?",
    "Je ne suis pas sûr de comprendre...",
    "Peux-tu préciser ?",
    "Ravi de parler avec toi !",
    "Ah, je vois !",
    "Quoi de neuf ?",
    "J'aime bien discuter !"
];

// Liste de mots à détecter (gros mots)
const bannedWords = ["enculé", "con", "abruti", "andouille", "connard", "salope", "baise", "chier", "chiant", "pute", "fumier", "pédé", "batard", "batard", "bite"]; // Remplace "mot1", "mot2", etc. par des mots spécifiques

// Réponse du bot en cas de détection de gros mots
const warningResponse = "Merci de rester poli, s'il te plaît.";

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Affiche le message de l'utilisateur
    appendMessage(userMessage, "user-message");

    // Réinitialise le champ d'entrée
    userInput.value = "";

    // Vérifie si le message contient un gros mot
    const containsBannedWord = bannedWords.some(word => 
        userMessage.toLowerCase().includes(word)
    );

    // Répond avec un avertissement si un gros mot est détecté
    if (containsBannedWord) {
        appendMessage(warningResponse, "bot-message");
    } else {
        // Sinon, répond avec une phrase aléatoire
        const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];
        appendMessage(botMessage, "bot-message");
    }
}

function appendMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
