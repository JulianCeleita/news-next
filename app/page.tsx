import fetchNews from "../lib/fetchNews";
import { categories } from "../constants";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news)

  return <div></div>;
}
export default Homepage;
