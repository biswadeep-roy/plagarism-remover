interface ParaphraseResponse {
  status: string;
  rewrite: string;
}

export const processText = async (text: string): Promise<string> => {
  if (!text.trim()) {
    throw new Error('Please enter some text to process');
  }

  try {
    const response = await fetch(
      'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': 'enter-your-api-key',
          'x-rapidapi-host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
        },
        body: JSON.stringify({
          language: 'en',
          strength: 3,
          text: text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to process text. Please try again.');
    }

    const data: ParaphraseResponse = await response.json();
    
    if (!data.rewrite) {
      throw new Error('Invalid response from the paraphrasing service');
    }

    return data.rewrite;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to process text: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while processing the text');
  }
};