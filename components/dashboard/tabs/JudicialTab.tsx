import React from 'react';
import { Fragment } from 'react/jsx-runtime';

const JudicialTab: React.FC = () => {
    return (
        <div className="judicial-report-container">
            <div className="main-content" style={{ marginLeft: 0 }}>
              {/* Hero Section */}
              <section id="hero" className="hero-section text-white py-16 -mt-8 -mx-4">
                <div className="hero-overlay"></div>
                <div className="hero-content max-w-7xl mx-auto px-6">
                  <div className="bento-grid">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h1 className="tiempos text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                          <span className="italic opacity-90">Judicial Accountability</span>
                          <br />
                          in Marion County
                          <br />
                          Eviction Courts
                        </h1>
                        <p className="text-base sm:text-xl text-gray-300 max-w-2xl">
                          An investigative report examining potential patterns of bias, conflicts of interest, and corruption in Marion County's eviction court system.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-gavel text-amber-400"></i>
                          <span>Judicial Investigation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="fas fa-chart-line text-blue-400"></i>
                          <span>Evidence-Based Analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="fas fa-shield-alt text-green-400"></i>
                          <span>Public Records Only</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-lg font-semibold mb-4">Key Findings Preview</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium">Centralization of Eviction Cases</p>
                            <p className="text-sm text-gray-300">Judge Patricia McMath now handles all Marion Superior Court eviction cases effective March 2025</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium">Critical Data Gap</p>
                            <p className="text-sm text-gray-300">Judge-specific statistical data unavailable from public records</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium">Systemic Imbalance</p>
                            <p className="text-sm text-gray-300">84.6% landlord representation vs. 1% tenant representation in 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Executive Summary */}
              <section className="py-16 bg-white -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="tiempos text-3xl font-bold mb-8 text-center">Executive Summary</h2>

                    <div className="evidence-card p-6 rounded-lg shadow-sm mb-8">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">⚠️</div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Data Accessibility Challenge</h3>
                          <p className="text-gray-700">
                            This investigative report on judicial accountability in Marion County eviction courts has identified key judicial figures, including <strong>Judge Patricia McMath</strong> who now centrally handles Marion Superior Court evictions. However, the establishment of specific baseline metrics for these judges, crucial for assessing performance and potential bias, has been significantly hampered by the <strong>unavailability of detailed, judge-level statistical data from publicly accessible records</strong>. Consequently, subsequent analyses for financial conflicts, statistical bias, and ethical violations are pending the acquisition of this foundational data.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Judicial Landscape</h4>
                        <p className="text-sm text-gray-600">Identified 9 township judges plus Judge McMath handling Marion County eviction cases, with varying approaches to diversion programs.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Representation Gap</h4>
                        <p className="text-sm text-gray-600">Systemic imbalance with 84.6% landlord representation vs. 1% tenant representation in disposed 2024 cases.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">Investigation Status</h4>
                        <p className="text-sm text-gray-600">Phase 1 complete, subsequent phases pending access to judge-specific data from official sources.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Phase 1: Judge Identification */}
              <section id="phase1" className="py-16 bg-gray-50 -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <div>
                        <h2 className="tiempos text-3xl font-bold">Phase 1: Target Identification & Baseline Research</h2>
                        <p className="text-gray-600">Establishing the judicial landscape of Marion County eviction courts</p>
                      </div>
                    </div>
                    <div className="progress-indicator">
                      <span className="status-badge status-complete">
                        <i className="fas fa-check-circle"></i>
                        Primary Research Complete
                      </span>
                      <span className="flex-1"></span>
                      <span className="text-sm text-gray-500">Data Availability: Limited</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Judicial Officers Identified</h3>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-red-600">Marion Superior Court</h4>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="font-semibold">Judge Patricia C. McMath</p>
                          <p className="text-sm text-gray-600 mb-2">Marion Superior Court 33</p>
                          <p className="text-sm">
                            <strong>Appointed:</strong> July 2024
                            <br />
                            <strong>Responsibility:</strong> All Marion Superior Court eviction cases (centralized March 6, 2025)
                            <br />
                            <strong>Schedule:</strong> Mondays and Wednesdays
                          </p>
                          <p className="text-sm mt-2">
                            <a href="https://indyjudges.org/patricia-mcmath" className="citation">[590]</a>
                            <a href="https://mirrorindy.org/indianapolis-eviction-proceedings-marion-superior-court-township-small-claims-rent-fees/" className="citation">[263]</a>
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Township Small Claims Courts</h4>
                        <div className="space-y-3">
                          <div className="border-l-4 border-blue-400 pl-4">
                            <p className="font-semibold">Pike Township (49K05)</p>
                            <p className="text-sm text-gray-600">Hon. A. Douglas Stephens</p>
                            <p className="text-sm">Large eviction docket; utilizes payment plans for nearly two decades</p>
                          </div>
                          <div className="border-l-4 border-green-400 pl-4">
                            <p className="font-semibold">Washington Township (49K07)</p>
                            <p className="text-sm text-gray-600">Hon. Stephen G. Poore</p>
                            <p className="text-sm">Approximately 80% eviction cases</p>
                          </div>
                          <div className="border-l-4 border-purple-400 pl-4">
                            <p className="font-semibold">Lawrence Township (49K03)</p>
                            <p className="text-sm text-gray-600">Hon. Kimberly J. Bacon</p>
                            <p className="text-sm">Local model for eviction diversion since 2018</p>
                          </div>
                          <p className="text-sm text-gray-600">
                            Plus 6 additional township judges handling eviction cases.
                            <a href="https://www.wthr.com/article/news/investigations/13-investigates/landlords-superior-court-tenant-eviction-13-investigates-marion-county-renters-apartments/531-64258faf-f02d-47d7-ae11-364738fe79bb" className="citation">[572]</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Baseline Metrics Status</h3>

                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <i className="fas fa-exclamation-triangle text-amber-500 text-xl"></i>
                          <h4 className="font-semibold text-amber-700">Data Unavailable</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Specific judge-level quantitative baseline metrics for Judge Patricia McMath and other Marion County judges have proven challenging to obtain from public databases.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <p className="text-sm font-semibold mb-2">Missing Metrics Include:</p>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Total eviction cases assigned per judge (2020-2025)</li>
                            <li>• Average cases per month by judge</li>
                            <li>• Default judgment rates by judge</li>
                            <li>• Tenant victory rates by judge</li>
                            <li>• Settlement/continuance rates</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Available System Data</h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm mb-2">
                            <strong>Marion County (since March 2020):</strong> 120,624 eviction filings
                            <a href="https://civilcourtdata.lsc.gov/data/eviction/indiana/marion/" className="citation">[343]</a>
                          </p>
                          <p className="text-sm">
                            <strong>2024 Representation:</strong> 84.6% landlords with legal representation vs. 1% tenants
                            <a href="https://civilcourtdata.lsc.gov/data/eviction/indiana/marion/" className="citation">[343]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Phase 2: Financial Conflict Investigation */}
              <section id="phase2" className="py-16 bg-white -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold">2</span>
                      </div>
                      <div>
                        <h2 className="tiempos text-3xl font-bold">Phase 2: Financial Conflict Investigation</h2>
                        <p className="text-gray-600">Examining potential financial relationships that could create conflicts of interest</p>
                      </div>
                    </div>
                    <div className="progress-indicator">
                      <span className="status-badge status-pending">
                        <i className="fas fa-clock"></i>
                        Pending Data Access
                      </span>
                      <span className="flex-1"></span>
                      <span className="text-sm text-gray-500">Requires: Campaign finance and property records</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '25%'}}></div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Campaign Finance Analysis</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <i className="fas fa-lock text-gray-400"></i>
                          <p className="text-gray-700">Pending access to Indiana Campaign Finance Database for comprehensive analysis</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Research Protocol</h4>
                          <ul className="text-sm space-y-1 text-gray-600">
                            <li>• Cross-reference judicial candidates 2016-2024</li>
                            <li>• Identify contributions from real estate industry</li>
                            <li>• Analyze timing relative to judicial decisions</li>
                            <li>• Compare to tenant advocacy contributions</li>
                          </ul>
                          <p className="text-xs text-gray-500 mt-2">
                            <a href="https://www.in.gov/sos/elections/files/2024-Campaign-Finance-Manual.FINAL-with-Appendix-Docs.pdf" className="citation">[561]</a>
                            <a href="https://ballotpedia.org/Campaign_finance_requirements_for_Indiana_judicial_elections" className="citation">[531]</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Business Relationship Investigation</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <i className="fas fa-search text-gray-400"></i>
                          <p className="text-gray-700">Pending systematic research of business and property records</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Investigation Targets</h4>
                          <ul className="text-sm space-y-1 text-gray-600">
                            <li>• Property ownership records (County Assessor)</li>
                            <li>• Business entity registrations (Secretary of State)</li>
                            <li>• Professional partnerships and affiliations</li>
                            <li>• Board memberships in real estate organizations</li>
                          </ul>
                          <p className="text-xs text-gray-500 mt-2">
                            <a href="https://www.in.gov/courts/ojar/files/jud-qual-sei.pdf" className="citation">[538]</a>
                            Indiana requires "Statement of Economic Interests"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="phase-card bg-red-50 border-red-200">
                      <div className="flex items-start gap-4">
                        <i className="fas fa-exclamation-circle text-red-500 text-xl mt-1"></i>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Indiana's Judicial Disclosure Weakness</h4>
                          <p className="text-red-700 text-sm">
                            A 2022 report from the Center for Public Integrity gave Indiana an 'F' for judicial financial disclosure, citing weaknesses in the information required. This suggests that while Statements of Economic Interests are a primary source, they may not provide a complete picture.
                            <a href="https://publicintegrity.org/politics/justice-obscured/indiana-earns-f-for-judicial-financial-disclosure/" className="citation">[540]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Phase 3: Statistical Bias Analysis */}
              <section id="phase3" className="py-16 bg-gray-50 -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h2 className="tiempos text-3xl font-bold">Phase 3: Statistical Bias Analysis</h2>
                        <p className="text-gray-600">Identifying statistical anomalies in judicial decision-making patterns</p>
                      </div>
                    </div>
                    <div className="progress-indicator">
                      <span className="status-badge status-data-unavailable">
                        <i className="fas fa-database"></i>
                        Pending Baseline Data
                      </span>
                      <span className="flex-1"></span>
                      <span className="text-sm text-gray-500">Requires: Judge-specific case outcome statistics</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '15%'}}></div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Decision Pattern Analysis</h3>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Statistical Methodology Planned</h4>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Calculate standard deviations from county averages</li>
                            <li>• Identify judges &gt;2 standard deviations from norm</li>
                            <li>• Analyze demographic patterns in decisions</li>
                            <li>• Test correlation with attorney representation</li>
                            <li>• Examine temporal patterns</li>
                          </ul>
                        </div>

                        <div className="border-l-4 border-amber-400 pl-4">
                          <h4 className="font-semibold text-amber-700 mb-2">Data Limitation</h4>
                          <p className="text-sm text-gray-700">
                            Judge-specific statistical data required for this analysis is not available in public records. The investigation seeks to determine if there are disparities in outcomes based on demographics within the courtroom of specific judges.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Procedural Bias Investigation</h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Key Indicators</h4>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Average hearing length by judge</li>
                            <li>• Continuance grant rates (landlords vs. tenants)</li>
                            <li>• Evidence standards application</li>
                            <li>• Pro se assistance provision</li>
                            <li>• Language interpretation accommodations</li>
                          </ul>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">Anecdotal Evidence</h4>
                          <p className="text-sm text-gray-700 mb-2">
                            Court Watchers in Marion County have noted that judges in township courts spend an average of three minutes on each case, with some spending less than a minute.
                            <a href="https://mirrorindy.org/eviction-court-watchers/" className="citation">[567]</a>
                          </p>
                          <p className="text-sm text-gray-700">
                            Time given to move out after eviction judgment varies by judge's discretion, often 5-21 days despite Indiana law requiring minimum 48 hours.
                            <a href="https://www.indystar.com/story/news/local/indianapolis/2023/12/15/indiana-evictions-what-to-expect-where-to-find-help-facing-eviction/71901312007/" className="citation">[576]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Phase 4: Ethical Violation Documentation */}
              <section id="phase4" className="py-16 bg-white -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold">4</span>
                      </div>
                      <div>
                        <h2 className="tiempos text-3xl font-bold">Phase 4: Ethical Violation Documentation</h2>
                        <p className="text-gray-600">Analyzing potential violations of the Indiana Code of Judicial Conduct</p>
                      </div>
                    </div>
                    <div className="progress-indicator">
                      <span className="status-badge status-pending">
                        <i className="fas fa-gavel"></i>
                        Pending Evidence Collection
                      </span>
                      <span className="flex-1"></span>
                      <span className="text-sm text-gray-500">Requires: Findings from previous phases</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '10%'}}></div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Indiana Code of Judicial Conduct</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold mb-2">Rule 1.2 - Promoting Confidence</h4>
                          <p className="text-sm text-gray-700">Actions undermining public confidence or creating appearance of bias</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-4">
                          <h4 className="font-semibold mb-2">Rule 2.2 - Impartiality</h4>
                          <p className="text-sm text-gray-700">Statistical evidence of bias or different treatment based on representation</p>
                        </div>
                        <div className="border-l-4 border-amber-400 pl-4">
                          <h4 className="font-semibold mb-2">Rule 2.4 - External Influences</h4>
                          <p className="text-sm text-gray-700">Inappropriate financial relationships or ex parte communications</p>
                        </div>
                        <div className="border-l-4 border-red-400 pl-4">
                          <h4 className="font-semibold mb-2">Rule 2.11 - Disqualification</h4>
                          <p className="text-sm text-gray-700">Financial interests in case outcomes or prior involvement as attorney</p>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Documentation Standards</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Evidence Requirements</h4>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Date, time, case number for each incident</li>
                            <li>• Direct quotes from transcripts or recordings</li>
                            <li>• Financial disclosure document copies</li>
                            <li>• Campaign contribution receipts</li>
                            <li>• Business registration documents</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Verification Protocol</h4>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Cross-reference multiple sources</li>
                            <li>• Obtain official document copies</li>
                            <li>• Interview multiple witnesses</li>
                            <li>• Statistical validation of patterns</li>
                            <li>• Legal expert review of findings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Phase 5: Investigation Execution Framework */}
              <section id="phase5" className="py-16 bg-gray-50 -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">5</span>
                      </div>
                      <div>
                        <h2 className="tiempos text-3xl font-bold">Phase 5: Investigation Framework</h2>
                        <p className="text-gray-600">Structured methodology for comprehensive investigation execution</p>
                      </div>
                    </div>
                    <div className="progress-indicator">
                      <span className="status-badge status-complete">
                        <i className="fas fa-check-circle"></i>
                        Framework Established
                      </span>
                      <span className="flex-1"></span>
                      <span className="text-sm text-gray-500">Implementation in progress</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="phase-card">
                      <h3 className="text-lg font-semibold mb-4">Research Sequence</h3>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-400 pl-3">
                          <p className="font-semibold text-sm">Weeks 1-2: Basic Research</p>
                          <p className="text-xs text-gray-600">Complete ✓</p>
                        </div>
                        <div className="border-l-4 border-amber-400 pl-3">
                          <p className="font-semibold text-sm">Weeks 3-4: Financial Investigation</p>
                          <p className="text-xs text-gray-600">In Progress</p>
                        </div>
                        <div className="border-l-4 border-red-400 pl-3">
                          <p className="font-semibold text-sm">Weeks 5-6: Statistical Analysis</p>
                          <p className="text-xs text-gray-600">Data Limited</p>
                        </div>
                        <div className="border-l-4 border-gray-400 pl-3">
                          <p className="font-semibold text-sm">Weeks 7-8: Pattern Documentation</p>
                          <p className="text-xs text-gray-600">Pending</p>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-lg font-semibold mb-4">Source Prioritization</h3>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded">
                          <p className="font-semibold text-sm text-green-700">Primary Sources</p>
                          <p className="text-xs text-gray-600">Essential: Official court records, finance reports</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-sm text-blue-700">Secondary Sources</p>
                          <p className="text-xs text-gray-600">Supporting: News reports, attorney records</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-semibold text-sm text-gray-700">Tertiary Sources</p>
                          <p className="text-xs text-gray-600">Background: Academic studies, advocacy reports</p>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-lg font-semibold mb-4">Evidence Classification</h3>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                          <p className="font-semibold text-sm text-red-700">🔴 Red Zone</p>
                          <p className="text-xs text-gray-600">Immediate investigation priority</p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                          <p className="font-semibold text-sm text-amber-700">🟡 Yellow Zone</p>
                          <p className="text-xs text-gray-600">Significant concern</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                          <p className="font-semibold text-sm text-green-700">🟢 Green Zone</p>
                          <p className="text-xs text-gray-600">Monitoring level</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Methodological Approach Table */}
                  <div className="phase-card">
                    <h3 className="text-xl font-semibold mb-6">Investigation Execution Timeline</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold">Research Block</th>
                            <th className="text-left py-3 px-4 font-semibold">Weeks</th>
                            <th className="text-left py-3 px-4 font-semibold">Focus Area</th>
                            <th className="text-left py-3 px-4 font-semibold">Key Activities</th>
                            <th className="text-left py-3 px-4 font-semibold">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-3 px-4 font-medium">Basic Research</td>
                            <td className="py-3 px-4">1-2</td>
                            <td className="py-3 px-4">Foundational Information</td>
                            <td className="py-3 px-4">Compile judge list, biographical info, campaign finance reports, business registrations</td>
                            <td className="py-3 px-4">
                              <span className="status-badge status-complete">Complete</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">Financial Investigation</td>
                            <td className="py-3 px-4">3-4</td>
                            <td className="py-3 px-4">Financial Conflicts</td>
                            <td className="py-3 px-4">Analyze campaign contributions, property ownership, business partnerships</td>
                            <td className="py-3 px-4">
                              <span className="status-badge status-pending">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">Statistical Analysis</td>
                            <td className="py-3 px-4">5-6</td>
                            <td className="py-3 px-4">Quantitative Assessment</td>
                            <td className="py-3 px-4">Compile case outcome data, calculate statistics, identify outliers</td>
                            <td className="py-3 px-4">
                              <span className="status-badge status-data-unavailable">Data Limited</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">Pattern Documentation</td>
                            <td className="py-3 px-4">7-8</td>
                            <td className="py-3 px-4">Synthesis & Evidence</td>
                            <td className="py-3 px-4">Document concerning cases, interview attorneys, gather procedural bias evidence</td>
                            <td className="py-3 px-4">
                              <span className="status-badge status-pending">Pending</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Investigation Deliverables */}
              <section id="deliverables" className="py-16 bg-white -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <h2 className="tiempos text-3xl font-bold mb-12 text-center">Investigation Deliverables</h2>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Comprehensive Judge Profiles</h3>
                      <p className="text-gray-700 mb-6">Detailed dossiers consolidating findings for each Marion County judge handling significant eviction caseloads.</p>

                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Profile Template</h4>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• <strong>Basic Information:</strong> Name, jurisdiction, background, education</li>
                            <li>• <strong>Financial Analysis:</strong> Campaign contributions, industry ties, property ownership</li>
                            <li>• <strong>Statistical Performance:</strong> Case volume, decision rates, demographic analysis</li>
                            <li>• <strong>Ethical Assessment:</strong> Code of Judicial Conduct compliance</li>
                            <li>• <strong>Evidence Classification:</strong> Red/Yellow/Green zone assignment</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-4">Systemic Analysis Report</h3>
                      <p className="text-gray-700 mb-6">Broader overview identifying patterns, trends, and structural issues across Marion County's eviction court system.</p>

                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Report Components</h4>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• <strong>Statistical Overview:</strong> County-wide bias patterns, judge comparisons</li>
                            <li>• <strong>Financial Influence Mapping:</strong> Campaign contribution networks</li>
                            <li>• <strong>Accountability Gap Analysis:</strong> Oversight mechanism effectiveness</li>
                            <li>• <strong>Reform Recommendations:</strong> Evidence-based systemic changes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="phase-card bg-gradient-to-r from-slate-50 to-blue-50">
                      <h3 className="text-xl font-semibold mb-4 text-center">Expected Timeline</h3>
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i className="fas fa-check text-green-600"></i>
                          </div>
                          <p className="font-semibold text-sm">Phase 1 Complete</p>
                          <p className="text-xs text-gray-600">Judge Identification</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i className="fas fa-clock text-amber-600"></i>
                          </div>
                          <p className="font-semibold text-sm">In Progress</p>
                          <p className="text-xs text-gray-600">Financial Analysis</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i className="fas fa-database text-red-600"></i>
                          </div>
                          <p className="font-semibold text-sm">Pending</p>
                          <p className="text-xs text-gray-600">Statistical Data</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i className="fas fa-file-alt text-gray-600"></i>
                          </div>
                          <p className="font-semibold text-sm">Future</p>
                          <p className="text-xs text-gray-600">Final Report</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Critical Success Factors */}
              <section id="success-factors" className="py-16 bg-gray-50 -mx-4 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <h2 className="tiempos text-3xl font-bold mb-12 text-center">Critical Success Factors</h2>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-6">Evidence Standards</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-check-double text-blue-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Verifiable</h4>
                            <p className="text-sm text-gray-700">Every claim must be traceable to public records or reliable, documented sources. Anonymous tips will not form the basis of any finding.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-balance-scale text-green-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Objective</h4>
                            <p className="text-sm text-gray-700">Analysis relies on factual data and statistical methods. Interpretations grounded in evidence, avoiding speculation or inflammatory language.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-layer-group text-purple-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Comprehensive</h4>
                            <p className="text-sm text-gray-700">Findings corroborated by multiple independent sources to ensure accuracy and avoid reliance on isolated incidents.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-user-tie text-amber-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Professional</h4>
                            <p className="text-sm text-gray-700">Conducted with the professionalism and ethical rigor expected of investigative research, adhering to fairness and due diligence standards.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-gavel text-red-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Legal</h4>
                            <p className="text-sm text-gray-700">All information gathering complies with sunshine laws, FOIA principles, and legal requirements for accessing public records.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="phase-card">
                      <h3 className="text-xl font-semibold mb-6">Impact Objectives</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-eye text-red-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Accountability</h4>
                            <p className="text-sm text-gray-700">Identify judges whose conduct or financial entanglements may warrant further scrutiny, oversight, or disciplinary action.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-search text-blue-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Transparency</h4>
                            <p className="text-sm text-gray-700">Expose hidden financial relationships or systemic biases that undermine public confidence in judicial impartiality.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-tools text-green-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Reform</h4>
                            <p className="text-sm text-gray-700">Provide evidence-based foundation for systemic reforms in campaign finance, disclosure requirements, and judicial oversight.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-scale-balanced text-purple-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Justice</h4>
                            <p className="text-sm text-gray-700">Protect tenant rights by ensuring cases are heard by an impartial judiciary, free from undue influence or bias.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="fas fa-shield-alt text-amber-600 text-sm"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Prevention</h4>
                            <p className="text-sm text-gray-700">Deter future judicial misconduct by shedding light on problematic practices and advocating stronger accountability mechanisms.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="phase-card bg-gradient-to-r from-red-50 to-amber-50 border-red-200">
                      <div className="text-center">
                        <i className="fas fa-exclamation-triangle text-3xl text-amber-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-4">Investigation Challenge</h3>
                        <p className="text-gray-700 max-w-4xl mx-auto">
                          The primary obstacle facing this investigation is the <strong>unavailability of judge-specific statistical data from public records</strong>. While we have successfully identified key judicial figures and established the methodological framework, the lack of accessible data on individual judge decision patterns significantly hinders our ability to perform the detailed statistical analysis required to identify potential bias or irregularities.
                        </p>
                        <p className="text-sm text-gray-600 mt-4">
                          This data gap underscores a broader transparency issue in Marion County's judicial system and highlights the need for improved public access to judicial performance metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-slate-900 text-white py-12 -mx-4 -mb-8 px-4">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="tiempos text-xl font-semibold mb-4">Investigation Status</h3>
                      <p className="text-gray-300 text-sm">
                        This investigation follows a structured, evidence-based methodology to ensure accountability and transparency in Marion County's eviction court system.
                      </p>
                    </div>
                    <div>
                      <h3 className="tiempos text-xl font-semibold mb-4">Key Findings</h3>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Judge Patricia McMath centralizes all Superior Court evictions</li>
                        <li>• 9 township judges handle majority of eviction cases</li>
                        <li>• 84.6% landlord representation vs. 1% tenant representation</li>
                        <li>• Judge-specific data unavailable from public records</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="tiempos text-xl font-semibold mb-4">Next Steps</h3>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Complete financial conflict investigation</li>
                        <li>• Acquire judge-specific statistical data</li>
                        <li>• Analyze decision patterns for bias</li>
                        <li>• Document ethical violations if found</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                      This investigation adheres to the highest standards of professional research and ethical journalism.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
        </div>
    );
};

export default JudicialTab;
