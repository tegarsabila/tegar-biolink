import {useState, useEffect} from 'react';
import axios from "axios";
import '../styles/Header.css';

const Header = ({ name, title, img }) => {
	const [data, getData] = useState('');
	const fetchData = async () => {
		const baseUrl = 'https://api.github.com/users/tegarsabila'
		try {
			const response = await axios.get(baseUrl);
			console.log(response);
			getData(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, [data]);

  return (
		<header class='content'>
			<nav class='logo'>
				<img src={img.src} alt={img.alt} className="animate__animated animate__slideInDown animate__delay-0.5s" />
				<h1 className='animate__animated animate__slideInUp animate__delay-0.6s'>{name}</h1>
				<p className='animate__animated animate__slideInUp animate__delay-0.7s'>{title}</p>
				<div className="info animate__animated animate__slideInUp animate__delay-0.8s">
					<div className="follower">
						<h3>Followers</h3>
						<p>{data.followers}</p>
					</div>
					<div className="following">
						<h3>Following</h3>
						<p>{data.following}</p>
					</div>
					<div className="project">
						<h3>Project</h3>
						<p>{data.public_repos}</p>
					</div>
				</div>
			</nav>
		</header>
  );
};

export default Header;
