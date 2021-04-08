import React from 'react'
import { render , screen, waitFor } from '@testing-library/react'
import Display from '../Display'
import { testShow } from './Show.test'
import { fetchShow as mockFetchShow } from '../../api/fetchShow'
import userEvent from '@testing-library/user-event'


jest.mock('../../api/fetchShow')

test('Display renders', () => {
    render(<Display/>)
})

test('fetches and renders show data', async () => {
    render(<Display/>)
    mockFetchShow.mockResolvedValueOnce({
        data: testShow
    })

    const btn = screen.getByRole("button")
    userEvent.click(btn)

    await waitFor( () => {
        const show = screen.getByTestId('show-container')
        expect(show).toBeDefined();
    } )
})

// test('amount of select options rendered is equal to the amount of seasons', async () => {
//     render(<Display/>)
//     const btn = screen.getByRole("button")
//     userEvent.click(btn)

//     await waitFor( () => {
//         const show = screen.getByTestId('show-container')
//         expect(show).toBeDefined();
//     } )
//     const seasons = screen.getAllByTestId('season-option')
//     expect(seasons.length).toBe(4)
// })
















///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.