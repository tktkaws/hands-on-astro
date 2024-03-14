// import { createClient } from 'newt-client-js'
import { newtClient } from "../lib/newt";

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