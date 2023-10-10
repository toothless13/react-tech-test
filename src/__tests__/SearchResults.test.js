import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
  const validProps = { img: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" };

  it('renders correctly', () => {
    const { asFragment } = render(<SearchResults searchResults={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the image to the screen', () => {
    render(<SearchResults searchResults={validProps} />);

    expect(screen.getByAltText('first search result')).toBeInTheDocument();
  });
});