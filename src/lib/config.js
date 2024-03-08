import AboutYaml from "../data/about.yml?raw";
import ProjectYaml from "../data/projects.yml?raw";
import {
	AboutYaml as AboutYamlType,
	ProjectYaml as ProjectYamlType,
} from "../files.d.ts";
import { parseYAML } from "confbox";

/** @returns AboutYamlType */
export function about() {
	return parseYAML(AboutYaml);
}

/** @returns ProjectYaml */
export function project() {
	return parseYAML(ProjectYaml);
}
