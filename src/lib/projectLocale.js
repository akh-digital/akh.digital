export function isProjectForLocale(project, locale) {
	const fileName = locale === "ru" ? "index.ru.md" : "index.md";
	return project.filePath?.replaceAll("\\", "/").endsWith(`/${fileName}`) ?? false;
}
