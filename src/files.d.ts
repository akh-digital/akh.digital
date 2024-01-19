type Brand = { title: string; image: string; url: string };
type Tag = { text: string } | { icon: string };

export interface ProjectYaml {
	expertise: {
		title: string;
		tags: Tag[];
	};
	projects: {
		title: string;
	};
	brands: {
		title: string;
		brands: Brand[];
	};
}
