// import { createClient } from 'newt-client-js'
import { newtClient } from "../lib/newt";
import type { Article, Tag } from "../lib/newt";

// タグから記事一覧を取得する
export const getArticleByTags = async (tagId: string) => {
	const tagedArticles = await newtClient.getContents<Article>({
		appUid: "blog",
		modelUid: "article",
		query: {
			select: ["title", "slug", "body", "tags", "coverImage", "author"],
			tags: {
				in: [tagId],
			},
		},
	});
	const items = tagedArticles.items;
	return items;
};

// 価格から記事一覧を取得する
export const getArticleByPrice = async (price: string) => {
	console.log('price:', price);
	const Articles = await newtClient.getContents<Article>({
		appUid: "blog",
		modelUid: "article",
		query: {
			select: ["title", "slug", "body", "tags", "coverImage", "price"],
			price: price,
		},
	},);
	console.log('Articles:', Articles);

	const items = Articles.items;
	return items;
}