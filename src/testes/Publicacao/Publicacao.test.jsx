import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Publicações from '../components/Publicações';  // ajuste o caminho conforme necessário

const mockPublicacoes = [
  { id: 1, titulo: 'Publicação 1', conteudo: 'Conteúdo da publicação 1' },
  { id: 2, titulo: 'Publicação 2', conteudo: 'Conteúdo da publicação 2' },
];

describe('Publicações Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Publicações publicacoes={mockPublicacoes} />);
    expect(getByText(/Publicação 1/i)).toBeInTheDocument();
    expect(getByText(/Publicação 2/i)).toBeInTheDocument();
  });

  it('displays the correct content', () => {
    const { getByText } = render(<Publicações publicacoes={mockPublicacoes} />);
    expect(getByText(/Conteúdo da publicação 1/i)).toBeInTheDocument();
    expect(getByText(/Conteúdo da publicação 2/i)).toBeInTheDocument();
  });
});
