import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


//  const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0ca6fb35c9msh6df38c50a5856bdp135c53jsnec95387a78c1' );
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');

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