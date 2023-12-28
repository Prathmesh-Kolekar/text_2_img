# text_2_img
Generate images based on prompts

This web application allows users to generate images based on textual prompts using the Hugging Face model.

## Overview

The Image Generator Web App is built to provide a user-friendly interface for generating images using the Hugging Face Playground AI model. Users can enter prompts, and the application will generate and display corresponding images.

## Features

- Image generation based on textual prompts.
- Responsive design for various screen sizes.
- Real-time feedback on the image generation process.

## Demo

[**Live Demo**](https://text-2-img.vercel.app/)

## Usage

1. Open `index.html` in a web browser.
2. Enter a prompt in the input field.
3. Click the "Generate Image" button.
4. View the generated image in the designated area.

## Dependencies

- [jQuery](https://jquery.com/): JavaScript library for simplifying DOM manipulation.

## Configuration

Ensure you have an API key for the Hugging Face Playground AI model. Update the `apiEndpoint` and `headers` variables in the script section of `index.html` with your API key.

```javascript
const apiEndpoint = "https://api-inference.huggingface.co/models/playgroundai/playground-v2-1024px-aesthetic";

const headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
};

