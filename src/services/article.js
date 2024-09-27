import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY; 


// const options = {
// 	method: 'GET',
// 	hostname: 'article-extractor-and-summarizer.p.rapidapi.com',
// 	port: null,
// 	path: '/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2',
// 	headers: {
// 		'x-rapidapi-key': 'cba7ebed3cmshafe960844e9ea7ap180deejsnce71d57bac9c',
// 		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
// 	}
// };


export const articleApi = createApi({
    reducerPath: 'articleApi', 
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
		prepareHeaders: (headers) => {
			headers.set('x-rapidapi-key',rapidApiKey);
			headers.set('x-rapidapi-host','article-extractor-and-summarizer.p.rapidapi.com');

			return headers;
		}
	}), 
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});
 
export const { useLazyGetSummaryQuery } = articleApi;