import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
	padding: 0 15px;
	padding-top: 30px;
	background: var(--color-red);
	padding-bottom: 50px;
	font-family: var(--font-secondary);
`;

const Text = styled.div`
	font-size: 1.125rem;
	font-weight: 600;
	text-align: center;
	line-height: 1.4;
`;

const CopyrightText = styled(Text)`
	font-size: 0.8rem;
	font-weight: normal;
	margin-top: 4px;
	margin-bottom: 2rem;
`;

const PrivacyPolicy = styled(Text)`
	text-decoration: underline;
	cursor: pointer;
	margin-bottom: 3rem;
`;
const Email = styled(Text)`
	text-decoration: underline;
	cursor: pointer;
`;

const Underline = styled.span`
	text-decoration: underline;
`;

export default function Footer() {
	return (
		<FooterWrapper>
			<Text>
				Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions
				shape and influence this complex world—to have a chance to make the right ones, we need to talk.
			</Text>
			<CopyrightText>
				© 2022 <Underline>Published by studio Milk</Underline>
			</CopyrightText>
			<PrivacyPolicy>Privacy Policy</PrivacyPolicy>
			<Email>info@backstagetalks.com</Email>
		</FooterWrapper>
	);
}
