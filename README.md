
# Plagiarism Remover

Plagiarism Remover is a powerful React-based tool designed to help users paraphrase text, making it unique and plagiarism-free while retaining its original context. It leverages advanced AI algorithms through the [RapidAPI paraphrasing service](https://rapidapi.com/) to provide high-quality, contextually accurate rewrites.

## Demo

Check out a live demo of the Plagiarism Remover tool [here](https://plagarism-remover.vercel.app/).

## Features

- **AI-Powered Paraphrasing**: Uses state-of-the-art language models to generate paraphrased content.
- **Context Preservation**: Maintains the original context and meaning of the text.
- **Real-time Processing**: Fast and efficient, with results delivered in seconds.
- **User-Friendly Interface**: Intuitive and responsive design, optimized for desktop and mobile.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/biswadeep-roy/plagarism-remover.git
   cd plagiarism-remover
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Obtain an API Key from [RapidAPI](https://rapidapi.com/). Subscribe to the `rewriter-paraphraser-text-changer-multi-language` API and copy your API key.

4. Configure the API Key:
   - In the `utils` folder, open the `textProcessor.ts` file.
   - Replace the `x-rapidapi-key` value with your own RapidAPI key.

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:5173) to view the application.

## Usage

1. **Enter Text**: Paste or type the text you want to paraphrase.
2. **Process Text**: Click on the "Process Text" button, which sends your input text to the API for processing.
3. **Copy Result**: After processing, copy the paraphrased text for further use.

## Project Structure

- **components/**: Contains React components for the application's UI, including buttons, text areas, and error messages.
- **utils/**: Includes `textProcessor.ts`, the core file that handles API communication.
- **App.tsx**: The main app component that orchestrates the application's functionality and layout.

## Technology Stack

- **React**: For building the user interface.
- **TypeScript**: Ensures type safety.
- **RapidAPI**: Provides the paraphrasing API service.
- **Tailwind CSS**: CSS framework for styling.

## License

This project is open source and available under the [MIT License](./LICENSE).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you'd like to help improve this tool.

---

Happy Paraphrasing! 🎉
