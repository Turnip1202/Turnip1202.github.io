const id="guide/index.md",collection="posts",slug="guide",body="\n> Cover image source: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)\n\nThis blog template is built with [Astro](https://astro.build/). For the things that are not mentioned in this guide, you may find the answers in the [Astro Docs](https://docs.astro.build/).\n\n## Front-matter of Posts\n\n```yaml\n---\ntitle: My First Blog Post\npublished: 2023-09-09\ndescription: This is the first post of my new Astro blog.\nimage: ./cover.jpg\ntags: [Foo, Bar]\ncategory: Front-end\ndraft: false\n---\n```\n\n| Attribute     | Description                                                                                                                                                                                                 |\n|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| `title`       | The title of the post.                                                                                                                                                                                      |\n| `published`   | The date the post was published.                                                                                                                                                                            |\n| `description` | A short description of the post. Displayed on index page.                                                                                                                                                   |\n| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |\n| `tags`        | The tags of the post.                                                                                                                                                                                       |\n| `category`    | The category of the post.                                                                                                                                                                                   |\n| `draft`        | If this post is still a draft, which won't be displayed.                                                                                                                                                    |\n\n## Where to Place the Post Files\n\n\n\nYour post files should be placed in `src/content/posts/` directory. You can also create sub-directories to better organize your posts and assets.\n\n```\nsrc/content/posts/\n├── post-1.md\n└── post-2/\n    ├── cover.png\n    └── index.md\n```\n",data={title:"Simple Guides for Fuwari",published:new Date(17119296e5),draft:!1,description:"How to use this blog template.",image:"./cover.jpeg",tags:["Fuwari","Blogging","Customization"],category:"Guides",lang:"",prevTitle:"",prevSlug:"",nextTitle:"",nextSlug:""},_internal={type:"content",filePath:"D:/ACode/A_Code/Project/v1/BlogGitPage/my-blog-app/src/content/posts/guide/index.md",rawData:void 0};export{_internal,body,collection,data,id,slug};