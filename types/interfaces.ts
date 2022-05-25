export interface BookInterface {
	id: number;
	type: ResultType;
	title: string;
	description: null | string;
	downloads: number;
	license: string;
	subjects: string[];
	bookshelves: string[];
	languages: Language[];
	agents: Agent[];
	resources: Resource[];
}

export interface Agent {
	id: number;
	person: string;
	type: AgentType;
}

export enum AgentType {
	Author = 'Author',
}

export enum Language {
	En = 'en',
}

export interface Resource {
	id: number;
	uri: string;
	type: any;
}

export enum ResultType {
	Text = 'Text',
}

export interface BookComponentInterface {
	id: number;
	title: string;
	subjects: string[];
	languages: string[];
	resources: Resource[];
}
