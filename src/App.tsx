import React from "react";
import Footer from "./Footer";
import FullPage from "./FullPage";
import Header from "./Header";
import palette from "./styleUtils/palette";

import styled from "styled-components";

const Wrapper = styled.div``;

function App() {
	const publicUrl = process.env.PUBLIC_URL;
	return (
		<Wrapper>
			<Header />

			<FullPage backgroundColor={palette.white} image={`${publicUrl}/photo1.png`} />

			<FullPage backgroundColor={palette.green} image={`${publicUrl}/photo2.png`} />

			<FullPage backgroundColor={palette.orange} image={`${publicUrl}/photo3.png`} />

			<FullPage backgroundColor={palette.yellow} image={`${publicUrl}/photo4.png`} />

			<FullPage backgroundColor={palette.blue} image={`${publicUrl}/photo5.png`} />

			<FullPage backgroundColor={palette.red} image={`${publicUrl}/photo6.png`} />

			<Footer />
		</Wrapper>
	);
}

export default App;
