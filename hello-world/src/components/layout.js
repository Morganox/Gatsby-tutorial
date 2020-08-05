import React from "react"
// highlight-start
import { Link } from "gatsby"

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		<Link to={props.to}>{props.children}</Link>
	</li>
)
// highlight-end

export default function Layout({ children }) {
	return (
		<div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
			{/* highlight-start */}
			<header style={{ marginBottom: `1.5rem` }}>
				<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
					<h3 style={{ display: `inline` }}>MySweetSite</h3>
				</Link>
				<ul style={{ listStyle: `none`, float: `right` }}>
					<ListLink to="/">Home</ListLink>
					<ListLink to="/about/">About</ListLink>
					<ListLink to="/contact/">Contact</ListLink>
				</ul>
			</header>
			{/* highlight-end */}
			{children}
		</div>
	)
}