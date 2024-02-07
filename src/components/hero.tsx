import "../css/hero.css";

import * as React from "react";

class Hero extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	componentDidMount() {
		const items = [...document.querySelector(".content").children].slice(0, 3);
		items.forEach((item: HTMLDivElement, i) => {
			item.style.opacity = "0";
			item.style.animation = `slide-up 1s ${i * 80}ms ease-in-out forwards`;
		});
		
		const ids = ["4588843984011264","4733225747136512","5332087555538944","5682299737522176","6415872009486336","6570069814460416","6649318067453952","5331465393717248","5474895617114112","5741521562550272","6458823309574144","6622069756837888"];
		const slider = document.getElementById("thumbnail-slider") as HTMLDivElement;
		ids.forEach((id) => {
			let img = document.createElement("img");
			img.src = id + ".png";
			img.className = "project-thumbnail";
			img.style.right = `${((Math.random() * 270) | 0) + 80}px`;
			let s = [100, 140, 190][(Math.random() * 3) | 0];
			let speed = [50, 70, 80][(Math.random() * 3) | 0] * 5;
			let curr = (Math.random() * -window.innerHeight - s + window.innerHeight) | 0;
			const c = curr;
			img.style.width = s + "px";
			img.style.zIndex = s.toString();
			img.style.filter = `blur(${[190, 140, 100].indexOf(s)}px)`;
			img.style.top = curr + "px";
			slider.append(img);

			img.ontransitionend = () => {
				if (img.getBoundingClientRect().top - slider.getBoundingClientRect().top - window.innerHeight > 0) {
					curr = c - window.innerHeight;
					s = [100, 140, 190][(Math.random() * 3) | 0];
					img.style.width = s + "px";
					img.style.zIndex = s.toString();
					img.style.filter = `blur(${[190, 140, 100].indexOf(s)}px)`;
					img.style.top = curr + "px";
					speed = [100, 120, 150][(Math.random() * 3) | 0] * 5;
					img.style.transition = "none";
					void(slider.offsetHeight);
					img.style.transition = "top 5s linear";
				} 

				curr += speed;
				img.style.top = curr + "px";
			};

			void (slider.offsetHeight);
			curr += speed;
			img.style.top = curr + "px";
		});
	}

	render(): React.JSX.Element {
		return <section className="hero">
			<header className="hero-header">
				<nav>
					<ul>
						<li><a href="#projects">#projects</a></li>
						<li><a href="#experience">#experience</a></li>
						<li><a href="/blog">/blog</a></li>
					</ul>
				</nav>
			</header>
			<div className="content">
				<h1>Hi There, I'm Elias!</h1>
				<p>I write code for websites, robots, games, and more. I really like cats, Vim, and TypeScript.</p>
				<a href="/blog">Check out my blog</a>
			</div>
			<div id="thumbnail-slider"></div>
			<div className="fade-overlay"></div>
		</section>;
	}
}

export default Hero;
