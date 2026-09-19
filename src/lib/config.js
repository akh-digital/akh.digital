import aboutYaml from "../data/about.yml";
import projectYaml from "../data/projects.yml";
import globalYaml from "../data/global.yml";
import aboutRuYaml from "../data/about.ru.yml";
import * as russian from "../data/ru.js";

export function localeFromPath(pathname = "/") {
	return pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
}

export function localizedPath(pathname, locale) {
	const path = pathname.replace(/^\/ru(?=\/|$)/, "") || "/";
	return locale === "ru" ? `/ru${path === "/" ? "" : path}` : path;
}

export function about(locale = "en") {
	return locale === "ru" ? aboutRuYaml : aboutYaml;
}

export function project(locale = "en") {
	return locale === "ru" ? russian.project : projectYaml;
}

export function global(locale = "en") {
	return locale === "ru" ? russian.global : globalYaml;
}

export function projectTranslation(slug, locale = "en") {
	if (locale !== "ru") return undefined;

	const translationKey = Object.keys(russian.projectTranslations).find(
		(key) => key.toLowerCase() === slug?.toLowerCase(),
	);
	return translationKey ? russian.projectTranslations[translationKey] : undefined;
}
