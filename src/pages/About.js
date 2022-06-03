import Layout from "../templates/Layout";

const About = () => {
	return (
		<Layout className="">
			<div className="about-zula grid grid-cols-2 gap-4">
				<div className="flex flex-col gap-4 ">
					<h1 className="text-4xl font-bold text-center">About Zula</h1>
					<p className="">
						​Zula er en lille by i det centrale Eritrea.
						<br /> Den er beliggende nær toppen af Annesley Bay (også kendt som
						Zula-bugten) på Rødehavskysten.
						<br /> ​ ​Zula Restaurant er ejet af Tedros Melake, der er født og
						opvokset i Etiopien/ Eritrea.
					</p>

					<p className="">
						Teddy kom til Danmark som flygtning og besluttede at åbne sin
						restaurant i den københavnske bydel Nørrebro, på Jagtvej for at
						introducere det danske samfund for den nordøstlige afrikanske
						madkultur. Han har altid haft en stor interesse for mad og vin.
					</p>
					<p className="">
						"Jeg drømmer om at blive i Danmark, og jeg har masser af forretnings
						ideer! Jeg vil gerne lave en restaurantkæde."​
					</p>
				</div>
				<div className="about-zula-image">
					<img
						className="zula-icon mx-auto mt-4 font-bold"
						src="assets/tedy_zula.jpeg"
						alt=""
					/>
				</div>
			</div>
		</Layout>
	);
};

export default About;
