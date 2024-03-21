import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('CommentList testing', () => {
    it('renders no book comments on load', () => {
      render(<App />)
      const allTheBookComments = screen.queryAllByTestId('comment')
      expect(allTheBookComments).toHaveLength(0)
    })
  
    it('renders comments clicking on a valid book', async () => {
      render(<App />)
      const allTheBookCards = screen.getAllByTestId('book-card')
      const firstBookCard = allTheBookCards[0]
      fireEvent.click(firstBookCard)
      const allTheBookComments = await screen.findAllByTestId('comment')
      expect(allTheBookComments).not.toHaveLength(0)
    })
  })