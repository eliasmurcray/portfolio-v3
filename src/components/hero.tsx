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
		
		const ids = ["4588843984011264","4726917411422208","5332087555538944","5568335758540800","6041438572822528","4733225747136512","5388647456882688","5682299737522176","6458823309574144","6649318067453952","5331465393717248","5474895617114112","5741521562550272","6570069814460416"];
		const slider = document.getElementById("thumbnail-slider") as HTMLDivElement;
		const thumbnail_sizes = [100, 140, 150, 190];
		ids.forEach((id) => {
			let img = document.createElement("img");
			img.src = id + ".png";
			img.className = "project-thumbnail";
			img.style.right = `${((Math.random() * 250) | 0) + 100}px`;
			let s = thumbnail_sizes[(Math.random() * thumbnail_sizes.length) | 0];
			let speed = [35, 50, 80][(Math.random() * 3) | 0] * 4;
			let curr = (Math.random() * -window.innerHeight - s + window.innerHeight) | 0;
			const c = curr;
			img.style.width = s + "px";
			img.style.zIndex = s.toString();
			img.style.filter = `blur(${thumbnail_sizes.slice().reverse().indexOf(s)}px)`;
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
					speed = [100, 120, 150][(Math.random() * 3) | 0] * 4;
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
				<h1>Elias Murcray <div className="sideways-text">Web Designer</div></h1>
				<p>I'm a passionate web designer with a keen eye for detail and a love for crafting beautiful and functional digital experiences.</p>
				<a href="/blog">Check out my blog</a>
			</div>
			<div id="thumbnail-slider"></div>
			<div className="fade-overlay"></div>
		</section>;
	}
}

export default Hero;
