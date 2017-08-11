import { Angular4HttpPage } from './app.po';

describe('angular4-http App', () => {
  let page: Angular4HttpPage;

  beforeEach(() => {
    page = new Angular4HttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
