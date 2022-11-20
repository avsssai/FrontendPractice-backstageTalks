import React from "react";
import styled from "styled-components";

const FullPageWrapper = styled.section<{ background: string }>`
	height: 100%;
	display: flex;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const CurrentWrapper = styled(FullPageWrapper)`
	background: ${(p) => `var(--color-${p.background})`};
	/* padding-top: 72px; */
`;

const ImageContainer = styled.div`
	display: block;
	width: 80%;
	max-width: 420px;
	text-align: center;
	/* margin-top: -90px; */
	/* padding-top: 35px; */
`;

const Content = styled.div`
	font-weight: 600;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-align: center;
	font-family: var(--font-secondary);
`;

const IssueItem = styled.div`
	font-size: 1.125rem;
`;
const BuyItem = styled.div`
	font-size: 0.9rem;
`;
const SelectStoresItem = styled.div`
	font-size: 0.9rem;
`;

const ColoredText = styled.span`
	text-decoration: none;
	/* color: var(--color-pink); */
	color: ${(p) => `var(--color-${p.color})`};
	cursor: pointer;
`;

interface IProps {
	backgroundColor: string;
	image?: string;
}

function FullPage(props: IProps) {
	return (
		<CurrentWrapper background={props.backgroundColor}>
			<ImageContainer>
				<img src={props.image} alt='book release' />
			</ImageContainer>
			<Content>
				<IssueItem>Issue #{1}</IssueItem>
				<BuyItem>
					{" "}
					<ColoredText color={props.backgroundColor === "white" ? "pink" : "white"}>BUY HERE</ColoredText>
				</BuyItem>
				<SelectStoresItem>
					or in{" "}
					<ColoredText color={props.backgroundColor === "white" ? "pink" : "white"}>
						selected stores
					</ColoredText>
				</SelectStoresItem>
			</Content>
		</CurrentWrapper>
	);
}

export default FullPage;
