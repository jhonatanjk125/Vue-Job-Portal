import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import userEvent from '@testing-library/user-event';

describe('MainNav', () => {
  it('displays company name', () => {
  render(MainNav);
  const companyName = screen.getByText('G Careers')
  expect(companyName).toBeInTheDocument();
});

  it('display menu items for navigation', () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuText = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuText).toEqual(['Teams', 'Locations', 'Life at G careers', 'How we hire', 'Students', 'Jobs']);
  });
  describe('when the user logs in', () => {
    it('display user profile picture', async () => {
      render(MainNav);
      let profileImage = screen.queryByRole('img', { name: /user profile picture/i })
      expect(profileImage).not.toBeInTheDocument

      const loginButton = screen.getByRole('button', { name: /sign in/i, });
      await userEvent.click(loginButton);
      expect(profileImage).toBeInTheDocument
    })
  })
});