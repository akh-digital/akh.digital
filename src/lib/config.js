import AboutYaml from "../data/about.yml?raw";
import ProjectYaml from "../data/projects.yml?raw";
import { parseYAML } from "confbox";

/** @returns {import('../files.js').AboutYaml} */
export function about() {
	return parseYAML(AboutYaml);
}

/** @returns {import('../files.js').ProjectYaml}} */
export function project() {
	return parseYAML(ProjectYaml);
}
