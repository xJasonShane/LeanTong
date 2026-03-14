import wikiData from "@/data/wiki/wiki-data.json";

export interface WikiArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
  relatedFormulas: string[];
}

export function getAllWikiArticles(): WikiArticle[] {
  return wikiData.articles;
}

export function getWikiArticleById(id: string): WikiArticle | undefined {
  return wikiData.articles.find((article) => article.id === id);
}

export function searchWikiArticles(query: string): WikiArticle[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return getAllWikiArticles();

  return wikiData.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.summary.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getAllCategories(): string[] {
  const categories = new Set(wikiData.articles.map((article) => article.category));
  return Array.from(categories);
}
