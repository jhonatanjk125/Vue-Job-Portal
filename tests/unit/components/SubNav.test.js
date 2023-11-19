import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/SubNav.vue'

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('displays the job count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText('2454');
      expect(jobCount).toBeInTheDocument();
    });
  });


  describe('when user is on jobs page', () => {
    it('does not display the job count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
    })
  })
  const jobCount = screen.queryByText('2454');
  expect(jobCount).not.toBeInTheDocument();
})