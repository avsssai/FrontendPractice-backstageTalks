import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	left: 15px;
	padding-top: 12px;
	top: 0;
`;

const Logo = styled.div`
	text-transform: uppercase;
	font-size: 1.4rem;
	height: 60px;
	letter-spacing: -1px;
	font-weight: 800;
`;
export default function Header() {
	return (
		<Wrapper>
			<Logo>Backstage talks</Logo>
		</Wrapper>
	);
}
