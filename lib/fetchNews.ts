import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
  query MyQuery(
    $access_key: String!
    $categories: String!
    $keywords: String
    ) {
    myQuery(
      access_key: $access_key
      categories: $categories
      countries: "us, gb"
      keywords: $keywords
      sort: "published_desc"
    ) {
      data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
  `;
  const res = await fetch(
    "https://edison.stepzen.net/api/telling-gnat/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log(
    "LOADING NEW DATA FROM API for category >>> ",
    category,
    keywords
  );
  try {
    const newsResponse = await res.json();
    console.log(newsResponse);
    const news = sortNewsByImage(newsResponse.data.myQuery);
    return news;
  } catch (e) {
    console.log(e, "Method fetchNews");
  }
};

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=7e619d0eb607c493fc7444c161a20ba9&sources=business,sports
