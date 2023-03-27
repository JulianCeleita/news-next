import fetchNews from "../lib/fetchNews";
import { categories } from "../constants";

async function Homepage() {
  const news: NewsResponse | undefined = await fetchNews(categories.join(","));
  
  if (news) {
    console.log(news);

    return <div></div>;
  }
}

export default Homepage;
