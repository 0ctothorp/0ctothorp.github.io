import type { MarkdownHeading } from "astro";

export interface Heading extends MarkdownHeading { subheadings?: Array<Heading> };