'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { Dataset } from '@/types/dataset';

export default function Dashboard() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [results, setResults] = useState<Dataset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const categories = [
    'All',
    'Robotics',
    'Humanoid robots',
    'Computer vision',
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Engineering',
    'Speech',
    'Autonomous vehicles',
  ];

  const searchPresets = [
    'Household Robot',
    'Humanoid Bimanual',
    'Autonomous Driving',
    'Defect Detection',
    'Chest CT Scans',
    'Limit Order Book',
    'Parametric CAD',
    'Speech Diarization',
  ];

  const performSearch = async (searchQuery: string, categoryFilter: string = selectedCategory) => {
    setIsLoading(true);
    try {
      const res = await fetch('/datasets/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });
      if (res.ok) {
        const data = await res.json();
        let items: Dataset[] = data.results || [];
        if (categoryFilter !== 'All') {
          items = items.filter(
            (d) => d.category.toLowerCase() === categoryFilter.toLowerCase()
          );
        }
        setResults(items);
      }
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    async function loadInitial() {
      try {
        const res = await fetch('/datasets/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: '' }),
        });
        if (res.ok) {
          const data = await res.json();
          if (!ignore) {
            setResults(data.results || []);
          }
        }
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadInitial();

    return () => {
      ignore = true;
    };
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    performSearch(query, cat);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query, selectedCategory);
  };

  const copyToClipboard = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(identifier);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono antialiased selection:bg-neutral-800 selection:text-white">
      <header className="border-b border-neutral-800 bg-black px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-sm font-semibold tracking-[0.2em] uppercase text-white">
            PROPRIETARY DATA FOR AI LABS
          </h1>
          <div className="flex items-center space-x-4 text-xs">
            <span className="text-neutral-500 tracking-wider">
              {results.length} DATASETS MATCHED
            </span>
            <span className="text-neutral-700">|</span>
            <Link
              href="/matching"
              className="bg-yellow-200 hover:bg-yellow-300 text-black px-3 py-1.5 font-semibold text-xs border border-yellow-300 transition-colors uppercase tracking-wider inline-block"
            >
              SEMANTIC MATCHING ARCHITECTURE &rarr;
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-1 text-xs border-b border-neutral-800 pb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 border transition-all text-[11px] tracking-wider uppercase ${
                  selectedCategory === cat
                    ? 'border-white bg-white text-black font-semibold'
                    : 'border-transparent text-neutral-400 hover:text-white hover:border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                startTransition(() => performSearch(e.target.value, selectedCategory));
              }}
              placeholder="Search datasets..."
              className="w-full bg-black border border-neutral-800 px-4 py-3 text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
            />
          </form>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-600 text-[11px] uppercase tracking-wider">
              QUICK QUERIES:
            </span>
            {searchPresets.map((preset) => (
              <button
                key={preset}
                onClick={() => {
                  setQuery(preset);
                  performSearch(preset, selectedCategory);
                }}
                className={`border px-2.5 py-1 text-[11px] transition-colors ${
                  query.toLowerCase() === preset.toLowerCase()
                    ? 'border-white bg-white text-black font-semibold'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white'
                }`}
              >
                &quot;{preset}&quot;
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400">
                MARKETPLACE CATALOG
              </span>
              <span className="text-xs px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300">
                {isLoading ? 'QUERYING...' : `${results.length} RECORD${results.length === 1 ? '' : 'S'}`}
              </span>
            </div>
            <span className="text-xs text-neutral-500 uppercase tracking-wider">
              STRUCTURED LICENSING // DIRECT PROVENANCE
            </span>
          </div>

          {!isLoading && results.length === 0 && (
            <div className="border border-neutral-800 bg-neutral-950 p-12 text-center space-y-4">
              <p className="text-neutral-400 text-sm uppercase tracking-wider">
                No datasets found matching query &quot;{query}&quot;
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('All');
                  performSearch('', 'All');
                }}
                className="border border-neutral-700 text-white px-4 py-2 text-xs hover:border-white uppercase"
              >
                Reset All Filters
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6">
            {results.map((dataset) => (
              <div
                key={dataset.id}
                className="border border-neutral-800 bg-neutral-950 p-6 md:p-8 space-y-6 hover:border-neutral-700 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4 text-xs">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-bold bg-neutral-900 border border-neutral-700 px-2.5 py-1 tracking-wider">
                      {dataset.id}
                    </span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-neutral-300 uppercase tracking-wider font-semibold">
                      {dataset.category}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs">
                    <span className="border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-neutral-300">
                      QUALITY: <strong className="text-white">{dataset.qualityScore}/100</strong>
                    </span>
                    {dataset.verified ? (
                      <span className="border border-emerald-800/80 bg-emerald-950/40 text-emerald-400 text-[11px] px-2.5 py-1 uppercase tracking-wider">
                        VERIFIED PROVIDER
                      </span>
                    ) : (
                      <span className="border border-neutral-800 text-neutral-500 text-[11px] px-2.5 py-1 uppercase tracking-wider">
                        UNVERIFIED PROVIDER
                      </span>
                    )}
                    <button
                      onClick={() =>
                        copyToClipboard(JSON.stringify(dataset, null, 2), `dataset-json-${dataset.id}`)
                      }
                      className="border border-neutral-800 hover:border-neutral-600 px-2.5 py-1 text-neutral-400 hover:text-white transition-colors"
                    >
                      {copiedKey === `dataset-json-${dataset.id}` ? 'COPIED JSON' : 'EXPORT JSON'}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-xl font-normal text-white tracking-tight">
                    {dataset.name}
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-4xl">
                    {dataset.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-neutral-900 bg-black p-4 text-xs">
                  <div className="space-y-1">
                    <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                      SIZE
                    </div>
                    <div className="text-white font-medium">{dataset.size}</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                      PRICE
                    </div>
                    <div className="text-white font-bold">{dataset.price}</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                      LICENSE
                    </div>
                    <div className="text-white font-medium">{dataset.license}</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                      PROVIDER
                    </div>
                    <div className="text-white font-medium truncate" title={dataset.provider}>
                      {dataset.provider}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                      DATA TYPES:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dataset.dataType.map((type, idx) => (
                        <span
                          key={idx}
                          className="border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-neutral-300"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                      USE CASES:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dataset.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-neutral-300"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        <footer className="pt-8 pb-4 text-center text-xs text-neutral-600 border-t border-neutral-900">
          PROPRIETARY DATA FOR AI LABS
        </footer>
      </main>
    </div>
  );
}
