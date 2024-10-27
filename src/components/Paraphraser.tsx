import React, { useState } from 'react';
import { ArrowRightLeft, Copy, CheckCheck, Loader2 } from 'lucide-react';
import TextArea from './TextArea';
import Button from './Button';
import Header from './Header';
import Features from './Features';
import ErrorMessage from './ErrorMessage';
import { processText } from '../utils/textProcessor';

const Paraphraser: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    setError(null);
    setLoading(true);
    setOutputText('');

    try {
      const processed = await processText(inputText);
      setOutputText(processed);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setError('Failed to copy text to clipboard');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <TextArea
          label="Original Text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setError(null);
          }}
          placeholder="Paste your text here..."
        />

        <TextArea
          label="Processed Text"
          value={outputText}
          readOnly
          placeholder="Your processed text will appear here..."
        />
      </div>

      <ErrorMessage message={error || ''} />

      <div className="flex justify-center gap-4 mb-12">
        <Button
          onClick={handleProcess}
          disabled={!inputText.trim() || loading}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 text-lg"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <ArrowRightLeft className="w-5 h-5 mr-2" />
          )}
          {loading ? 'Processing...' : 'Process Text'}
        </Button>

        <Button
          onClick={handleCopy}
          disabled={!outputText}
          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 text-lg"
        >
          {copied ? (
            <CheckCheck className="w-5 h-5 mr-2" />
          ) : (
            <Copy className="w-5 h-5 mr-2" />
          )}
          {copied ? 'Copied!' : 'Copy Result'}
        </Button>
      </div>

      <Features />
    </div>
  );
};

export default Paraphraser;