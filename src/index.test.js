import React from 'react';
import { render } from '@testing-library/react';

import { NonogramGrid } from './index';

describe('SimpleCounterComponent Component', () => {
	test('renders the SimpleCounterComponent component', () => {
		render(<NonogramGrid />);
	});
});
