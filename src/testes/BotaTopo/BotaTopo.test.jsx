import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BotaoTopo from '../components/BotaoTopo';  // ajuste o caminho conforme necessário

describe('BotaoTopo Component', () => {
  beforeEach(() => {
    // Configurações iniciais antes de cada teste
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    // Limpa as configurações após cada teste
    window.scrollTo.mockClear();
  });

  it('renders correctly when scrolled down', () => {
    // Simula a rolagem da página
    const { queryByText } = render(<BotaoTopo />);
    fireEvent.scroll(window, { target: { scrollY: 1000 } });
    expect(queryByText('↑')).toBeInTheDocument();
  });

  it('does not render when not scrolled down', () => {
    // Renderiza o componente sem rolar a página
    const { queryByText } = render(<BotaoTopo />);
    expect(queryByText('↑')).toBeNull();
  });

  it('scrolls to top when clicked', () => {
    // Simula a rolagem da página e o clique no botão
    const { getByText } = render(<BotaoTopo />);
    fireEvent.scroll(window, { target: { scrollY: 1000 } });
    const button = getByText('↑');
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
