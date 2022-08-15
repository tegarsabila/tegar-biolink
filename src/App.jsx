import { useState, useEffect } from 'react';
import { Header, Body, BodyItem, Footer } from './components';
import { user, links } from './data';

const App = () => {
  const [state, setState] = useState({
    links,
    user,
  });

  return (
		<>
			<div className="App">
				<div className="content1">
					<Header {...state.user} />
					<Body>
						{state.links.map((link, index) => (
							<BodyItem key={index} {...link} />
						))}
					</Body>
				</div>
				<Footer />
			</div>	
			<div className="area">
				<ul className="circles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
    </>
  );
};

export default App;
