const apiEndpoint = "https://api-inference.huggingface.co/models/playgroundai/playground-v2-1024px-aesthetic";

function generateImage(prompt) {
    const imageContainer = document.getElementById("image-container");
    const chatMessage = document.getElementById("chatMessage");

    if (!prompt) {
        // Show error message if prompt is empty
        chatMessage.innerText = "Please enter a prompt";
        return;
    }

    // Display "Generating..." message in the text box
    chatMessage.innerText = "Generating...";

    const headers = {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
    };

    const data = {
        "inputs": prompt,
        "max_iterations": 100,
        "timestep_respacing": "1.0",
        "random_seed": 0,
    };

    $.ajax({
        url: apiEndpoint,
        headers: headers,
        type: "POST",
        data: JSON.stringify(data),
        xhrFields: {
            responseType: 'blob'
        },
        success: function (response) {
            const imageUrl = URL.createObjectURL(response);

            // Create an image element
            const imageElement = new Image();
            imageElement.src = imageUrl;
            imageElement.id = "generatedImage";

            // Wait for the image to load before displaying it
            imageElement.onload = function () {
                // Clear the loading message and show the generated image
                imageContainer.innerHTML = "";
                imageContainer.appendChild(imageElement);

                // Change the message to "This is your generated image"
                chatMessage.innerText = "This is your generated image";
                console.log("Image generated successfully!");
            };
        },
        error: function (xhr, status, error) {
            // Display error message in the text box
            chatMessage.innerText = "Error generating image. Please try again.";
            console.error("Error:", error);
        }
    });
}

document.getElementById("generateBtn").addEventListener("click", function () {
    const prompt = document.getElementById("prompt").value;
    generateImage(prompt);
});
