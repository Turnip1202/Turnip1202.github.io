import{b as createAstro,c as createComponent,r as renderTemplate,a as renderComponent}from"./astro/server.BJ5FQhcg.js";import $$PostPage from"./PostPage.B8pL5PTo.js";import $$Pagination from"./Pagination.DP0p7YBd.js";import{P as PAGE_SIZE,$ as $$MainGridLayout}from"./MainGridLayout.Bf7KtL4Q.js";import{a as getSortedPosts}from"./content-utils.BXBaNoMz.js";const $$Astro=createAstro("https://turnip1202.github.io"),getStaticPaths=async({paginate:e})=>e(await getSortedPosts(),{pageSize:PAGE_SIZE}),$$=createComponent((async(e,t,a)=>{const o=e.createAstro($$Astro,t,a);o.self=$$;const{page:r}=o.props,n=r.data.length;return renderTemplate`${renderComponent(e,"MainGridLayout",$$MainGridLayout,{},{default:e=>renderTemplate` ${renderComponent(e,"PostPage",$$PostPage,{page:r})} ${renderComponent(e,"Pagination",$$Pagination,{class:"mx-auto onload-animation",page:r,style:`animation-delay: calc(var(--content-delay) + ${50*n}ms)`})} `})}`}),"D:/ACode/A_Code/Project/v1/BlogGitPage/my-blog-app/src/pages/[...page].astro",void 0),$$file="D:/ACode/A_Code/Project/v1/BlogGitPage/my-blog-app/src/pages/[...page].astro",$$url="/my-blog-astro/[...page]/",_page=Object.freeze(Object.defineProperty({__proto__:null,default:$$,file:$$file,getStaticPaths:getStaticPaths,url:$$url},Symbol.toStringTag,{value:"Module"}));export{_page as _};