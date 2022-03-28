import emoji from "react-easy-emoji";

export const greetings = {
	name: "Revat Saharan",
	title: "Hi all, I'm Revat Saharan",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks.",
	resumeLink: `${process.env.NEXT_PUBLIC_RESUME_LINK}`,
};

export const openSource = {
	githubUserName: "revatSAHARAN",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com/revat.saharan.50",
	instagram: `${process.env.NEXT_PUBLIC_INSTAGRAM}`,
	// twitter: "https://twitter.com/revat_saharan",
	github: "https://github.com/revatSAHARAN",
	linkedin: `${process.env.NEXT_PUBLIC_LINKED_IN}`,
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nextjs",
			fontAwesomeClassname: "logos:nextjs-icon",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "MERN Stack", //Insert stack or technology you have experience in
		progressPercentage: "87", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend / Design",
		progressPercentage: "90",
	},
	{
		Stack: "ReactJS",
		progressPercentage: "93",
	},
	{
		Stack: "Backend",
		progressPercentage: "85",
	},
	{
		Stack: "C/C++",
		progressPercentage: "95",
	},
];

export const educationInfo = [
	{
		schoolName: "University Institute of Engineering and Technology, Kurukshetra University",
		subHeader: "Bachelor of Technology in Computer Science",
		duration: "September 2019 - June 2023",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	// {
	// 	schoolName: "Wisdom World School",
	// 	subHeader: "Master of Science in Computer Science",
	// 	duration: "September 2017 - April 2019",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	schoolName: "Stanford University",
	// 	subHeader: "Bachelor of Science in Computer Science",
	// 	duration: "September 2013 - April 2017",
	// 	desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
	// 	descBullets: [
	// 		"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: "/img/icons/common/google.svg",
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: "/img/icons/common/github.svg",
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/revatSAHARAN",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/revatSAHARAN",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Shashwat ",
		feedback:
			"",
	},
	{
		name: "Manish",
		feedback:
			"",
	},
];
