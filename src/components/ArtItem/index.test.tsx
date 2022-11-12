import { screen, waitFor } from "@testing-library/react";
import ArtItem from "./index";
import { renderWithQueryProvider } from "../../utils/testUtils";

test('for an art item, submit button is disabled until a rating is selected', async () => {
  renderWithQueryProvider(<ArtItem id={1} disabled={false} />)

  await waitFor(() => expect(screen.getByText('Plate One from Collection of Various Vases')).toBeInTheDocument())
})

test('for an art item, clicking numbered button updates rating display below image to be that number', () => {
})

test('for an art item, clicking numbered button updates rating display below image to be that number, clicking two different numbers one after the other', () => {
})

test('for an art item, clicking submit POSTs update, displays a toast success message, hides buttons', () => {
  // The endpoint and payload for the submit button can be found in the submit method in `App.tsx`.
  // For the purpose of this test, please use a mock function instead.
});
