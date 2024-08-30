export interface GlobalYaml {
	title: string;
	author: string;
	description: string;
	keywords: string;
	domain: string;
	developer: string;
	developer_link: string;
	email: string;
	location: string;
	cords: string[];
	language: string;
}

type Brand = { title: string; image: string; url: string };
type Tag = { text: string } | { icon: string };

export interface ProjectYaml {
	expertise: {
		title: string;
		desc: string;
		tags: Tag[];
	};
	projects: {
		title: string;
	};
	brands: {
		title: string;
		post_fix: string;
		brands: Brand[];
	};
}

type Social = { title: string; url: string };
type CV = { title: string; url: string };
type Skills = { title: string; list: string[] };

export interface AboutYaml {
	about: {
		title: string;
		desc: string;
	};
	social: {
		title: string;
		second_title: string;
		list: Social[];
	};
	cv: {
		title: string;
		second_title: string;
		list: CV[];
	};
	skills: Skills[];
}
