

import React, { useState, useCallback, useMemo } from 'react';
import { getAIAnalysis } from '../../services/geminiService';
import { AIAnalysisResult } from '../../types';

declare global {
    interface Window {
        marked: {
            parse: (markdown: string) => string;
        };
    }
}

const ResearchAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<AIAnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsLoading(true);
        setError(null);
        setResult(null);

        const analysisResult = await getAIAnalysis(query);

        if (analysisResult.text.startsWith("The analysis could not") || analysisResult.text.startsWith("The Research Assistant")) {
            setError(analysisResult.text);
        } else {
            setResult(analysisResult);
        }
        
        setIsLoading(false);
    }, [query]);

    const renderedHtml = useMemo(() => {
        if (result?.text && window.marked) {
            try {
                return window.marked.parse(result.text);
            } catch (e) {
                console.error("Markdown parsing failed", e);
                return result.text.replace(/\n/g, '<br />'); // Fallback on error
            }
        }
        return result?.text.replace(/\n/g, '<br />') || ''; // Fallback if marked is not available
    }, [result]);

    return (
        <>
            <button
                onClick={handleToggle}
                className="fixed bottom-6 right-6 bg-primary text-white w-16 h-16 rounded-full shadow-lg hover:bg-secondary transition-colors flex items-center justify-center z-50"
                aria-label="Open Research Assistant"
            >
                <i className="fas fa-search-plus text-2xl"></i>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <header className="p-4 border-b flex justify-between items-center">
                            <h3 className="font-serif text-xl text-primary font-semibold flex items-center">
                                <i className="fas fa-search-plus text-primary mr-3"></i>
                                Research Assistant
                            </h3>
                            <button onClick={handleToggle} className="text-text-muted hover:text-primary text-3xl leading-none">&times;</button>
                        </header>
                        
                        <div className="p-6 overflow-y-auto">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="research-query" className="block font-semibold text-secondary mb-2">Ask a question for background context:</label>
                                <textarea
                                    id="research-query"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
                                    placeholder="e.g., What are the legal requirements for an eviction notice in Indiana?"
                                    rows={3}
                                    disabled={isLoading}
                                ></textarea>
                                <button type="submit" disabled={isLoading} className="mt-3 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary disabled:bg-gray-400 transition-colors">
                                    {isLoading ? 'Searching...' : 'Submit Query'}
                                </button>
                            </form>

                            {isLoading && (
                                <div className="text-center p-8">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                                    <p className="mt-4 text-text-muted">Searching public records...</p>
                                </div>
                            )}

                            {error && (
                                <div className="mt-6 p-4 bg-red-100 border-l-4 border-accent text-red-800">
                                    <p>{error}</p>
                                </div>
                            )}

                            {result && (
                                <div className="mt-6">
                                    <h4 className="font-serif text-lg font-semibold text-primary">Response:</h4>
                                    <div className="mt-2 p-4 bg-gray-100 rounded-md border prose prose-sm sm:prose-base max-w-none" dangerouslySetInnerHTML={{__html: renderedHtml}}></div>

                                    {result.sources.length > 0 && (
                                        <div className="mt-4">
                                            <h5 className="font-serif text-md font-semibold text-primary">Sources:</h5>
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm prose prose-sm sm:prose-base max-w-none">
                                                {result.sources.map((source, index) => (
                                                    <li key={index}>
                                                        <a href={source.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                            {source.web.title || source.web.uri}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResearchAssistant;
