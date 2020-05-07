import React from 'react';
import styled from '@emotion/styled';
import ErrorBoundary from 'react-error-boundary';
import { useStitchAuth } from './StitchAuth';
import { Card, CardBody, Button } from 'reactstrap';

Login.propTypes = {};
export default function Login() {
	const { actions } = useStitchAuth();
	return (
		<ErrorBoundary>
			<Layout className='Layout'>
				<LoginCard className='LoginCard'>
					<CardBody>
						<ButtonRow className='ButtonRow'>
							<LoginButton
								className='LoginButton'
								provider='anonymous'
								onClick={() => actions.handleLogin('anonymous')}>
								Log In as a Guest User
							</LoginButton>
							<LoginButton
								className='LoginButton'
								provider='google'
								onClick={() => actions.handleLogin('google')}>
								Log In with Google
							</LoginButton>
						</ButtonRow>
					</CardBody>
				</LoginCard>
			</Layout>
		</ErrorBoundary>
	);
}
const Layout = styled.div`
	background: #eeeeee;
	height: 100%;
	padding: 20px;
`;
const LoginCard = styled(Card)`
	margin-left: auto;
	margin-right: auto;
	max-width: 450px;
`;
const LoginButton = styled(Button)`
	margin-top: 10px;
	:first-of-type {
		margin-top: 0px;
	}
	background-color: #3a33ff;
`;
const ButtonRow = styled.div`
	display: flex;
	flex-direction: column;
`;