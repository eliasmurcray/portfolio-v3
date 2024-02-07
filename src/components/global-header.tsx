import "../css/global-header.css";

import * as React from "react";

class GlobalHeader extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <header className="global-header">
			<div className="logo">
				<img src="logo.png" alt="Polar bear logo" width="38" height="38" />
				<div className="logo-name">Elias<span>Murcray</span></div>
			</div>
			<nav>
				<ul>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="/blog">Blog</a></li>
				</ul>
			</nav>
		</header>;
	}
}

export default GlobalHeader;
