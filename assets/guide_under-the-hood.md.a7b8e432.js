import{_ as e,c as a,o as t,a as n}from"./app.9fd3944e.js";const m='{"title":"Under the hood","description":"","frontmatter":{},"headers":[{"level":2,"title":"Processing flow","slug":"processing-flow"},{"level":2,"title":"Context","slug":"context"},{"level":2,"title":"Analysis","slug":"analysis"},{"level":2,"title":"Documentation","slug":"documentation"},{"level":3,"title":"Installation","slug":"installation"},{"level":3,"title":"Workflow","slug":"workflow"}],"relativePath":"guide/under-the-hood.md","lastUpdated":1646692916946}',o={},i=n(`<h1 id="under-the-hood" tabindex="-1">Under the hood <a class="header-anchor" href="#under-the-hood" aria-hidden="true">#</a></h1><h2 id="processing-flow" tabindex="-1">Processing flow <a class="header-anchor" href="#processing-flow" aria-hidden="true">#</a></h2><ul><li>The <code>Generator</code> iterates over the given sources (Symfony <code>Finder</code>, file/directoy list, etc)</li><li>The configured analyser (<code>AnalyserInterface</code>) reads the files and builds an <code>Analysis</code> object. Default (as of v4) is the <code>ReflectionAnalyser</code>. Alternatively, there is the <code>TokenAnalyser</code> which was the default in v3.</li><li>The <code>Analysis</code> object and its annotations are then processed by the configured processors.</li><li>If enabled, the analysis/annotations are validated.</li><li>The root <code>OpenApi</code> annotation then contains all annotations and is serialized into YAML/JSON.</li></ul><h2 id="context" tabindex="-1"><code>Context</code> <a class="header-anchor" href="#context" aria-hidden="true">#</a></h2><p>Each annotation is associated with a unique <code>Context</code> instance. This contains details, collected by the parser/analyser, about the PHP context where the annotation was found.</p><p>Typically, there will be a processor that uses the data to augment/enrich the annotation.</p><p><strong>Examples of the data collected:</strong></p><ul><li>class/interface/trait/enum names</li><li>property names</li><li>doctype or native type hints</li><li>file name and line number</li></ul><h2 id="analysis" tabindex="-1">Analysis <a class="header-anchor" href="#analysis" aria-hidden="true">#</a></h2><p>Contains all detected annotations and other relevant meta data.</p><p>It uses a <code>SplObjectStorage</code> instance to store the parsed annotations.</p><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><p>This documentation is generated with <a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VitePress</a></p><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token builtin class-name">cd</span> docs
<span class="token function">npm</span> <span class="token function">install</span> vitepress git-directory-deploy
</code></pre></div><h3 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-hidden="true">#</a></h3><ul><li>Edit <code>.md</code> files in the <code>docs</code> folder</li><li>Update <code>master</code></li><li><code>cd docs &amp;&amp; npm run deploy</code></li></ul><p>The last step requires commit rights on <code>zircote/swagger-php</code>.</p>`,18),s=[i];function l(d,r,c,h,p,u){return t(),a("div",null,s)}var g=e(o,[["render",l]]);export{m as __pageData,g as default};
