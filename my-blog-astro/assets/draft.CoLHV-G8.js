import{c as createComponent,r as renderTemplate,m as maybeRenderHead,u as unescapeHTML}from"./astro/server.BJ5FQhcg.js";const html='<section><h1 id="this-article-is-a-draft">This Article is a Draft<a class="anchor" href="#this-article-is-a-draft"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1><p>This article is currently in a draft state and is not published. Therefore, it will not be visible to the general audience. The content is still a work in progress and may require further editing and review.</p><p>When the article is ready for publication, you can update the “draft” field to “false” in the Frontmatter:</p><pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#79B8FF;font-weight:bold">---</span></span>\n<span class="line"><span style="color:#E1E4E8">title: Draft Example</span></span>\n<span class="line"><span style="color:#E1E4E8">published: 2024-01-11T04:40:26.381Z</span></span>\n<span class="line"><span style="color:#E1E4E8">tags: [Markdown, Blogging, Demo]</span></span>\n<span class="line"><span style="color:#E1E4E8">category: Examples</span></span>\n<span class="line"><span style="color:#E1E4E8">draft: false</span></span>\n<span class="line"><span style="color:#79B8FF;font-weight:bold">---</span></span>\n<span class="line"></span></code></pre></section>',frontmatter={title:"Draft Example",published:"2022-07-01T00:00:00.000Z",tags:["Markdown","Blogging","Demo"],category:"Examples",draft:!0,minutes:1,words:72,excerpt:"This article is currently in a draft state and is not published. Therefore, it will not be visible to the general audience. The content is still a work in progress and may require further editing and review."},file="D:/ACode/A_Code/Project/v1/BlogGitPage/my-blog-app/src/content/posts/draft.md",url=void 0;function rawContent(){return'\n# This Article is a Draft\n\nThis article is currently in a draft state and is not published. Therefore, it will not be visible to the general audience. The content is still a work in progress and may require further editing and review.\n\nWhen the article is ready for publication, you can update the "draft" field to "false" in the Frontmatter:\n\n```markdown\n---\ntitle: Draft Example\npublished: 2024-01-11T04:40:26.381Z\ntags: [Markdown, Blogging, Demo]\ncategory: Examples\ndraft: false\n---\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"this-article-is-a-draft",text:"This Article is a Draft#"}]}const Content=createComponent(((e,t,a)=>{const{layout:n,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};