import React from 'react';
import { render, screen } from '@testing-library/react';

import App from 'App';

describe('<App/>', () => {
	beforeAll(() => {
		render(<App/>);
	});

	test('renders without problems', () => {
		const title = screen.getByText(/nook shopping/i);
		expect(title).toBeInTheDocument();
	});
});
