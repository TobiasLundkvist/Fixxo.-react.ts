import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Showcase from '../section/ShowcaseSection';


test('should render text component', () => {
    render(<Showcase />);
    const showCaseElement = screen.getByTestId("showcaseTest");
    expect(showCaseElement).toBeInTheDocument();
    expect(showCaseElement).toHaveTextContent('SALE UP');
})
