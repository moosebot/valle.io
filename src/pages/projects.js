import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./projects.css"

const projects = [
	{
		'name': 'raceCondition (in-progress)',
		'description': 'Web app that allows developers to competitively solve solutions and battle against their friends!',
		'logoUrl': 'https://i.imgur.com/AiuaEDi.png',
		'technologies': [
			{ 'name': 'React', 'url': 'https://i.imgur.com/2M2VsUq.png', 'source': 'https://reactjs.org/' },
			{ 'name': 'Node.js', 'url': 'https://i.imgur.com/0unEjS6.png', 'source': 'https://nodejs.org/' },
			{ 'name': 'Docker', 'url': 'https://i.imgur.com/sOzQJP6.png', 'source': 'https://www.docker.com/' }
		]
	},
	{
		'name': 'hammy-bot',
		'description': 'Google Hangouts bot that provides data about links and performs other utility functions',
		'gitRepo': 'https://github.com/austinvalle/hammy-bot',
		'projectUrl': 'https://github.com/austinvalle/hammy-bot',
		'logoUrl': 'https://raw.githubusercontent.com/austinvalle/hammy-bot/master/logo-only.png',
		'technologies': [
			{ 'name': 'Node.js', 'url': 'https://i.imgur.com/0unEjS6.png', 'source': 'https://nodejs.org/' },
			{ 'name': 'Heroku', 'url': 'https://i.imgur.com/ykKgOQd.png', 'source': 'https://www.heroku.com/' }
		]
	},
	{
		'name': 'gotube',
		'description': 'golang CLI for downloading youtube videos/audio and renaming metadata',
		'gitRepo': 'https://github.com/austinvalle/gotube',
		'projectUrl': 'https://github.com/austinvalle/gotube',
		'logoUrl': 'https://i.imgur.com/zN76cbU.png',
		'technologies': [
			{ 'name': 'golang', 'url': 'https://i.imgur.com/Rw9cs8N.png', 'source': 'https://golang.org/' }
		]
	},
	{
		'name': 'Move Your Pain Away (private)',
		'description': 'Web app built for client that allows physical therapy patients to rehabilitate injuries by completing video lessons',
		'logoUrl': 'https://i.imgur.com/bfI20su.png',
		'technologies': [
			{ 'name': 'React', 'url': 'https://i.imgur.com/2M2VsUq.png', 'source': 'https://reactjs.org/' },
			{ 'name': 'Node.js', 'url': 'https://i.imgur.com/0unEjS6.png', 'source': 'https://nodejs.org/' },
			{ 'name': 'AWS Lambda', 'url': 'https://i.imgur.com/ReBfBIe.png', 'source': 'https://aws.amazon.com/lambda/features/' },
			{ 'name': 'AWS Dynamo', 'url': 'https://i.imgur.com/yWefGYI.png', 'source': 'https://aws.amazon.com/dynamodb/' }
		]
	}
];

export default function Projects() {
	return (
		<Layout>
			<div className="io-container io-projects-container">
				{
					projects.map((project, i) => (
						<div className="io-project-card" key={i}>
							<a target="_blank" href={project.gitRepo} rel="noopener noreferrer">
								<img className="io-project-picture" src={project.logoUrl} alt={project.name} />
							</a>
							<div className="io-project-content">
								<div className="io-project-header">
									<h2 style={{ marginRight: "auto" }}>{project.name}</h2>
									{
										project.gitRepo != null && (
											<a target="_blank" href={project.gitRepo} className="io-icon" rel="noopener noreferrer">
												<FontAwesomeIcon className="io-icon" icon={faGithub} />
											</a>
										)
									}
								</div>
								<p style={{ marginBottom: "auto" }}>{project.description}</p>
								<div style={{ marginTop: "auto", marginBottom: "auto", padding: "10px" }}>
									{
										project.technologies != null && project.technologies.map((tech, i) => (
											<a target="_blank" href={tech.source} rel="noopener noreferrer" key={i}>
												<div className="io-tooltip">
													<img className="io-project-tech-icon" src={tech.url} alt={tech.name} />
													<span className="io-tooltip-text">{tech.name}</span>
												</div>
											</a>
										))
									}
								</div>
							</div>
						</div>
					))
				}
			</div>
		</Layout>
	);
}
