// Update News
const text = "Hello, I like animation and coding. There will be more added to this site once I get things situated in my plans.";
let index = 0;

function typingEffect()
{
    if (index < text.length) 
    {
        document.getElementById("typing").textContent += text[index];
        index++;
        setTimeout(typingEffect, 30); // Speed
    }
}
typingEffect();
