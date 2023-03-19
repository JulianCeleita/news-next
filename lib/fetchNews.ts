import { gql } from "graphql-request";

const fetchNews = async (
  category?: Category | String,
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
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          cathegory
          image
          description
          country
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
};

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=7e619d0eb607c493fc7444c161a20ba9&sources=business,sports
