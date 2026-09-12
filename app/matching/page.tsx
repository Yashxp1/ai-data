import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Semantic Dataset Matching Architecture",
  description:
    "How to match AI companies and foundation models with the right proprietary datasets using semantic search and multi-layer verification.",
};

export default function MatchingArchitecturePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono antialiased selection:bg-neutral-800 selection:text-white">
      <header className="border-b border-neutral-800 bg-black px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="h-2 w-2 bg-red-500 inline-block" />
            <h1 className="text-sm font-semibold tracking-[0.2em] uppercase text-white">
              SEMANTIC DATASET MATCHING SYSTEM
            </h1>
          </div>
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 px-3 py-1.5 transition-colors uppercase"
          >
            &larr; BACK TO CATALOG
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section className="space-y-4 max-w-3xl">
          <div className="text-xs text-red-500 tracking-widest uppercase font-semibold">
            SYSTEM ARCHITECTURE // PROTOTYPE
          </div>
          <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight">
            How to Match AI Companies With The Right Datasets
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            AI labs building frontier models cannot rely on keyword matching
            alone. Sourcing physical AI trajectories, reasoning chains, and
            expert data requires understanding training intent, sensor
            modalities, quality thresholds, and legal clearance.
          </p>
        </section>

        <section className="space-y-4">
          <div className="text-xs text-neutral-500 uppercase tracking-wider">
            END-TO-END MATCHING PIPELINE
          </div>

          <div className="border border-neutral-800 bg-neutral-950 p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="border border-neutral-800 bg-black p-5 space-y-3">
                <div className="text-neutral-500 text-[10px] tracking-widest uppercase">
                  STEP 01 // INPUT
                </div>
                <div className="text-white font-bold uppercase text-sm">
                  AI Lab Training Spec
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  The AI team provides their model archetype (e.g. VLA humanoid,
                  code synthesizer), desired tasks, sensor requirements, and
                  target budget.
                </p>
              </div>

              <div className="border border-neutral-800 bg-black p-5 space-y-3">
                <div className="text-neutral-500 text-[10px] tracking-widest uppercase">
                  STEP 02 // PARSING
                </div>
                <div className="text-white font-bold uppercase text-sm">
                  Semantic Embedding
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Natural language specifications and task descriptions are
                  converted into dense vector embeddings alongside structured
                  capability tokens.
                </p>
              </div>

              <div className="border border-neutral-800 bg-black p-5 space-y-3">
                <div className="text-neutral-500 text-[10px] tracking-widest uppercase">
                  STEP 03 // ENGINE
                </div>
                <div className="text-white font-bold uppercase text-sm">
                  4-Layer Filter Engine
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Candidates are scored through Semantic Cosine Distance,
                  Modality Compatibility, Rights Clearance, and Empirical
                  Quality.
                </p>
              </div>

              <div className="border border-neutral-800 bg-black p-5 space-y-3">
                <div className="text-neutral-500 text-[10px] tracking-widest uppercase">
                  STEP 04 // DELIVERY
                </div>
                <div className="text-white font-bold uppercase text-sm">
                  Ranked Match &amp; License
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  The AI lab receives a ranked list of matched datasets with
                  match percentages, task coverage audits, and instant
                  licensing.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-900 pt-4 flex items-center justify-between text-[11px] text-neutral-500">
              <span>LATENCY: &lt; 85MS ACROSS 10M+ INDEXED DEMONSTRATIONS</span>
              <span>OUTPUT: COMPLIANT TRAINING DATASET BUNDLE</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-b border-neutral-800 pb-2">
            <h3 className="text-base font-normal text-white uppercase tracking-wider">
              The 4 Core Matching Filters
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Every dataset evaluated goes through four automated verification
              checks before being recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase">
                  1. Semantic Task Similarity
                </span>
                <span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-0.5">
                  VECTOR COSINE
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Matches the semantic meaning of training tasks rather than exact
                keywords. If an AI lab searches for &quot;liquid transfer and
                bottle manipulation&quot;, the system automatically identifies
                &quot;Pour water&quot; and &quot;Pick up cup&quot; as
                high-scoring semantic matches.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase">
                  2. Modality &amp; Sensor Compatibility
                </span>
                <span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-0.5">
                  HARDWARE ALIGNMENT
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Verifies technical format requirements. For embodied AI, it
                checks joint-state frequencies (e.g. 50Hz vs 60Hz), stereoscopic
                camera calibrations, and tactile force sensor dimensions to
                ensure data directly feeds into the lab&#39;s training pipeline.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase">
                  3. Legal Rights &amp; Provenance Clearance
                </span>
                <span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-0.5">
                  RISK MITIGATION
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ensures zero copyright risk. The engine validates that the
                dataset license explicitly authorizes commercial AI training,
                verifies contributor consent agreements, and confirms
                chain-of-custody audits.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase">
                  4. Quality &amp; Density Thresholding
                </span>
                <span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-0.5">
                  SIGNAL-TO-NOISE
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Filters datasets by empirical quality scores (e.g. &gt;90/100).
                Validates teleoperation trajectory smoothness, expert
                demonstration fidelity, resolution consistency, and absence of
                corrupted telemetry.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-b border-neutral-800 pb-2">
            <h3 className="text-base font-normal text-white uppercase tracking-wider">
              Prototype Matching Walkthrough
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Simulated demonstration of an AI company query processed by the
              semantic matcher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
              <div className="text-xs text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                <span>INPUT // AI LAB REQUIREMENT</span>
                <span className="text-neutral-400">
                  LAB: FOUNDATION ROBOTICS INC
                </span>
              </div>

              <div className="bg-black border border-neutral-900 p-4 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono">
                  &quot;We need human teleoperation demonstrations of domestic
                  kitchen tasks including pouring liquids, opening storage
                  cabinets, and picking up delicate containers for a bimanual
                  humanoid foundation model.&quot;
                </div>
                <div className="border-t border-neutral-900 pt-2 space-y-1 text-neutral-500 text-[11px]">
                  <div>
                    MODALITY REQUIRED:{" "}
                    <span className="text-white">Trajectories + Video</span>
                  </div>
                  <div>
                    LICENSE REQUIRED:{" "}
                    <span className="text-white">Commercial AI Training</span>
                  </div>
                  <div>
                    MIN QUALITY SCORE:{" "}
                    <span className="text-white">90/100</span>
                  </div>
                  <div>
                    TARGET DOMAIN:{" "}
                    <span className="text-white">
                      Robotics / Humanoid robots
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
              <div className="text-xs text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                <span>OUTPUT // TOP MATCHED DATASET</span>
                <span className="text-emerald-400 font-bold">
                  96.8% MATCH SCORE
                </span>
              </div>

              <div className="bg-black border border-neutral-900 p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm">
                    Household Robot Demonstrations (ds_001)
                  </span>
                  <span className="text-neutral-500 text-[10px]">
                    ID: ds_001
                  </span>
                </div>

                <div className="space-y-1.5 text-neutral-400 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span>Task Coverage:</span>
                    <span className="text-emerald-400 font-mono">
                      Pour water, Pick up cup, Open drawer (100% Match)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Modality Fit:</span>
                    <span className="text-emerald-400 font-mono">
                      Video, Trajectories, Annotations
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>License Clearance:</span>
                    <span className="text-emerald-400 font-mono">
                      Commercial AI Training (Verified)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Quality Score:</span>
                    <span className="text-white font-mono">
                      94 / 100 (&gt; 90 Threshold Passed)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Provider:</span>
                    <span className="text-white font-mono">
                      MotionLab AI (Verified)
                    </span>
                  </div>
                </div>

                <div className="border-t border-neutral-900 pt-3 flex items-center justify-between">
                  <span className="text-white font-bold text-xs">
                    $25,000 USD
                  </span>
                  <span className="text-xs text-emerald-400 uppercase tracking-wider">
                    READY TO LICENSE &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-neutral-900 pt-8 flex items-center justify-between text-xs text-neutral-500">
          <span>SEMANTIC DATASET MATCHING ARCHITECTURE</span>
          <Link href="/" className="text-white hover:underline uppercase">
            EXPLORE DATASET CATALOG &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
